import CarParkApp from './components/CarParkApp';
import React from 'react';
import 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

export default function App() {
  return (
      <CarParkApp />
  );
}


// This warning can be suppressed by adding
//     android.suppressUnsupportedCompileSdk=33
// to this project's gradle.properties
