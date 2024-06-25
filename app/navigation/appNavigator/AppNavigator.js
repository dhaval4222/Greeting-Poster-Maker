import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "../../screens/app/dashBoard/DashBoard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/app/dashBoard/Home";
import { image } from "../../utils/Images";
import { color } from "../../config/color";
import { font, perfectSize } from "../../styles/theme";
import { Platform, View } from "react-native";
import { responsiveScale } from "../../styles/mixins";
import Text from "../../components/utilities/Text";
import Setting from "../../screens/app/setting/Setting";
import Suggestions from "../../screens/app/suggestions/Suggestions";

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: perfectSize(75),
          paddingVertical: 6,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashBoard}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              color={focused ? color.BLUE : color.BLACK_LIGHT}
              caption
              medium
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? image?.home : image?.homeOutline,
        }}
      />
      <Tab.Screen
        name="Frame"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              color={focused ? color.BLUE : color.BLACK_LIGHT}
              caption
              medium
            >
              Frame
            </Text>
          ),

          tabBarIcon: ({ focused }) =>
            focused ? image?.frame : image?.frameOutline,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              color={focused ? color.BLUE : color.BLACK_LIGHT}
              caption
              medium
            >
              Setting
            </Text>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? image?.setting : image?.settingOutline,
        }}
      />
    </Tab.Navigator>
  );
}
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={"BottomTab"}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name="BottomTab" component={BottomTab} />
        <AppStack.Screen
          name="Suggestions"
          component={Suggestions}
          options={{ headerTitleAlign: "center" }}
        />
        <AppStack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{ headerTitleAlign: "center" }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
