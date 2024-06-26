import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import Text from "../../../components/utilities/Text";
import { image } from "../../../utils/Images";
import { color } from "../../../config/color";
import { perfectSize } from "../../../styles/theme";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: 1,
    title: "Write Suggestion",
    icon: image?.suggestionIcon,
  },
  {
    id: 2,
    title: "Rate Us",
    icon: image?.rateIcon,
  },
  {
    id: 3,
    title: "Share App",
    icon: image?.shareIcon,
  },
  {
    id: 4,
    title: "Privacy Policy",
    icon: image?.privacyPolicyIcon,
  },
];
const RenderItem = ({ item, navigation }: any) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (item?.id === 1) {
          navigation.navigate("Suggestions");
        }
      }}
    >
      <>{item?.icon}</>
      <Text
        regular
        body
        color={color.BLACK}
        style={{ marginLeft: perfectSize(20) }}
      >
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};
const Setting = ({ navigation }: any) => {
  return (
    <Block flex={1} color={color.WHITE}>
      <CustomHeader title={"Settings"} isBack={false} />
      <Block flex={1} margin={[0, perfectSize(20)]}>
        <FlatList
          scrollEnabled={false}
          data={DATA}
          renderItem={({ item }: any) => (
            <RenderItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item: any) => item?.id}
          ItemSeparatorComponent={() => {
            return (
              <Block
                flex={1}
                height={perfectSize(1)}
                color={color.GRAY_LIGHT}
              />
            );
          }}
        />
      </Block>
    </Block>
  );
};

export default Setting;

const styles = StyleSheet.create({
  item: {
    paddingVertical: perfectSize(25),
    flexDirection: "row",
    alignItems: "center",
  },
  title: {},
});
