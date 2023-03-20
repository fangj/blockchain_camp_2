
const { ethers, network, artifacts } = require("hardhat");


async function main() {
  let bank = await ethers.getContractAt("Bank",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3");
    [account00,account01,account02]=await ethers.getSigners();
    const bank_02= bank.connect(account02);
    let tx = await bank_02.withdraw();
    await tx.wait();
    console.log("account02 withdrawed")

}

main();



