import React, { useEffect } from 'react';

import { createAppContainer } from "react-navigation";
import StackNavigator from './src/navigation/StackNavigator';
import { initGA } from './src/analytics';

const AppContainer = createAppContainer(StackNavigator);

const trackingID = 'G-Y9B9JP88C5'; // Replace with your Google Analytics tracking ID

const App = () => {
  useEffect(() => {
    initGA(trackingID);
  }, []);

  let navigator;
  return (
    <AppContainer
      ref={(nav) => {
        navigator = nav;
      }}
    />
  );
};

export default App;


