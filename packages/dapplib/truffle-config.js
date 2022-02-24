require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember exchange hope knife fresh skull'; 
let testAccounts = [
"0xf97cf5e9b12dd204762579f04f90575d503005233461ea98ee8b4139ddad2b13",
"0x31703d050c65f1e216d7e1a1b88c69726aa52ff4432a92a1fdac120f02ad6d5d",
"0x6e8e65d76117e9281b37ab6997dbcc42502fb3d66809dda1b32f9dbe8c190524",
"0x0e49e1c2a7eb735bd17757ed16580e5b4351a263aab0aa69b5ff9ce94b486207",
"0xc128c66eec8ccc92327911213bc7f12c14a4cf70df902947e700efe434641707",
"0x1bc6d6011424a1849c585bac67253dd080dd9047da29d4ce7392a0430f97d765",
"0x676b3b44f9f531da7b52296707fb7054e6ec24e9410f6d4f1543943749f998ba",
"0xdcbf12c206255c03db2c3fc97842169ec4616e5f56f0c724553fabd459df81f7",
"0x7995d86925d0c0ad03ed4dfc89eed8407bdd32ae20475eb0d83137a74aa5880c",
"0xd38b7b309a59ca458b2f0467fbc9b6d2f74857c5d9db9a0dad1e1e5a61521c4b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

