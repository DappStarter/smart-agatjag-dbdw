require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict help frame tribe stock recipe magic minute gesture define army gift'; 
let testAccounts = [
"0x1ef4139d22f45e853e1377507da2cd721dbae810cdde6aa4db3d36023ce28f96",
"0x718b96d0549ab09d2c93c663988a3fd0962a6b1eecf30d8f9772805e5fae8bce",
"0xa95a85d518dc0a625f8cbfb69e54f62226fda06c0c667bab8e0433ecc10f3550",
"0xa3bb8c83a6c582d04adbbd4791fd2396be323a8a9eb8ac0c50cc06f75a164c92",
"0x629c54e46ad727f41d0794f34befc5c1144055fe450cecb1381ebfe25faab33e",
"0x678271b8c3295b30edf1b98594dd2fdd36e418e20791096fba3b15f13edd14d8",
"0x2b73b573b95604d458dd9b5b2aedb0fef609cc6e02bd16f568406fbd46b6d45f",
"0xaed25a6736896847eabaf4e6aee762cd5802894f52de424f816adf2f6ef319ec",
"0xa1aeab223b41e95f4038ade244696ed7313c70f1fcd31534a71e57ecbcfa6b06",
"0xaf79fafe74f311654060c914907f9dcc29d4b130011c984f0d5feb2b6241960b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


