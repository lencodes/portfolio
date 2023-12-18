import React from "react";
import styles from "./LinkCard.module.scss";
import { CardWrapper } from "../cardWrapper/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";

export type TLink = {
  id: string;
  title: string;
  subtitle: string;
  iconSrc: string;
  description: string;
  link: string;
};

interface LinkCardProps {
  link: TLink;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link: { title, subtitle, iconSrc, description, link } }) => {
  return (
    <CardWrapper>
      <div className={styles.container} onClick={() => window.open(link)}>
        <FontAwesomeIcon className={styles.icon} icon={faExternalLinkSquare} />

        <div className={styles.header}>
          <img src={iconSrc} alt={title} />

          <div className={styles.title}>
            <strong>{title}</strong>
            <span>{subtitle}</span>
          </div>
        </div>

        <p>{description}</p>
      </div>
    </CardWrapper>
  );
};
