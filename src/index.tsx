/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { BasicHeader } from './components/atoms';

// declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <BasicHeader text={'Test'} />
      </SafeAreaView>
    </>
  );
};

export default App;
