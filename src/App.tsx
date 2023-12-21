import React from "react";
import "./styling/global.module.scss";
import styles from "./App.module.scss";
import "./styling/theme.css";
import { HomeTemplate } from "./templates/home/HomeTemplate";
import clsx from "clsx";
import { ThemeSwitcher } from "./components/themeSwitcher/ThemeSwitcher";

const App: React.FC = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  return (
    <div className={clsx(styles.container, theme)}>
      <section className={styles.content}>
        <ThemeSwitcher
          currentTheme={theme}
          handleSwitch={() => setTheme((theme) => (theme === "light" ? "dark" : "light"))}
        />

        <HomeTemplate />
      </section>
    </div>
  );
};

export default App;
