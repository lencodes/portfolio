import React from "react";
import styles from "./RecommendationCard.module.scss";
import { CardWrapper } from "../cardWrapper/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export type TRecommendation = {
  id: string;
  name: string;
  role: string;
  profilePhotoSrc: string;
  review: string;
  originalLanguage?: "nl" | "en"; // handles translation icon based on current language
};

interface RecommendationCardProps {
  recommendation: TRecommendation;
  layoutClassName?: string;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation: { name, role, profilePhotoSrc, review, originalLanguage = "nl" },
  layoutClassName,
}) => {
  const [isTranslated] = React.useState<boolean>(originalLanguage === "nl"); // to-do: once translations are implemented, this should check the currentLanguage

  return (
    <CardWrapper {...{ layoutClassName }}>
      <div className={styles.container}>
        {isTranslated && <FontAwesomeIcon className={styles.translatedIcon} icon={faLanguage} />}

        <div className={styles.header}>
          <img src={profilePhotoSrc} alt={name} />

          <div className={styles.colleague}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <p>{review}</p>
      </div>
    </CardWrapper>
  );
};
