// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Button from 'react-bootstrap/Button';


export function App() {
  return (
    <div>
      <button className={styles.button}>Hello</button>
      <Button variant="primary">Bootstrap</Button>
    </div>
  );
}

export default App;
