import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { responsiveScale } from "../../../styles/mixins";
import { color } from "../../../config/color";
import Text from "../../../components/utilities/Text";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import NoFrameImg from "../../../assets/appImages/NoFrameImg.svg";
import { perfectSize } from "../../../styles/theme";

const FrameScreen = ({ navigation }: any) => {
  const [isBusiness, setIsBusiness] = useState(true);
  const handleCreateFrame = () => {
    if (isBusiness) {
      navigation.navigate("BusinessFrameScreen"); // Navigate to BusinessFrameScreen
    } else {
      navigation.navigate("PersonalFrameScreen"); // Navigate to PersonalFrameScreen
    }
  };
  return (
    <Block flex={1} style={styles.container}>
      <CustomHeader title={"Saved Frame"} />
      <Block flex={false} row center middle style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            isBusiness ? styles.activeToggle : styles.inactiveToggle,
            {
              borderTopLeftRadius: perfectSize(14),
              borderBottomLeftRadius: perfectSize(14),
            },
          ]}
          onPress={() => setIsBusiness(true)}
        >
          <Text
            size={responsiveScale(14)}
            medium
            style={isBusiness ? styles.activeText : styles.inactiveText}
          >
            Business
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !isBusiness ? styles.activeToggle : styles.inactiveToggle,
            {
              borderTopRightRadius: perfectSize(14),
              borderBottomRightRadius: perfectSize(14),
            },
          ]}
          onPress={() => setIsBusiness(false)}
        >
          <Text
            size={responsiveScale(14)}
            medium
            style={!isBusiness ? styles.activeText : styles.inactiveText}
          >
            Personal
          </Text>
        </TouchableOpacity>
      </Block>
      <Block flex={1} center middle>
        <NoFrameImg height={110} width={110} />
        <Text
          size={responsiveScale(20)}
          medium
          center
          color={color.GREY}
          style={styles.noFrameText}
        >
          No frame
        </Text>
      </Block>
      <TouchableOpacity style={styles.createButton}  onPress={handleCreateFrame}>
        <Text size={responsiveScale(14)} medium center color={color.WHITE}>
          Create new frame
        </Text>
      </TouchableOpacity>
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
  activeText: {
    color: color.WHITE,
  },
  inactiveText: {
    color: color.BLACK_LIGHT,
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

export default FrameScreen;
