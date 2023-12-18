import React from "react";
import styles from "./ScrollWrapper.module.scss";
import clsx from "clsx";

interface ScrollWrapperProps {
  children: React.ReactNode;
  hasTiltingChildren?: boolean; // allows tilting children to escape borders
}

export const ScrollWrapper: React.FC<ScrollWrapperProps> = ({ children, hasTiltingChildren }) => {
  return <div className={clsx(styles.container, [hasTiltingChildren && styles.hasTiltingChildren])}>{children}</div>;
};
