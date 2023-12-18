import React from "react";
import styles from "./ScrollWrapper.module.scss";
import clsx from "clsx";
import { useSpring, animated, config } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

interface ScrollWrapperProps {
  children: React.ReactNode;
  hasTiltingChildren?: boolean;
}

export const ScrollWrapper: React.FC<ScrollWrapperProps> = ({ children, hasTiltingChildren }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };

  React.useEffect(() => {
    handleScroll();
  }, []);

  const bounceRightSpring = useSpring({
    transform: canScrollRight ? "translateX(0px)" : "translateX(-20px)",
    opacity: canScrollRight ? 1 : 0,
    config: canScrollRight ? config.wobbly : config.stiff,
  });

  const bounceLeftSpring = useSpring({
    transform: canScrollLeft ? "translateX(0px)" : "translateX(20px)",
    opacity: canScrollLeft ? 1 : 0,
    config: canScrollLeft ? config.wobbly : config.stiff,
  });

  const handleScrollClick = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const isLeft = direction === "left";
      const scrollDistance = isLeft
        ? Math.max(0, container.scrollLeft - container.clientWidth)
        : Math.min(container.scrollLeft + container.clientWidth, container.scrollWidth - container.clientWidth);

      container.scrollTo({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={clsx(styles.container, [hasTiltingChildren && styles.hasTiltingChildren])}
      >
        {children}
      </div>

      <div className={styles.navigationContainer}>
        <animated.button style={bounceLeftSpring} className={styles.left} onClick={() => handleScrollClick("left")}>
          <FontAwesomeIcon icon={faSquareCaretLeft} /> Scroll left
        </animated.button>

        <animated.button style={bounceRightSpring} className={styles.right} onClick={() => handleScrollClick("right")}>
          Scroll right <FontAwesomeIcon icon={faSquareCaretRight} />
        </animated.button>
      </div>
    </div>
  );
};
