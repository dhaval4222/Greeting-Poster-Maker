import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { perfectSize } from "../../styles/theme";
import { color } from "../../config/color";
import Block from "../utilities/Block";
import { image } from "../../utils/Images";
import Text from "../utilities/Text";
import { responsiveScale } from "../../styles/mixins";

const PosterLogoPosition = ({
  festival,
  onPress = () => {},
  isSelected,
  imageExtraStye,
  isLogoText,
  borderStyle,
}: any) => {
  const getBorderStyle = () => {
    switch (borderStyle) {
      case "none":
        return { borderWidth: 0};
      case "dotted":
        return { borderWidth: 1, borderStyle: "dotted" };
      case "dashed":
        return { borderWidth: 1, borderStyle: "dashed" };
      case "solid":
        return { borderWidth: 1, borderStyle: "solid" };
      default:
        return { borderWidth: 1, borderStyle: "solid" };
    }
  };

  const getAlignmentStyle = (position: string) => {
    switch (position) {
      case "Top-left":
        return { textAlign: "left" };
      case "Bottom-left":
        return {
          position: "absolute",
          bottom: perfectSize(5),
          left: perfectSize(10),
        };
      case "Top-center":
        return { textAlign: "center" };
      case "Bottom-center":
        return { position: "absolute", bottom: perfectSize(5), left: 27 };
      case "Top-right":
        return {
          textAlign: "right",
        };
      case "Bottom-right":
        return {
          position: "absolute",
          bottom: perfectSize(5),
          right: perfectSize(10),
        };
      default:
        return { justifyContent: "flex-start", textAlign: "left" };
    }
  };

  return (
    <Block flex={false}>
      <TouchableOpacity
        style={[
          styles.card,
          {
            borderColor: isSelected ? color.BLUE : color.GRAY_BORDER,
          },
          imageExtraStye,
        ]}
        onPress={onPress}
      >
        {isLogoText ? (
          <Text
            size={responsiveScale(9)}
            medium
            color={color.BLACK}
            style={getAlignmentStyle(festival.position)}
          >
            {festival.logo}
          </Text>
        ) : (
          <Block flex={1} style={[{ ...getBorderStyle() }]}></Block>
        )}

        {isSelected && (
          <Block flex={false} style={styles.checkIcon}>
            {image.checkIcon}
          </Block>
        )}
      </TouchableOpacity>

      <Block
        flex={false}
        margin={[
          perfectSize(0),
          perfectSize(0),
          perfectSize(15),
          perfectSize(10),
        ]}
      >
        <Text small medium color={color.BLACK} center>
          {festival.position}
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: perfectSize(12),
    borderWidth: 1,
    borderStyle: "solid", // Default to solid border
    paddingHorizontal: perfectSize(10),
    paddingVertical: perfectSize(5),
    backgroundColor: color.WHITE,
    flex: 1,
  },
  checkIcon: {
    position: "absolute",
    top: perfectSize(8),
    right: perfectSize(8),
  },
  borderView: {
    borderWidth: 1,
  },
});

export default PosterLogoPosition;
