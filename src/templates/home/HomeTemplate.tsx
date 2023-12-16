import React from "react";
import styles from "./HomeTemplate.module.scss";
import { Container } from "../../components/container/Container";
import { HomeHeaderTemplate } from "../templateParts/homeHeader/HomeHeaderTemplate";
import { RecentProjectsGridTemplate } from "../templateParts/recentProjectsGrid/RecentProjectsGridTemplate";
import { RecommendationsTemplate } from "../templateParts/recommendations/RecommendationsTemplate";

export const HomeTemplate: React.FC = () => {
  return (
    <Container layoutClassName={styles.container}>
      <HomeHeaderTemplate />

      <RecentProjectsGridTemplate />

      <RecommendationsTemplate />

      <div id="portal-root" />
    </Container>
  );
};
