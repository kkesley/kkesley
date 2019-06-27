import React, { useEffect } from "react";
import GoogleAnalytics from "react-ga";

if (process.env.NODE_ENV === 'production') {
    GoogleAnalytics.initialize('UA-142872440-1')
}

export default (WrappedComponent, options = {}) => {
    const trackPage = page => {
        GoogleAnalytics.set({
        page,
        ...options
      });
      GoogleAnalytics.pageview(page);
    };
  
    const HOC = props => {
      useEffect(() => trackPage(props.location.pathname), [
        props.location.pathname
      ]);
  
      return <WrappedComponent {...props} />;
    };
  
    return HOC;
};