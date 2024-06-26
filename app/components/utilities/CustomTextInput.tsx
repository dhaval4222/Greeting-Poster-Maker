import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker, {
  DEFAULT_THEME,
} from "react-native-country-picker-modal";
import Block from "./Block";
import {  font, perfectSize } from "../../styles/theme";
import { responsiveScale } from "../../styles/mixins";
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
  countryCode = "",
  onSelectCountry = () => {},
}: any) {
  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false);

  const handleCountrySelect = (country: any) => {
    setCountryPickerVisible(false);
    onSelectCountry(country);
  };
  const countryPickerPlaceholder = countryCode ? "" : "Select Country";
  const showCountryCode = !!countryCode;
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
      <Block
        flex={false}
        style={[styles.mainView, showCountryCode && styles.withCountryCode]}
      >
        <Block flex={false} row between center middle>
          {countryCode && (
            <TouchableOpacity onPress={() => setCountryPickerVisible(true)}>
              <Text style={styles.countryCode}>{countryCode}</Text>
            </TouchableOpacity>
          )}
          <TextInput
            style={[
              styles.inputStyle,
              extraInputStyle,
              countryCode ? { marginLeft: 5 } : null,
            ]}
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

      {countryCode && (
        <View style={styles.countryModalWrapper}>
        <CountryPicker
          {...{
            withFilter: true,
            withFlag: true,
            withCountryNameButton: true,
            withAlphaFilter: true,
            withCallingCode: true,
            withEmoji: true,
          }}
          visible={isCountryPickerVisible}
          onSelect={country => {
            handleCountrySelect(country);
          }}
          theme={DEFAULT_THEME}
          onClose={() => {
            setCountryPickerVisible(false);
          }}
        />
      </View>
      )}
    </Block>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: perfectSize(1.5),
    borderRadius: perfectSize(10),
    borderColor: color.BLUE,
    paddingHorizontal: perfectSize(15),
    flexDirection: "row",
    alignItems: "center",
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
  countryCode: {
    fontSize: responsiveScale(12),
    fontFamily: font.medium,
    color: color.BLACK,
  },
  countryModalWrapper: {
    height: 0,
    width: 0,
    opacity: 0,
    position: 'absolute',
  },
});
