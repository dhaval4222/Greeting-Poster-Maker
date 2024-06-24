import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Text from "./Text";
import { perfectSize } from "../../styles/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, font } from "../../styles/theme";
import { responsiveScale } from "../../styles/mixins";

export default function Button({
  name,
  extraBtnViewStyle,
  disabled,
  onPress = () => {},
}) {
  const { bottom } = useSafeAreaInsets();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[
        styles.btnView,
        extraBtnViewStyle,
        { marginBottom: bottom, marginBottom: 20 },
      ]}
    >
      <Text
        regular
        size={responsiveScale(11)}
        color={colors.white}
        style={{
          fontFamily: font.regular,
          fontWeight: 500,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    height: perfectSize(45),
    backgroundColor: colors.black,
    width: "100%",
    alignSelf: "center",
    marginTop: perfectSize(20),
  },
});
