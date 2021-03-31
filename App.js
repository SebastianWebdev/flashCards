import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
// importnig redux stuff
import {Provider} from 'react-redux';
import store from './src/redux/store';

// importing constants
import {colors} from './src/constants/constants';

import {StyleSheet} from 'react-native';

// importing Initial Component
import Init from './src/screens/InitialScreen';

const App = () => {
  return (
    <Provider store={store}>
      <Init />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
