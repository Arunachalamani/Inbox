// deploy code will go here

const HDWalletprovider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletprovider( 
    'crater right urge enjoy stove economy access federal olive avoid drink example',

    'https://rinkeby.infura.io/v3/f0978dbacf514c65993818421c61c5e0'

);

const web3 = new Web3(provider);
 
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

 const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there']})
    .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop()
    
};
deploy();