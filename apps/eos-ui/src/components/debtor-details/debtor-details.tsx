import styles from './debtor-details.module.scss';
import {Address, UniqueID} from "../../types/DataTypes";
import AddressTable from "../address-table/address-table";
import {useContext, useEffect, useState} from "react";
import {AppStoreContext} from "../app";

export interface DebtorDetailsProps {
  selectedDebtorID: string | null
}

export function DebtorDetails({selectedDebtorID}: DebtorDetailsProps) {

  const appStore = useContext(AppStoreContext);
  const [addressesList, setAddressesList] = useState<Address[]>([]);


  useEffect(() => {

    if (selectedDebtorID) {
      const data: {
        cases: { workUnitId: UniqueID }[]
      } = appStore.workUnits.filter((workUnit) => workUnit.workUnitId === selectedDebtorID)[0];

      const foundAddresses = appStore.addresses.filter((address) => address.id === selectedDebtorID);
      setAddressesList(foundAddresses);

      console.log('Found addresses:', foundAddresses);

    }

  }, [selectedDebtorID]);


  return (
    <div className={styles.container}>
      <div className={styles.details_row}>
        <h4>Адреси</h4>
        <div><AddressTable addresses={addressesList}/></div>
      </div>
    </div>

  );
}

export default DebtorDetails;
