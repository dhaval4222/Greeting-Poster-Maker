import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import AppNavigator from "./app/navigation/appNavigator/AppNavigator";
import { color } from "./app/config/color";
import Toast from "react-native-toast-message";
import { perfectSize } from "./app/styles/theme";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={color.BLUE} />
      <View style={styles.container}>
        <AppNavigator />
        <Toast
          position={"bottom"}
          bottomOffset={perfectSize(115)}
          visibilityTime={2000}
        />
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
