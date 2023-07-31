import styles from './creditor-details.module.scss';
import {useContext, useEffect, useState} from "react";
import {AppStoreContext} from "../app";
import {Address, Case, UniqueID} from "../../types/DataTypes";
import CreditorInfoTable from "../creditor-info-table/creditor-info-table";
import {CasesTable} from "../cases-table/cases-table";
import AddressTable from "../address-table/address-table";
import AddAddressDialog from "../add-address-dialog/add-address-dialog";

export interface PersonDetailsProps {
  selectedCreditorID: UniqueID | null
}

export function CreditorDetails({selectedCreditorID}: PersonDetailsProps) {
  const appStore = useContext(AppStoreContext);
  const [creditorData, setCreditorData] = useState<any>({});
  const [casesList, setCasesList] = useState<Case[]>([]);
  const [addressesList, setAddressesList] = useState<Address[]>([]);


  useEffect(() => {

    if (selectedCreditorID) {
      const data: {
        cases: { workUnitId: UniqueID }[]
      } = appStore.workUnits.filter((workUnit) => workUnit.workUnitId === selectedCreditorID)[0];
      setCreditorData(data);

      const foundCases = data.cases
        .map((value) => value.workUnitId)
        .reduce<any>((prev, nextID) => {
          const foundCase: any = appStore.cases.find(unknownCase => {
            return unknownCase.workUnitId === nextID;
          })

          if (foundCase) {
            prev.push(foundCase);
          }
          return prev;

        }, []);

      setCasesList(foundCases);

      const foundAddresses = appStore.addresses.filter((address) => address.id === selectedCreditorID);
      setAddressesList(foundAddresses);

      console.log('CreditorDetails:', data);
      console.log('Found cases:', foundCases);
      console.log('Found addresses:', foundAddresses);

    } else {
      setCreditorData(null);
      console.log('CreditorDetails:', null);
    }

  }, [selectedCreditorID, appStore.addresses]);


  return (


    <div className={styles.container}>
      <div className={styles.details_row}>
        <h4>Лични данни</h4>
        <div>{selectedCreditorID && <CreditorInfoTable props={creditorData}/>}</div>
      </div>
      <div className={styles.details_row}>`
        <h4>Случаи</h4>
        <div>{selectedCreditorID && <CasesTable cases={casesList}/>}</div>
      </div>
      <div className={styles.details_row}>
        <h4>Адреси</h4>
        <div className={styles.container}>
          <div><AddressTable addresses={addressesList}/></div>
          {selectedCreditorID && <AddAddressDialog workUnitId={selectedCreditorID}/>}
        </div>
      </div>
    </div>

  );
}

export default CreditorDetails;
