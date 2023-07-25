// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import LeftMenu from "./left-menu/left-menu";
import React, {Dispatch, useState} from "react";
import addressesJson from "../assets/getPersonAdresses.json";
import workUnitsJson from "../assets/getWorkUnits.json";
import {UniqueID} from "../types/DataTypes";
import CreditorDetails from "./creditor-details/creditor-details";


export const AppStoreContext = React.createContext<{
  addresses: any[],
  setAddresses: Dispatch<any>,
  workUnits: any[],
  setWorkUnits: Dispatch<any>
  selectedDebtorID: UniqueID | null
  setSelectedDebtorID: Dispatch<any>
  selectedCreditorID: UniqueID | null
  setSelectedCreditorID: Dispatch<any>
}>({} as any);

export function App() {

  const [addresses, setAddresses] = useState(addressesJson);
  const [workUnits, setWorkUnits] = useState(workUnitsJson);
  const [selectedDebtorID, setSelectedDebtorID] = useState(null);
  const [selectedCreditorID, setSelectedCreditorID] = useState(null);

  const appStore = {
    addresses,
    setAddresses,
    workUnits,
    setWorkUnits,
    selectedDebtorID,
    setSelectedDebtorID,
    selectedCreditorID,
    setSelectedCreditorID
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
            {appStore.selectedCreditorID && <CreditorDetails selectedCreditorID={selectedCreditorID}></CreditorDetails>}
          </div>
          <div className={styles.content_container}>
            {appStore.selectedDebtorID && <CreditorDetails></CreditorDetails>}
          </div>
          <div></div>
        </div>
      </div>
    </AppStoreContext.Provider>
  );
}

export default App;
