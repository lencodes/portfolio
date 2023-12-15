import React from "react";
import "./styling/global.module.scss";
import styles from "./App.module.scss";
import { HomeTemplate } from "./templates/home/HomeTemplate";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <HomeTemplate />
      </section>
    </div>
  );
};

export default App;
