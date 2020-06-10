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
import { SafeAreaView } from 'react-native';

import { Card } from '_organisms/index';

// declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Card
          headerText={'IT IS WORK'}
          text={'URA'}
          backgroundColor={'green'}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
