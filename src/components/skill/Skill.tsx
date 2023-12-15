import React from "react";
import styles from "./Skill.module.scss";
import { CardWrapper } from "../cardWrapper/CardWrapper";
import clsx from "clsx";

export type TSkill = {
  label: string;
  mastered?: boolean; // handles 🔥
};

interface SkillProps {
  layoutClassName?: string;
}

export const Skill: React.FC<SkillProps & TSkill> = ({ label, mastered, layoutClassName }) => {
  return (
    <CardWrapper size="sm" {...{ layoutClassName }}>
      <span className={clsx(styles.container, mastered && styles.mastered)}>{label}</span>
    </CardWrapper>
  );
};
