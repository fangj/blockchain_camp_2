const hre = require("hardhat");

async function main() {

    //⽤户 A 调⽤ ERC20 的 Approve(Bank， 数量);
    //⽤户 A 调⽤ 合约 B 的 deposite(); 完成存款

    const ERC20Address="0xDAE721C0024ae402921F3DF227C6e06245F3D87F";
    const VaultAddress="0xffa814BE989C0Fd3B2e36f27f761cB99D57D7781";

    const myERC20 = await hre.ethers.getContractAt("MyERC20",ERC20Address); 
    const vault= await hre.ethers.getContractAt("Vault",VaultAddress);

    [account00]=await ethers.getSigners();

    const myERC20_00=myERC20.connect(account00);
    let tx = await myERC20_00.approve(VaultAddress,hre.ethers.utils.parseEther("0.01"));
    await tx.wait();
    console.log("bank approved")

    const vault_00= vault.connect(account00);
    let tx2 = await vault_00.deposit(hre.ethers.utils.parseEther("0.01"));

    console.log("bank deposited")

    console.log("account address",account00.address)
    const balance=await myERC20.balanceOf(account00.address);

    console.log(`balance of ${account00.address} is ${balance}`);


}
//MyERC20 deployed to 0x91285bB114E75CF03acD1Fa216b1987B9c72dF49


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
