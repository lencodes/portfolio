import React from "react";
import styles from "./OlderProjectsTemplate.module.scss";
import { recentProjects } from "../../../data/recentProjects";
import { ProjectCard } from "../../../components/projectCard/ProjectCard";
import { ScrollWrapper } from "../../../components/scrollWrapper/ScrollWrapper";

export const OlderProjectsTemplate: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>
        <strong>Older</strong> freelance work
      </h2>

      <ScrollWrapper hasTiltingChildren>
        <div className={styles.projects}>
          {[...recentProjects, ...recentProjects].map((project) => (
            <ProjectCard layoutClassName={styles.project} key={project.id} {...{ project }} />
          ))}
        </div>
      </ScrollWrapper>
    </section>
  );
};
