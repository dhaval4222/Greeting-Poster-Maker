import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { perfectSize } from "../../styles/theme";
import { color } from "../../config/color";
import Block from "../utilities/Block";
import { image } from "../../utils/Images";
import Text from "../utilities/Text";

const PosterTheme = ({
  festival,
  imageExtraStye,
  onPress = () => {},
  isSelected,
  selected,
  onPressImg,
  index,
  isThemaData,
}: any) => {
  return (
    <>
      {isThemaData ? (
        <TouchableOpacity
          onPress={() => onPressImg()}
          style={styles.card}
        >
          {/* <Text style={styles.text}>{index + 1}</Text> */}
          <Image
            source={festival?.image}
            style={[
              styles.cardImage,
              {
                borderColor: isSelected ? color.BLUE : color.GRAY_BORDER,
              },
              imageExtraStye,
            ]}
            resizeMode="stretch"
          />
          {/* {isSelected && (
            <Block style={styles.checkIcon}>{image.checkIcon}</Block>
          )} */}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <Image
            source={festival?.image}
            style={[
              styles.cardImage,
              {
                borderColor: isSelected ? color.BLUE : color.GRAY_BORDER,
              },
              imageExtraStye,
            ]}
            resizeMode="stretch"
          />
          {isSelected && (
            <Block style={styles.checkIcon}>{image.checkIcon}</Block>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: perfectSize(10),
    position: "relative",
  },
  cardImage: {
    borderRadius: perfectSize(12),
    borderWidth: 1,
  },
  checkIcon: {
    position: "absolute",
    top: perfectSize(8),
    right: perfectSize(8),
  },
});

export default PosterTheme;
