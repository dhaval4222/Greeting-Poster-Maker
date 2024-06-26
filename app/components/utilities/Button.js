import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Text from "./Text";
import { perfectSize } from "../../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, font } from "../../styles/theme";
import { responsiveScale } from "../../styles/mixins";
import { color } from "../../config/color";

export default function Button({
  name,
  extraBtnViewStyle,
  disabled,
  onPress = () => {},
  extraBtnTextStyle,
}) {
  const { bottom } = useSafeAreaInsets();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[
        styles.btnView,
        extraBtnViewStyle,
        // { marginBottom: bottom, marginBottom: 20 },
      ]}
    >
      <Text medium body color={colors.white} style={extraBtnTextStyle}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    height: perfectSize(40),
    backgroundColor: color.BLUE,
    width: "75%",
    alignSelf: "center",
    borderRadius: perfectSize(20),
  },
});
