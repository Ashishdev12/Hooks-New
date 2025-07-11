import React, { Suspense, useState } from "react";
// import AnalyticsPanel from './AnalyticsPanel';
import Home from "./Home";
// import ReportsPanel from './ReportsPanel';
import "./Dashboard.css";
import ErrorBoundary from "./ErrorComponent";
import FallBack from "./FallBack";

// Imported Using dynamically
const AnalyticsPanel = React.lazy(() => import("./AnalyticsPanel"));
const ReportsPanel = React.lazy(() => import("./ReportsPanel"));

function Dashboard() {
  const [activePanel, setActivePanel] = useState("home");

  const renderPanel = () => {
    switch (activePanel) {
      case "analytics":
        return <AnalyticsPanel />;
      case "reports":
        return <ReportsPanel />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <div className="tabContainer">
        <button onClick={() => setActivePanel("home")}>Home</button>
        <button onClick={() => setActivePanel("analytics")}>Analytics</button>
        <button onClick={() => setActivePanel("reports")}>Reports</button>
      </div>
      <hr />
      <ErrorBoundary fallback={<FallBack/>}>
        <Suspense fallback={<h1>Loading...</h1>}>{renderPanel()}</Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Dashboard;
