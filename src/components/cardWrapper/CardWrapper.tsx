import React from "react";
import styles from "./CardWrapper.module.scss";
import clsx from "clsx";

interface CardWrapperProps {
  children: React.ReactNode;
  size?: "sm" | "md"; // handles border-radius and paddings
  layoutClassName?: string;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({ children, layoutClassName, size = "md" }) => {
  return <div className={clsx(styles.container, styles[`size--${size}`], layoutClassName)}>{children}</div>;
};
