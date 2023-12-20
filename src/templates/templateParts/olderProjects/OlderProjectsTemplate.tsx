import React from "react";
import styles from "./OlderProjectsTemplate.module.scss";
import { ProjectCard } from "../../../components/projectCard/ProjectCard";
import { ScrollWrapper } from "../../../components/scrollWrapper/ScrollWrapper";
import { olderProjects } from "../../../data/olderProjects";

export const OlderProjectsTemplate: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>
        <strong>Older</strong> freelance work
      </h2>

      <ScrollWrapper hasTiltingChildren>
        <div className={styles.projects}>
          {olderProjects.map((project) => (
            <ProjectCard layoutClassName={styles.project} key={project.id} {...{ project }} />
          ))}
        </div>
      </ScrollWrapper>
    </section>
  );
};
