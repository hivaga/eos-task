import styles from './address.module.scss';

/* eslint-disable-next-line */
export interface AddressProps {}

export function Address(props: AddressProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Address!</h1>
    </div>
  );
}

export default Address;
