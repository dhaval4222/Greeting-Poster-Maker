import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Block from "./Block";
import { colors, font, perfectSize } from "../../styles/theme";
import { responsiveScale } from "../../styles/mixins";
import { image } from "../../utils/Images";
import { color } from "../../config/color";

export default function CustomTextInput({
  value,
  placeholder,
  onChangeText = () => {},
  extraTitleStyle,
  extraInputStyle,
  multiline,
  keyboardType,
  textAlignVertical = "center",
  itemTitle,
  autoCapitalize,
}: any) {
  return (
    <Block flex={false}>
      <Block
        flex={false}
        margin={[
          perfectSize(15),
          perfectSize(0),
          perfectSize(10),
          perfectSize(0),
        ]}
      >
        <Text style={[styles.itemTitle, extraTitleStyle]}>{itemTitle}</Text>
      </Block>
      <Block flex={false} style={[styles.mainView]}>
        <Block flex={false} row between center middle>
          <TextInput
            style={[styles.inputStyle, extraInputStyle]}
            value={value}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={color.GRAY_DARK}
            onChangeText={(value) => onChangeText(value)}
            keyboardType={keyboardType}
            textAlignVertical={textAlignVertical}
            numberOfLines={1}
            autoCapitalize={autoCapitalize}
          />
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: perfectSize(1.5),
    borderRadius: perfectSize(10),
    borderColor: color.BLUE,
    paddingHorizontal: perfectSize(15),
  },
  inputStyle: {
    fontSize: responsiveScale(12),
    fontFamily: font.medium,
    color: color.BLACK,
    paddingVertical: 0,
    width: "100%",
    height: perfectSize(50),
  },
  itemTitle: {
    fontSize: responsiveScale(16),
    fontFamily: font.medium,
  },
});
