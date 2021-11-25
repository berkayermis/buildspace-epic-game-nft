const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('EpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Dizzy Tongue", "Fancy Maya", "King of the Belgrad"],       // Names
      ["https://ibb.co/LQvxHk9", // Images
      "https://ibb.co/0crYf9T", 
      "https://ibb.co/Ct7Ty2B"],
      [300, 200, 100],                    // HP values
      [100, 100, 50]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();