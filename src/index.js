import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import "./index.css";

// Render the root of the React application
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
        <ProfileDataProvider>
          <App />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// Measure performance, optional
reportWebVitals(console.log);
