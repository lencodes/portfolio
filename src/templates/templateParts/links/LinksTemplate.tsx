import React from "react";
import styles from "./LinksTemplate.module.scss";
import { LinkCard } from "../../../components/linkCard/LinkCard";
import { links } from "../../../data/links";

export const LinksTemplate: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>
        <strong>More links</strong>, pages and downloads
      </h2>

      <div className={styles.linksContainer}>
        {links.map((link) => (
          <LinkCard key={link.id} {...{ link }} />
        ))}
      </div>
    </section>
  );
};
