import React from "react";
import styles from "./ThemeSwitcher.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { animated, config, useSpring } from "react-spring";
import clsx from "clsx";

interface ThemeSwitcherProps {
  currentTheme: "light" | "dark";
  handleSwitch: () => any;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, handleSwitch }) => {
  const bounceUpSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: config.wobbly,
    delay: 1000,
  });

  return (
    <animated.button
      style={bounceUpSpring}
      className={clsx(styles.button, styles[currentTheme])}
      onClick={handleSwitch}
    >
      <span>
        Switch theme <FontAwesomeIcon icon={currentTheme === "light" ? faMoon : faSun} />
      </span>
    </animated.button>
  );
};
