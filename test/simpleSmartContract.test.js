const SimpleSmartContract = artifacts.require('./SimpleSmartContract.sol');

contract('SimpleSmartContract',()=>{
    it('Should deploy smart contract ', async ()=>{
        const simpleSmartContract = await SimpleSmartContract.deployed()
        console.log(simpleSmartContract.address);
        assert(simpleSmartContract.address !== '');
    });
});