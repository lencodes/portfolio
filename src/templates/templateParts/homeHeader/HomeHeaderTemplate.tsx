import React from "react";
import styles from "./HomeHeaderTemplate.module.scss";
import { SkillsList } from "../../../components/skillsList/SkillsList";
import { animated, config, useSpring } from "react-spring";

export const HomeHeaderTemplate: React.FC = () => {
  const bounceInHeadshot = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: 1,
      transform: "translateY(20px)",
    },
    config: config.wobbly,
  });

  return (
    <section className={styles.container}>
      <animated.div style={bounceInHeadshot} className={styles.headshot}>
        <img src="/images/global/lennart-bank-profile-picture.jpg" alt="Lennart Bank" />

        <h2>
          Lennart Bank, B.Sc.
          <span className={styles.subtitle}>Freelance developer from the Netherlands</span>
        </h2>
      </animated.div>

      <h1>
        With over <strong>eight years of Frontend Development experience</strong>, I specialize in crafting scalable
        solutions using React and TypeScript.
      </h1>

      <SkillsList />
    </section>
  );
};
