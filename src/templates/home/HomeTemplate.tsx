import React from "react";
import styles from "./HomeTemplate.module.scss";
import { Container } from "../../components/container/Container";
import LENNART_BANK_PROFILE_PICTURE from "../../resources/global-images/lennart-bank-profile-picture.jpg";
import { Skill } from "../../components/skill/Skill";
import { skills } from "../../data/skills";

export const HomeTemplate: React.FC = () => {
  return (
    <Container layoutClassName={styles.container}>
      <section className={styles.header}>
        <div className={styles.headshot}>
          <img src={LENNART_BANK_PROFILE_PICTURE} alt="Lennart Bank" />

          <h2>
            Lennart Bank, B.Sc.
            <span className={styles.subtitle}>Freelance developer from the Netherlands</span>
          </h2>
        </div>

        <h1>
          With over <strong>eight years of Frontend Development experience</strong>, I specialize in crafting scalable
          solutions using React and TypeScript.
        </h1>

        <div className={styles.skills}>
          {skills.map((skill, idx) => (
            <Skill key={`${skill.label}--${idx}`} {...skill} />
          ))}
        </div>
      </section>
    </Container>
  );
};
