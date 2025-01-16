import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = () => {
  // Replace G-XXXXXXXXXX with your actual Measurement ID
  ReactGA.initialize('G-FVVB0D9XW5');
};

// Page Views
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// Events
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

// Custom Events with additional parameters
export const logCustomEvent = (name, params) => {
  ReactGA.event(name, params);
}; 