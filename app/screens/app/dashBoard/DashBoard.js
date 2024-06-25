import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

const DashBoard = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>DashBoard</Text>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
