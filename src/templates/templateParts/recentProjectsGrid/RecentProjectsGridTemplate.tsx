import React from "react";
import styles from "./RecentProjectsGridTemplate.module.scss";
import { ProjectCard } from "../../../components/projectCard/ProjectCard";
import { recentProjects } from "../../../data/recentProjects";

export const RecentProjectsGridTemplate: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>
        <strong>Most recent freelance projects</strong>, click to explore
      </h2>

      <div className={styles.projects}>
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} {...{ project }} />
        ))}
      </div>
    </div>
  );
};
