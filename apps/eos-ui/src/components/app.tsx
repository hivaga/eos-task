// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import LeftMenu from "./left-menu/left-menu";
import React, {Dispatch, useState} from "react";
import addressesJson from "../assets/getPersonAdresses.json";
import workUnitsJson from "../assets/getWorkUnits.json";
import {UniqueID, Unit} from "../types/DataTypes";
import PersonDetails from "./person-details/person-details";


export const AppStoreContext = React.createContext<{
  addresses: any[],
  setAddresses: Dispatch<any>,
  workUnits: any[],
  setWorkUnits: Dispatch<any>
  selectedPerson: UniqueID | null
  setSelectedPerson: Dispatch<any>
}>({} as any);

export function App() {

  const [addresses, setAddresses] = useState(addressesJson);
  const [workUnits, setWorkUnits] = useState(workUnitsJson);
  const [selectedPerson, setSelectedPerson] = useState(null);


  const appStore = {
    addresses, setAddresses, workUnits, setWorkUnits, selectedPerson, setSelectedPerson
  }

  return (
    <AppStoreContext.Provider value={appStore}>
      <div className={styles.application}>
        <div className={styles.header}><span className={styles.red}>EOS</span><span
          className={styles.black}> Group</span></div>
        <div className={styles.main_container}>
          <div className={styles.left_menu_container}>
            <LeftMenu></LeftMenu>
          </div>
          <div className={styles.content_container}>
            {appStore.selectedPerson && <PersonDetails></PersonDetails>}
          </div>

          <div></div>
        </div>
      </div>
    </AppStoreContext.Provider>
  );
}

export default App;
