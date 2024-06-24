import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import Navigation from './app/navigation';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <StatusBar barStyle="default" backgroundColor="transparent" />
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
