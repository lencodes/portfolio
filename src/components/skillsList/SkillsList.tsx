import React from "react";
import styles from "./SkillsList.module.scss";
import { ScrollWrapper } from "../scrollWrapper/ScrollWrapper";
import { TSkillLabel, skills as allSkills } from "../../data/skills";
import { Skill, TSkill } from "../skill/Skill";

interface SkillsListProps {
  skills?: Array<TSkillLabel>; // defaults to all skills
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  const [listedSkills, setListedSkills] = React.useState<Array<TSkill>>([]);

  React.useEffect(() => {
    if (!skills) {
      setListedSkills(allSkills);
      return;
    }

    const orderedSkills = skills.map((skillLabel) => allSkills.find((skill) => skill.label === skillLabel));

    setListedSkills(orderedSkills.filter((skill) => skill !== undefined) as TSkill[]);
  }, [skills]);

  if (!listedSkills.length) return <></>;

  return (
    <ScrollWrapper>
      <div className={styles.skillsContainer}>
        {listedSkills.map((skill, idx) => (
          <Skill key={idx} {...{ skill, idx }} />
        ))}
      </div>
    </ScrollWrapper>
  );
};
