import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Block from './Block';
import { colors, font, perfectSize } from '../../styles/theme';
import { responsiveScale } from '../../styles/mixins';
import { image } from '../../utils/Images';

export default function CustomTextInput({
  value,
  placeholder,
  onchangeText = () => {},
  isVisiblePassword = false,
  extraTextInputStyle,
  labelAndTextInputMainView,
  multiline,
  keyboardType,
  maxLength,
  editable,
  selection,
  textAlignVertical = 'center',
  placeholderTextColor,
  itemTitle,
  secureTextEntry = false,
  autoCapitalize,
}) {
  const [hideAndShowPassword, setHideAndShowPassword] =
    useState(secureTextEntry);
  const [hide, setHide] = useState(true);

  const handleHideShowPassword = () => {
    setHide(!hide);
    setHideAndShowPassword(!hideAndShowPassword);
  };

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
        <Text style={styles.itemTitle}>{itemTitle}</Text>
      </Block>
      <Block flex={false} style={[styles.mainView, labelAndTextInputMainView]}>
        <Block flex={false} row between center middle>
          <TextInput
            style={[styles.inputStyle, extraTextInputStyle]}
            value={value}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={value => onchangeText(value)}
            secureTextEntry={hideAndShowPassword}
            keyboardType={keyboardType}
            maxLength={maxLength}
            editable={editable}
            selection={selection}
            textAlignVertical={textAlignVertical}
            numberOfLines={1}
            autoCapitalize={autoCapitalize}
          />

          {isVisiblePassword && (
            <TouchableOpacity
              hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
              onPress={() => {
                handleHideShowPassword();
              }}
            >
              {hideAndShowPassword ? image?.hide : image?.eye}
            </TouchableOpacity>
          )}
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: colors.gray5,
    paddingHorizontal: perfectSize(15),
  },
  inputStyle: {
    fontSize: responsiveScale(12),
    // fontFamily: font.medium,
    color: colors.Black_Text,
    paddingVertical: 0,
    width: '100%',
    height: perfectSize(50),
  },
  itemTitle: {
    // color: colors.Black_Text,
    fontSize: responsiveScale(11),
    // fontFamily: font.regular,
    fontWeight: '400',
  },
});
