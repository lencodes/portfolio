import React from "react";
import styles from "./ProjectDetailsTemplate.module.scss";
import { Container } from "../../../components/container/Container";

export type TProject = {
  title: string;
  subtitle: string;
  logoSrc: string;
  cardImageSrc: string;
};

interface ProjectDetailsTemplateProps {
  onClose: () => void;
  mousePosition: { x: number; y: number };
}

export const ProjectDetailsTemplate: React.FC<ProjectDetailsTemplateProps> = ({ onClose, mousePosition }) => {
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.key === "Escape" && onClose();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose]);

  return (
    <div className={styles.containerWrapper}>
      <div
        className={styles.background}
        style={{ top: `${mousePosition.y - 50}px`, left: `${mousePosition.x - 50}px` }}
      />
      <Container layoutClassName={styles.container}>
        <h1>Project detail page</h1>
      </Container>
    </div>
  );
};
