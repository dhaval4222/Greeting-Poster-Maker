import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { perfectSize } from "../../styles/theme";
import { color } from "../../config/color";
import Block from "../utilities/Block";
import Text from "../utilities/Text";

const PosterDetails = ({
  festival,
  imageExtraStye,
  onPress = () => {},
  isSelected,
}: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Block flex={false} style={[styles.iconContainer,imageExtraStye]}>
        <Image
          source={festival?.image}
          style={[styles.icon]}
          resizeMode="contain"
        />
      </Block>
      <Text small medium color={color.DARK_GREY} center>
        {festival?.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: perfectSize(10),
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: perfectSize(5),
    borderWidth: 1,
    borderColor: color.BLUE,
    height: perfectSize(49),
    width: perfectSize(49),
    borderRadius: perfectSize(50),
  },
  icon: {
    width: perfectSize(20),
    height: perfectSize(20),

  },
});

export default PosterDetails;
