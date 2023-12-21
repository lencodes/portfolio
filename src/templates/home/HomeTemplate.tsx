import React from "react";
import styles from "./HomeTemplate.module.scss";
import { Container } from "../../components/container/Container";
import { HomeHeaderTemplate } from "../templateParts/homeHeader/HomeHeaderTemplate";
import { RecentProjectsGridTemplate } from "../templateParts/recentProjectsGrid/RecentProjectsGridTemplate";
import { RecommendationsTemplate } from "../templateParts/recommendations/RecommendationsTemplate";
import { OlderProjectsTemplate } from "../templateParts/olderProjects/OlderProjectsTemplate";
import { Tooltip } from "react-tooltip";
import { LinksTemplate } from "../templateParts/links/LinksTemplate";
import { animated, config, useSpring } from "react-spring";

export const HomeTemplate: React.FC = () => {
  const bounceUpSpring = {
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: config.wobbly,
  };

  return (
    <Container layoutClassName={styles.container}>
      <animated.div style={useSpring(bounceUpSpring)}>
        <HomeHeaderTemplate />
      </animated.div>

      <animated.div style={useSpring({ ...bounceUpSpring, delay: 750 })}>
        <RecentProjectsGridTemplate />
      </animated.div>

      <RecommendationsTemplate />

      <OlderProjectsTemplate />

      <LinksTemplate />

      <div id="portal-root" />

      <Tooltip style={{ maxWidth: "300px", textAlign: "center" }} id="tooltip" />
    </Container>
  );
};
