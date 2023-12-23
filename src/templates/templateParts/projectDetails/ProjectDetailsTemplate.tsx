import React from "react";
import styles from "./ProjectDetailsTemplate.module.scss";
import { useSpring, animated, config, useInView } from "react-spring";
import { Container } from "../../../components/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleArrowUp,
  faCircleXmark,
  faClock,
  faLocationDot,
  faSquareArrowUpRight,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { SkillsList } from "../../../components/skillsList/SkillsList";
import { TSkillLabel } from "../../../data/skills";
import { RecommendationCard, TRecommendation } from "../../../components/recommendationCard/RecommendationCard";
import { logGoogleAnalyticsProjectView } from "../../../analytics/analytics";

export type TProject = {
  id: string;
  title: string;
  subtitle: string;
  logoSrc: string;
  cardImageSrc: string;
  duration: string;
  location: string;
  years: string;
  details: {
    title: JSX.Element;
    headerImageSrc: string;
    skills: Array<TSkillLabel>;
    responsibilities: Array<JSX.Element>;
    recommendation?: TRecommendation;
    outboundLink?: {
      label: JSX.Element;
      href: string;
    };
  };
};

interface ProjectDetailsTemplateProps {
  onClose: () => void;
  mousePosition: { x: number; y: number };
  project: TProject;
}

export const ProjectDetailsTemplate: React.FC<ProjectDetailsTemplateProps> = ({ onClose, mousePosition, project }) => {
  const [topBarRef, topBarIsInView] = useInView();
  const [topBarAnimationCompleted, setTopBarAnimationCompleted] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.key === "Escape" && onClose();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose]);

  React.useEffect(() => {
    logGoogleAnalyticsProjectView(project.title);
  }, [project.title]);

  const bounceInSpring = {
    delay: 500,
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: config.wobbly,
  };

  const bounceUpSpring = {
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: config.wobbly,
  };

  const bounceInFloatingTopBar = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: !topBarIsInView && topBarAnimationCompleted ? 1 : 0,
      transform: !topBarIsInView && topBarAnimationCompleted ? "translateY(0px)" : "translateY(20px)",
    },
    config: config.wobbly,
  });

  return (
    <div className={styles.containerWrapper}>
      <div
        className={styles.background}
        style={{ top: `${mousePosition.y - 50}px`, left: `${mousePosition.x - 50}px` }}
      />
      <Container layoutClassName={styles.container}>
        <animated.div
          ref={topBarRef}
          className={styles.topBar}
          style={useSpring({ ...bounceUpSpring, onRest: () => setTopBarAnimationCompleted(true), delay: 2000 })}
        >
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faSquareXmark} /> <span className={styles.closeLabel}>Close window</span>
          </button>

          {project.details.outboundLink && (
            <button className={styles.outboundLink} onClick={() => window.open(project.details.outboundLink?.href)}>
              {project.details.outboundLink.label} <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </button>
          )}
        </animated.div>

        <animated.div
          className={styles.floatingTopBar}
          style={{ ...bounceInFloatingTopBar, pointerEvents: topBarIsInView ? "none" : "all" }}
        >
          <FontAwesomeIcon onClick={onClose} icon={faCircleXmark} />

          {project.details.outboundLink && (
            <FontAwesomeIcon
              onClick={() => window.open(project.details.outboundLink?.href)}
              className={styles.outbound}
              icon={faCircleArrowUp}
            />
          )}
        </animated.div>

        <animated.section
          className={styles.headerContainer}
          style={{
            ...useSpring({ ...bounceInSpring, delay: 700 }),
            backgroundImage: `url(${project.details.headerImageSrc})`,
          }}
        >
          <animated.div style={useSpring({ ...bounceUpSpring, delay: 750 })} className={styles.headerContent}>
            <img src={project.logoSrc} alt={project.title} />

            <h3>
              {project.title} <span className={styles.subtitle}>{project.subtitle}</span>
            </h3>

            <div className={styles.metaContainer}>
              <span>
                <FontAwesomeIcon icon={faClock} />
                {project.duration}
              </span>

              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                {project.location}
              </span>

              <span>
                <FontAwesomeIcon icon={faCalendar} />
                {project.years}
              </span>
            </div>
          </animated.div>
        </animated.section>

        <animated.section style={useSpring({ ...bounceUpSpring, delay: 1250 })}>
          <h1>{project.details.title}</h1>
        </animated.section>

        <animated.section style={useSpring({ ...bounceUpSpring, delay: 1250 })}>
          <div className={styles.content}>
            <div>
              <h2>
                <strong>Key responsibilities</strong>, on a daily basis
              </h2>

              <ul className={styles.responsibilities}>
                {project.details.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {project.details.recommendation && (
              <div>
                <h2>
                  <strong>Recommendation</strong>
                </h2>

                <RecommendationCard recommendation={project.details.recommendation} />
              </div>
            )}
          </div>
        </animated.section>

        <animated.section
          className={styles.technologiesContainer}
          style={useSpring({ ...bounceUpSpring, delay: 1500 })}
        >
          <h2>
            <strong>Technologies and applications</strong>, used during this project
          </h2>

          <SkillsList skills={project.details.skills} />
        </animated.section>
      </Container>
    </div>
  );
};
