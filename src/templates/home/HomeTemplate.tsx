import React from "react";
import styles from "./HomeTemplate.module.scss";
import { Container } from "../../components/container/Container";
import { HomeHeaderTemplate } from "../templateParts/homeHeader/HomeHeaderTemplate";

export const HomeTemplate: React.FC = () => {
  return (
    <Container layoutClassName={styles.container}>
      <HomeHeaderTemplate />
    </Container>
  );
};
