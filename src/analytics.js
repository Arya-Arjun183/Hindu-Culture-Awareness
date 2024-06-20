// src/analytics.js
import ReactGA from 'react-ga4';

const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
};

const logPageView = (screenName = '', title='') => {
  ReactGA.send({ hitType: "pageview", page: screenName, title: title });
};

const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    if (label) {
      ReactGA.event({ category, action, label });
    } else {
      ReactGA.event({ category, action });
    }
  }
};

const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export { initGA, logPageView, logEvent, logException };
