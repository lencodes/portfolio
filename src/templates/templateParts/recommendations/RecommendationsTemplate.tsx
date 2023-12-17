import React from "react";
import styles from "./RecommendationsTemplate.module.scss";
import { recommendations } from "../../../data/recommendations";
import { RecommendationCard } from "../../../components/recommendationCard/RecommendationCard";

export const RecommendationsTemplate: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>
        <strong>Recommendations</strong>, from previous employers and colleagues
      </h2>

      <div className={styles.recommendations}>
        {recommendations.map((recommendation) => (
          <RecommendationCard key={recommendation.id} {...{ recommendation }} />
        ))}
      </div>
    </section>
  );
};
