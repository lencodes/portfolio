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

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const newWidth = ((container.scrollLeft + container.clientWidth) / container.scrollWidth) * 100;

    setSpringProps({ width: `${newWidth}%` });
  };

  React.useEffect(() => {
    handleScroll();
  }, []);

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
        <animated.div className={styles.progressBar} style={{ width: springProps.width }} />
      </div>
    </div>
  );
};
