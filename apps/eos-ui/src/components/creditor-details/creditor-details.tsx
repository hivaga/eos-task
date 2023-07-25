import styles from './creditor-details.module.scss';
import {useContext, useEffect, useState} from "react";
import {AppStoreContext} from "../app";
import {UniqueID} from "../../types/DataTypes";
import CreditorInfoTable from "../creditor-info-table/creditor-info-table";

/* eslint-disable-next-line */
export interface PersonDetailsProps {
  selectedCreditorID: UniqueID | null
}

export function CreditorDetails(props: PersonDetailsProps) {
  const appStore = useContext(AppStoreContext);
  const [creditorData, setCreditorData] = useState<any>({});


  useEffect(() => {

    if (props.selectedCreditorID) {
      const data = appStore.workUnits.filter((workUnit) => workUnit.workUnitId === props.selectedCreditorID)[0];
      setCreditorData(data);
      console.log('CreditorDetails:', data);
    }else {
      setCreditorData(null);
      console.log('CreditorDetails:', null);
    }

  }, [props.selectedCreditorID]);


  return (
    <div className={styles.container}>
      <div className={styles.details_row}>
        <h4>Лични данни</h4>
        <div><CreditorInfoTable props={creditorData}/></div>
      </div>
      <div className={styles.details_row}>
        <h4>Случаи</h4>
        <div>{appStore.selectedDebtorID}</div>
      </div>
      <div className={styles.details_row}>
        <h4>Адреси</h4>
        <div>{appStore.selectedDebtorID}</div>
      </div>
    </div>
  );
}

export default CreditorDetails;
