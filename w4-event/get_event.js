const { ethers } = require("ethers");

const ERC721ABI = require(`./deployments/abi/MyERC721.json`)
const ERC721Addr = require(`./deployments/dev/MyERC721.json`)

async function parseTransferEvent(event) {
    const TransferEvent = new ethers.Interface(["event Transfer(address indexed,address indexed,uint256 indexed)"]);
    let decodedData = TransferEvent.parseLog(event);
    // console.log(decodedData.args)
    console.log("from:" + decodedData.args[0]);
    console.log("to:" + decodedData.args[1]);
    console.log("value:" + decodedData.args[2]);

    // insert to db
}

async function main() {
    // console.log("ethers",ethers)
    const provider = new ethers.JsonRpcProvider("http://localhost:7545");
    
    let myerc721 = new ethers.Contract(ERC721Addr.address, ERC721ABI, provider)

    let filter = myerc721.filters.Transfer()
    filter.fromBlock = 0;
    filter.toBlock = 6;

    // let events = await myerc20.queryFilter(filter);
    let events = await provider.getLogs(filter);
    for (let i = 0; i < events.length; i++) {
        // console.log(events[i]);
        parseTransferEvent(events[i]);
    }
}

main()