import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomHeader = ({ title }) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { paddingTop: top }]}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2885C9",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  leftContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    color: "#EEEEEE",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
