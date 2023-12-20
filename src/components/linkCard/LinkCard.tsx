import React from "react";
import styles from "./LinkCard.module.scss";
import { CardWrapper } from "../cardWrapper/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { Tilt } from "react-tilt";
import { animated, config, useSpring } from "react-spring";

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
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const bounceInSpring = useSpring({
    from: { opacity: 0, transform: isHovered ? "scale(1)" : "scale(1.1)" },
    to: { opacity: 1, transform: isHovered ? "scale(1.1)" : "scale(1)" },
    config: config.wobbly,
  });

  return (
    <Tilt options={{ max: 10, perspective: 1000, scale: 1 }}>
      <div onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <CardWrapper layoutClassName={styles.wrapper}>
          <div className={styles.container} onClick={() => window.open(link)}>
            <FontAwesomeIcon className={styles.icon} icon={faExternalLinkSquare} />

            <div className={styles.header}>
              <animated.img style={bounceInSpring} src={iconSrc} alt={title} />

              <div className={styles.title}>
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </div>
            </div>

            <p>{description}</p>
          </div>
        </CardWrapper>
      </div>
    </Tilt>
  );
};
