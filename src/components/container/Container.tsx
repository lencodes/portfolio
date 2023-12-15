import React from "react";
import styles from "./Container.module.scss";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  layoutClassName?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, layoutClassName }) => {
  return <div className={clsx(styles.container, layoutClassName)}>{children}</div>;
};
