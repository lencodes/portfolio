import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./ScrollWrapper.module.scss";
import clsx from "clsx";

interface ScrollWrapperProps {
  children: React.ReactNode;
  hasTiltingChildren?: boolean;
}

export const ScrollWrapper: React.FC<ScrollWrapperProps> = ({ children, hasTiltingChildren }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [springProps, setSpringProps] = useSpring(() => ({
    width: "0%",
  }));

  React.useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const newWidth = ((container.scrollLeft + container.clientWidth) / container.scrollWidth) * 100;

      setSpringProps({ width: `${newWidth}%` });
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [setSpringProps]);

  return (
    <div>
      <div ref={containerRef} className={clsx(styles.container, [hasTiltingChildren && styles.hasTiltingChildren])}>
        {children}
      </div>

      <div className={styles.navigationContainer}>
        <animated.div className={styles.progressBar} style={{ width: springProps.width }} />
      </div>
    </div>
  );
};
