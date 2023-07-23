import styles from './person-details.module.scss';
import {useContext} from "react";
import {AppStoreContext} from "../app";

/* eslint-disable-next-line */
export interface PersonDetailsProps {}

export function PersonDetails(props: PersonDetailsProps) {
  const appStore = useContext(AppStoreContext);

  return (
    <div className={styles['container']}>
      <h3>Seleted {appStore.selectedPerson}</h3>
    </div>
  );
}

export default PersonDetails;
