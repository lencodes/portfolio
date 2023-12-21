import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initGoogleAnalytics, logGoogleAnalyticsPageView } from "./analytics/analytics";

initGoogleAnalytics();
logGoogleAnalyticsPageView();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
