import styles from './app.module.scss';
import LeftMenu from "./left-menu/left-menu";
import React, {Dispatch, useState} from "react";
import addressesJson from "../assets/getPersonAdresses.json";
import workUnitsJson from "../assets/getWorkUnits.json";
import casesJson from "../assets/getCaseInfo.json";
import {Address, UniqueID} from "../types/DataTypes";
import CreditorDetails from "./creditor-details/creditor-details";
import DebtorDetails from "./debtor-details/debtor-details";


export const AppStoreContext = React.createContext<{
  cases: any[],
  setCases: Dispatch<any>,
  addresses: Address[],
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
  const [cases, setCases] = useState(casesJson);
  const [selectedDebtorID, setSelectedDebtorID] = useState(null);
  const [selectedCreditorID, setSelectedCreditorID] = useState(null);


  const appStore = {
    addresses,
    setAddresses,
    cases,
    setCases,
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
            {appStore.selectedDebtorID && <DebtorDetails selectedDebtorID={selectedDebtorID}></DebtorDetails>}
          </div>

        </div>
      </div>
    </AppStoreContext.Provider>
  );
}

export default App;
