const { WalletServer } = require('cardano-wallet-js');
( async function  test (){
  let walletServer = WalletServer.init('http://localhost:8090/v2');
let information = await walletServer.getNetworkInformation();
console.log(information);
})()