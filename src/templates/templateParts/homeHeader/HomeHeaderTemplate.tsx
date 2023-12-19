import React from "react";
import styles from "./HomeHeaderTemplate.module.scss";
import { SkillsList } from "../../../components/skillsList/SkillsList";

export const HomeHeaderTemplate: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headshot}>
        <img src="/images/global/lennart-bank-profile-picture.jpg" alt="Lennart Bank" />

        <h2>
          Lennart Bank, B.Sc.
          <span className={styles.subtitle}>Freelance developer from the Netherlands</span>
        </h2>
      </div>

      <h1>
        With over <strong>eight years of Frontend Development experience</strong>, I specialize in crafting scalable
        solutions using React and TypeScript.
      </h1>

      <SkillsList />
    </section>
  );
};
