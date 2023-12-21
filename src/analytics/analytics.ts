import ReactGA from "react-ga";

export const initGoogleAnalytics = () => {
  ReactGA.initialize("G-T7FQ7V2LB0");
};

export const logGoogleAnalyticsPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logGoogleAnalyticsProjectView = (projectName: string) => {
  ReactGA.set({ page: projectName });
  ReactGA.pageview(projectName);
};
