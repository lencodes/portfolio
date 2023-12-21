import React from "react";
import "./styling/global.module.scss";
import styles from "./App.module.scss";
import "./styling/theme.css";
import { HomeTemplate } from "./templates/home/HomeTemplate";
import clsx from "clsx";

const App: React.FC = () => {
  return (
    <div className={clsx(styles.container, "dark")}>
      <section className={styles.content}>
        <HomeTemplate />
      </section>
    </div>
  );
};

export default App;
