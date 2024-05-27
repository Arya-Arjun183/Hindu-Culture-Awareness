// src/analytics.js
import ReactGA from 'react-ga';

const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
};

const logPageView = (screenName) => {
  ReactGA.set({ page: screenName });
  ReactGA.pageview(screenName);
};

const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export { initGA, logPageView, logEvent, logException };
