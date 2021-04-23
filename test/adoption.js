const adoption = artifacts.require("adoption");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("adoption", function ( accounts ) {
  describe('First tests', () => {
    let instance;

    before(async () => {
      instance = await adoption.deployed();
    });

    it('User adopts the pet', async () => {
      await instance.adopt.sendTransaction(8, {from: accounts[0]});
      let adopter = await instance.adopters.call(8);
      assert.equal(adopter, accounts[0], "[Incorrect owner adress]");
    });

    it('Should get adopter adress with pet id', async () => {
      let adopters = await instance.getAdopters.call();
      assert.equal(adopters[8], accounts[0], "[Owner adress not recorded]");
    });

    it('Should throw if pet id is invalid', async () => {
      try {
        await instance.adopt.sendTransaction(17, {from: accounts[0]});
        assert.fail(true, false, "[The function did not throw]");
      } catch (error) {
        assert.include(String(error), "revert", `Expected to revert, but got ${error}`);
      }
    });
  });
});
