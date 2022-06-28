import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xBE0B75851286cAB53770Aaf6AfD0bC291EFA2dDC'
);

export default instance;