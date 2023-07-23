
// @ts-ignore
import workUnits from '../assets/getWorkUnits.json';
import addresses from '../assets/getPersonAdresses.json';

console.log('workUnits', workUnits);

export class AppStore {

  workUnits = workUnits;
  addresses = addresses;

}
