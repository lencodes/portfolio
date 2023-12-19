import React from "react";
import styles from "./Skill.module.scss";
import clsx from "clsx";

export type TSkill = {
  iconSrc: string;
  label: string;
  highlighted?: boolean;
};

interface SkillProps {
  skill: TSkill;
  layoutClassName?: string;
}

export const Skill: React.FC<SkillProps> = ({ skill: { iconSrc, label, highlighted }, layoutClassName }) => {
  return (
    <div className={clsx(styles.container, layoutClassName)}>
      <div className={styles.imageContainer}>
        <img src={iconSrc} alt={label} />
      </div>

      <span className={clsx(styles.label, [highlighted && styles.highlighted])}>{label}</span>
    </div>
  );
};
