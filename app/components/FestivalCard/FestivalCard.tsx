import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Block from "../utilities/Block";
import Text from "../utilities/Text";
import { perfectSize } from "../../styles/theme";
import { responsiveScale } from "../../styles/mixins";
import { color } from "../../config/color";

const FestivalCard = ({
  festival,
  nameExtraStye,
  imageExtraStye,
  festivalNameExtraStye,
  cardDateExtraStyle,
}: any) => (
  <>
    <TouchableOpacity style={styles.card}>
      <Image
        source={festival.image}
        style={[styles.cardImage, imageExtraStye]}
        resizeMode="stretch"
      />
      <Block flex={false} style={[styles.festivalName, nameExtraStye]}>
        <Text
          size={responsiveScale(8)}
          medium
          center
          style={[styles.cardText, festivalNameExtraStye]}
        >
          {festival.name}
        </Text>
      </Block>
      {festival.date && (
        <View style={[styles.cardDatePosition, cardDateExtraStyle]}>
          <Text size={responsiveScale(6)} medium style={[styles.cardDate]}>
            {festival.date}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  card: {
    position: "relative",
  },
  cardImage: {
    height: perfectSize(120),
    borderRadius: perfectSize(5),
  },
  festivalName: {
    alignItems: "center",
    paddingVertical: perfectSize(5),
  },
  cardText: {
    color: color.DARK_GREY,
  },
  cardDate: {
    color: color.WHITE,
  },
  cardDatePosition: {
    position: "absolute",
    bottom: perfectSize(35),
    right: perfectSize(8),
    backgroundColor: color.BLUE,
    paddingHorizontal: perfectSize(6),
    paddingVertical: perfectSize(2),
    borderRadius: perfectSize(60),
  },
});

export default FestivalCard;
