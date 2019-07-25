import React, { Component } from 'react';
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';

console.disableYellowBox = true;

import First from './src/First';
import Second from './src/Second';

const App = () => {
  return(
    <Router>
      <Stack key = 'root'>
        <Scene key = 'first' component = {First} hideNavBar initial />
        <Scene key = 'second' component = {Second} hideNavBar />
    </Stack> 
    </Router>
  )  
}

export default App