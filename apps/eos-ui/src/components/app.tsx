// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import LeftMenu from "./left-menu/left-menu";
import {AppStore} from "../store/AppStore";
import React from "react";


const appStore = new AppStore();
export const AppStoreContext = React.createContext(appStore);

export function App() {
  return (
    <AppStoreContext.Provider value={appStore}>
    <div className={styles.application}>
      <div className={styles.header}><span className={styles.red}>EOS</span><span className={styles.black}> Group</span></div>
      <div className={styles.main_container}>
        <div className={styles.left_menu_container}>
          <LeftMenu></LeftMenu>
        </div>
        <div className={styles.content_container}>

        </div>

        <div></div>
      </div>
    </div>
    </AppStoreContext.Provider>
  );
}

export default App;
