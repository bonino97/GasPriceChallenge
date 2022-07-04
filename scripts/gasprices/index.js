import Web3 from 'web3';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_INFURA = process.env.API_INFURA;
const APIKEY_INFURA = process.env.APIKEY_INFURA;

const API_BLOCKNATIVE_GASPRICE = process.env.API_BLOCKNATIVE_GASPRICE;
const APIKEY_BLOCKNATIVE = process.env.APIKEY_BLOCKNATIVE;

class GasPriceChecker {
  web3;

  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(`${API_INFURA}${APIKEY_INFURA}`),
    );
  }

  async checkGasPrice() {
    let gasPriceInWei = await this.web3.eth.getGasPrice();
    let gasPriceInEth = this.web3.utils.fromWei(gasPriceInWei, 'ether');
    console.log(gasPriceInEth);
  }

  async checkGasPriceFromBlocknative() {
    let { data } = await axios.get(API_BLOCKNATIVE_GASPRICE, {
      headers: {
        Authorization: APIKEY_BLOCKNATIVE,
      },
    });
    console.log(data);
  }
}

let txChecker = new GasPriceChecker();
setInterval(() => {
  txChecker.checkGasPrice();
  txChecker.checkGasPriceFromBlocknative();
}, 1 * 1000);
