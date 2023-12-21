import React from "react";
import styles from "./ThemeSwitcher.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { animated, config, useSpring } from "react-spring";

interface ThemeSwitcherProps {
  currentTheme: "light" | "dark";
  handleSwitch: () => any;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, handleSwitch }) => {
  const bounceUpSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: config.wobbly,
  });

  return (
    <animated.button style={bounceUpSpring} className={styles.button} onClick={handleSwitch}>
      {currentTheme === "light" && (
        <span className={styles.light}>
          Switch to <strong>dark</strong> theme <FontAwesomeIcon icon={faMoon} />
        </span>
      )}

      {currentTheme === "dark" && (
        <span className={styles.dark}>
          Switch to <strong>light</strong> theme <FontAwesomeIcon icon={faSun} />
        </span>
      )}
    </animated.button>
  );
};
