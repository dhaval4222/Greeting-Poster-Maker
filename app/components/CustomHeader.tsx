import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { font, perfectSize } from "../styles/theme";
import { image } from "../utils/Images";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({
  title,
  isBack = false,
  isleftIcon = false,
  leftIconComponent,
}: any) => {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, { paddingTop: top }]}>
      {isBack ? (
        <TouchableOpacity
          style={{ width: "13%" }}
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          {image.backArrowIcon}
        </TouchableOpacity>
      ) : null}

      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {isBack ? (
        isleftIcon ? (
          <View style={{ width: "13%" }}>{leftIconComponent}</View>
        ) : (
          <View style={styles.blankView} />
        )
      ) : null}
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
    fontFamily: font.bold,
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
  blankView: {
    height: perfectSize(20),
    width: "13%",
  },
});
