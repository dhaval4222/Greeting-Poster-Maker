import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import AppNavigator from "./app/navigation/appNavigator/AppNavigator";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.container}>
        <AppNavigator />
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
