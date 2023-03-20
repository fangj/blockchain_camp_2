
const { ethers, network, artifacts } = require("hardhat");


async function main() {
  // let bank = await ethers.getContractAt("Bank",
  //   "0x5FbDB2315678afecb367f032d93F642f64180aa3");

    let bank = await ethers.getContractAt("Bank",
    "0xC88C106367e87e69CEdAF2E6fB1D0e2cBC2c8DF9"); //ganache
    [account00,account01,account02]=await ethers.getSigners();
    const bank_00= bank.connect(account00);
    let tx = await bank_00.withdraw();
    await tx.wait();
    console.log("account00 withdrawed")

}

main();



