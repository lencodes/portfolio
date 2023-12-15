import React from "react";
import styles from "./HomeTemplate.module.scss";
import { Container } from "../../components/container/Container";
import { HomeHeaderTemplate } from "../templateParts/homeHeader/HomeHeaderTemplate";
import { RecentProjectsGridTemplate } from "../templateParts/recentProjectsGrid/RecentProjectsGridTemplate";

export const HomeTemplate: React.FC = () => {
  return (
    <Container layoutClassName={styles.container}>
      <section>
        <HomeHeaderTemplate />
      </section>

      <section>
        <RecentProjectsGridTemplate />
      </section>

      <div id="portal-root" />
    </Container>
  );
};
