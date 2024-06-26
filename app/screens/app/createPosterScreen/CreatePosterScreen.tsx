import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { responsiveScale } from "../../../styles/mixins";
import { color } from "../../../config/color";
import Text from "../../../components/utilities/Text";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import { perfectSize } from "../../../styles/theme";
import { image } from "../../../utils/Images";

const CreatePosterScreen = ({ navigation, route }: any) => {
  const { item } = route?.params;
  return (
    <Block flex={1} style={styles.container}>
      <CustomHeader
        title={"Create poster"}
        isBack={true}
        isleftIcon={true}
        leftIconComponent={
          <TouchableOpacity
            style={{
              paddingHorizontal: perfectSize(10),
              paddingVertical: perfectSize(3),
              borderWidth: perfectSize(1),
              borderRadius: perfectSize(5),
              borderColor: color.WHITE,
            }}
          >
            <Text
              regular
              color={color.WHITE}
              size={responsiveScale(7)}
              center
              adjustsFontSizeToFit={true}
              numberOfLines={1}
            >
              Next
            </Text>
          </TouchableOpacity>
        }
      />
      <Block flex={1}>
        <Block
          flex={1}
          shadow
          margin={[perfectSize(25), perfectSize(10)]}
          radius={perfectSize(20)}
          style={{
            overflow: "hidden",
            shadowColor: color.BLACK,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}
        >
          <Image
            source={item?.image}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </Block>
        <Block flex={1}>
          <Block flex={false}></Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.WHITE,
  },
  toggleContainer: {
    marginTop: perfectSize(20),
  },
  toggleButton: {
    paddingVertical: perfectSize(10),
    paddingHorizontal: perfectSize(25),
    borderWidth: responsiveScale(1),
    borderColor: color.BLUE,
    backgroundColor: color.BLUE,
  },
  activeToggle: {
    backgroundColor: color.BLUE,
  },
  inactiveToggle: {
    backgroundColor: color.WHITE,
  },
  noFrameText: {
    marginTop: perfectSize(10),
  },
  createButton: {
    backgroundColor: color.BLUE,
    paddingVertical: perfectSize(10),
    paddingHorizontal: perfectSize(55),
    borderRadius: perfectSize(25),
    alignSelf: "center",
    marginBottom: perfectSize(25),
  },
});

export default CreatePosterScreen;
