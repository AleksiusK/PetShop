var adoption = artifacts.require("adoption");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(adoption);
};
