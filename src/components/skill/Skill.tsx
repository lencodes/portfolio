import React from "react";
import { useSpring, animated, config } from "react-spring";
import styles from "./Skill.module.scss";
import clsx from "clsx";
import { Tilt } from "react-tilt";

export type TSkill = {
  iconSrc: string;
  label: string;
  tooltipContent: string;
};

interface SkillProps {
  skill: TSkill;
  idx: number;
  layoutClassName?: string;
}

export const Skill: React.FC<SkillProps> = ({ skill: { iconSrc, label, tooltipContent }, idx, layoutClassName }) => {
  const bounceInSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: config.wobbly,
    delay: idx * 50,
  });

  return (
    <Tilt className={styles.tilt} options={{ max: 10, perspective: 1000, scale: 1 }}>
      <animated.div
        style={bounceInSpring}
        data-tooltip-id="tooltip"
        data-tooltip-content={tooltipContent}
        className={clsx(styles.container, layoutClassName)}
      >
        <div className={styles.imageContainer}>
          <img src={iconSrc} alt={label} />
        </div>

        <span className={styles.label}>{label}</span>
      </animated.div>
    </Tilt>
  );
};
