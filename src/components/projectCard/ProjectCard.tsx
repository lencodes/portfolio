import React from "react";
import styles from "./ProjectCard.module.scss";
import { Tilt } from "react-tilt";

export type TProjectCard = {
  title: string;
  subtitle: string;
  logoSrc: string;
  backgroundImageSrc: string;
};

interface ProjectCardProps {
  layoutClassName?: string;
}

export const ProjectCard: React.FC<ProjectCardProps & TProjectCard> = ({
  title,
  subtitle,
  logoSrc,
  backgroundImageSrc,
}) => {
  return (
    <Tilt className={styles.tilt} options={{ max: 10, perspective: 1000, scale: 1 }}>
      <div className={styles.container} style={{ backgroundImage: `url(${backgroundImageSrc})` }}>
        <div className={styles.content}>
          <img className={styles.logo} src={logoSrc} alt={title} />

          <h3>
            {title} <span className={styles.subtitle}>{subtitle}</span>
          </h3>
        </div>
      </div>
    </Tilt>
  );
};
