import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x978e13a63702326BEae10DFbDeD920c6F960B398'
);

export default instance;