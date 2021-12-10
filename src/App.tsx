import React from "react";
import styles from "./App.module.css";
import { MeteorListProvider } from "./context/MeteorListContext";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Space Meteors</h1>
      </header>
      <MeteorListProvider>
        <MainPage />
      </MeteorListProvider>
    </div>
  );
}

export default App;
