import React, { useContext } from "react";
import MassInput from "../components/MainPage/MassInput/MassInput";
import MeteorsView from "../components/MainPage/MeteorsView/MeteorsView";
import YearSelector from "../components/MainPage/YearSelector/YearSelector";
import { MeteorListContext } from "../context/MeteorListContext";
import styles from "./MainPage.module.css";

const MainPage: React.FC = () => {
  const { meteorList } = useContext(MeteorListContext);

const canShowMassFilter=()=>(meteorList.currentYear&&meteorList.basedOnMass.length>0)

  return (
    <React.Fragment>
      <div className={`${styles.div} ${styles.divBasedOnWidth}`}>
        <div className={styles.selectorsDiv}>
          <YearSelector />
        </div>
        <div className={styles.selectorsDiv}>
          { canShowMassFilter()&& <MassInput />}
        </div>
      </div>
      <MeteorsView />
    </React.Fragment>
  );
};

export default MainPage;
