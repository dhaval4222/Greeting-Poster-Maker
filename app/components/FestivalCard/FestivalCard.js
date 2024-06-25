import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Block from "../utilities/Block";
import Text from "../utilities/Text";
import { perfectSize } from "../../styles/theme";
import { responsiveScale } from "../../styles/mixins";

const FestivalCard = ({
  festival,
  nameExtraStye,
  imageExtraStye,
  festivalNameExtraStye,
  cardDateExtraStyle,
}) => (
  <>
    <Block style={styles.card}>
      <Image
        source={festival.image}
        style={[styles.cardImage, imageExtraStye]}
        resizeMode="stretch"
      />
      <Block style={[styles.festivalName, nameExtraStye]}>
        <Text style={[styles.cardText, festivalNameExtraStye]}>
          {festival.name}
        </Text>
      </Block>
      {festival.date && (
        <View style={[styles.cardDatePosition, cardDateExtraStyle]}>
          <Text style={[styles.cardDate]}>{festival.date}</Text>
        </View>
      )}
    </Block>
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
    fontSize: responsiveScale(10),
    fontWeight: "500",
    textAlign: "center",
    color: "#222222",
  },
  cardDate: {
    fontSize: responsiveScale(8),
    color: "#fff",
  },
  cardDatePosition: {
    position: "absolute",
    bottom: perfectSize(35),
    right: perfectSize(8),
    backgroundColor: "#2885C9",
    paddingHorizontal: perfectSize(6),
    paddingVertical: perfectSize(2),
    borderRadius: perfectSize(60),
  },
});

export default FestivalCard;
