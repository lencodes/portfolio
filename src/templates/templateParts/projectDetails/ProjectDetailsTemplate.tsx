import React from "react";
import styles from "./ProjectDetailsTemplate.module.scss";
import { useSpring, animated, config } from "react-spring";
import { Container } from "../../../components/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faLocationDot,
  faSquareArrowUpRight,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

export type TProject = {
  id: string;
  title: string;
  subtitle: string;
  logoSrc: string;
  cardImageSrc: string;
  headerImageSrc: string;
  duration: string;
  location: string;
  years: string;
};

interface ProjectDetailsTemplateProps {
  onClose: () => void;
  mousePosition: { x: number; y: number };
  project: TProject;
}

export const ProjectDetailsTemplate: React.FC<ProjectDetailsTemplateProps> = ({ onClose, mousePosition, project }) => {
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.key === "Escape" && onClose();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose]);

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

  return (
    <div className={styles.containerWrapper}>
      <div
        className={styles.background}
        style={{ top: `${mousePosition.y - 50}px`, left: `${mousePosition.x - 50}px` }}
      />
      <Container layoutClassName={styles.container}>
        <animated.div className={styles.topBar} style={useSpring({ ...bounceUpSpring, delay: 3000 })}>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faSquareXmark} /> Close window
          </button>
          <button>
            This project is available live <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </button>
        </animated.div>

        <animated.section
          className={styles.headerContainer}
          style={{ ...useSpring({ ...bounceInSpring, delay: 700 }), backgroundImage: `url(${project.headerImageSrc})` }}
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
          <h1>
            In collaboration with Kaliber Interactive, I worked on the complete redesign of{" "}
            <strong>Bol.com's recruitment platform</strong>.
          </h1>
        </animated.section>

        <animated.section style={useSpring({ ...bounceUpSpring, delay: 1250 })}>
          <div className={styles.content}>
            <div className={styles.responsibilitiesAndTechnologies}>
              <div>
                <h2>
                  <strong>Key responsibilities</strong>, on a daily basis
                </h2>
              </div>

              <div>
                <h2>
                  <strong>Key technologies</strong>, implemented
                </h2>
              </div>
            </div>

            <div className={styles.recommendations}>
              <h2>
                <strong>Recommendations</strong>
              </h2>
            </div>
          </div>
        </animated.section>
      </Container>
    </div>
  );
};
