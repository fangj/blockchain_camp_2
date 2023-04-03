const hre = require("hardhat");

async function main() {

    //⽤户 A 调⽤ ERC20 的 Approve(Bank， 数量);
    //⽤户 A 调⽤ 合约 B 的 deposite(); 完成存款

    const ERC721Address="0x2Df86a8b321fd4D54CA3Fa266C3E2dAF92b67E77";

    const MyERC721 = await hre.ethers.getContractAt("MyERC721",ERC721Address); 

    [account00,account01]=await ethers.getSigners();

    const myERC721_01=MyERC721.connect(account01);

    const balance = await myERC721_01.balanceOf(account01.address);
    console.log(`balance of ${account01.address} is ${balance}`);

    console.log("myERC721_01",myERC721_01);
    let tx=await myERC721_01.transferFrom(account01.address,account00.address,"0");
    console.log("transfered a token");

    tx.await();
    const balance2 = await myERC721_01.balanceOf(account01.address);
    console.log(`balance of ${account01.address} is ${balance2}`);


}
//MyERC20 deployed to 0x91285bB114E75CF03acD1Fa216b1987B9c72dF49


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
