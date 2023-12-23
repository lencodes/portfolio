import React from "react";
import ReactDOM from "react-dom";

interface ProjectPortalTemplateProps {
  children: React.ReactNode;
}

export const ProjectPortalTemplate: React.FC<ProjectPortalTemplateProps> = ({ children }) => {
  const portalRoot = document.getElementById("portal-root");
  const portalElement = document.createElement("div");

  React.useEffect(() => {
    if (!portalRoot) return;

    portalRoot.appendChild(portalElement);

    return () => {
      portalRoot.removeChild(portalElement);
    };
  }, [portalElement, portalRoot]);

  return ReactDOM.createPortal(children, portalElement);
};
