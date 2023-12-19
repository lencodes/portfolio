import React from "react";
import { useSpring, animated, config } from "react-spring";
import styles from "./Skill.module.scss";
import clsx from "clsx";
import { Tilt } from "react-tilt";

export type TSkill = {
  iconSrc: string;
  label: string;
};

interface SkillProps {
  skill: TSkill;
  idx: number;
  layoutClassName?: string;
}

export const Skill: React.FC<SkillProps> = ({ skill: { iconSrc, label }, idx, layoutClassName }) => {
  const bounceInSpring = useSpring({
    from: { opacity: 0, transform: "scale(1.2)" },
    to: { opacity: 1, transform: "scale(1.0" },
    config: config.wobbly,
    delay: idx * 50,
  });

  return (
    <Tilt className={styles.tilt} options={{ max: 10, perspective: 1000, scale: 1 }}>
      <animated.div style={bounceInSpring} className={clsx(styles.container, layoutClassName)}>
        <div className={styles.imageContainer}>
          <img src={iconSrc} alt={label} />
        </div>

        <span className={styles.label}>{label}</span>
      </animated.div>
    </Tilt>
  );
};
