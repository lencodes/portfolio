import React from "react";
import styles from "./ProjectCard.module.scss";
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { ProjectPortalTemplate } from "../../templates/templateParts/projectPortal/ProjectPortalTemplate";
import { ProjectDetailsTemplate, TProject } from "../../templates/templateParts/projectDetails/ProjectDetailsTemplate";

interface ProjectCardProps {
  layoutClassName?: string;
}

export const ProjectCard: React.FC<ProjectCardProps & TProject> = ({ title, subtitle, logoSrc, cardImageSrc }) => {
  const [portalOpen, setPortalOpen] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPortalOpen(!portalOpen);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleClosePortal = () => setPortalOpen(false);

  return (
    <Tilt className={styles.tilt} options={{ max: 10, perspective: 1000, scale: 1 }}>
      <div className={styles.container} onClick={handleCardClick} style={{ backgroundImage: `url(${cardImageSrc})` }}>
        <div className={styles.content}>
          <FontAwesomeIcon className={styles.expandIcon} icon={faUpRightAndDownLeftFromCenter} />

          <img className={styles.logo} src={logoSrc} alt={title} />

          <h3>
            {title} <span className={styles.subtitle}>{subtitle}</span>
          </h3>
        </div>
      </div>

      {portalOpen && (
        <ProjectPortalTemplate>
          <ProjectDetailsTemplate onClose={handleClosePortal} {...{ mousePosition }} />
        </ProjectPortalTemplate>
      )}
    </Tilt>
  );
};
