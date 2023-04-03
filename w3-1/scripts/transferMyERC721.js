const hre = require("hardhat");

async function main() {

    //⽤户 A 调⽤ ERC20 的 Approve(Bank， 数量);
    //⽤户 A 调⽤ 合约 B 的 deposite(); 完成存款

    const ERC721Address="0x795D8065Fc6D76130cb8565487697AE2dD5Ab70a";

    const MyERC721 = await hre.ethers.getContractAt("MyERC721",ERC721Address); 

    [account00,account01]=await ethers.getSigners();

    const myERC721_01=MyERC721.connect(account00);

    const balance = await myERC721_01.balanceOf(account00.address);
    console.log(`balance of ${account00.address} is ${balance}`);

    let tx=await myERC721_01.transferFrom(account00.address,account01.address,"0",{gasLimit: 2400000,gasPrice: ethers.utils.parseUnits('9.0', 'gwei')});
    console.log("transfered a token");

    const balance2 = await myERC721_01.balanceOf(account00.address);
    console.log(`balance of ${account00.address} is ${balance2}`);


}
//MyERC20 deployed to 0x91285bB114E75CF03acD1Fa216b1987B9c72dF49


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
