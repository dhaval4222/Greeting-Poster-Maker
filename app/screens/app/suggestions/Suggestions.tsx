import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import { deviceHeight, perfectSize } from "../../../styles/theme";
import CustomTextInput from "../../../components/utilities/CustomTextInput";
import { color } from "../../../config/color";
import Button from "../../../components/utilities/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Suggestions = () => {
  const { bottom } = useSafeAreaInsets();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionHeight, setDescriptionHeight] = useState(
    deviceHeight * 0.5
  );
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setDescriptionHeight(deviceHeight * 0.2); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setDescriptionHeight(deviceHeight * 0.5); 
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <Block flex={1} padding={[0, 0, bottom, 0]}>
      <CustomHeader title={"Suggestion"} isBack={true} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <Block flex={1} margin={[perfectSize(10), perfectSize(20)]}>
          <CustomTextInput
            itemTitle={"Title"}
            value={title}
            placeholder={"Add title..."}
            onChangeText={(text: any) => setTitle(text)}
            extraInputStyle={{}}
            extraTitleStyle={{ color: color.BLACK }}
            multiline={false}
            keyboardType={"default"}
            textAlignVertical={"center"}
          />
          <Block flex={false} margin={[perfectSize(10), 0, 0, 0]}>
            <CustomTextInput
              itemTitle={"Description"}
              value={description}
              placeholder={"Write..."}
              onChangeText={(text: any) => setDescription(text)}
              extraTitleStyle={{ color: color.BLACK }}
              multiline={true}
              keyboardType={"default"}
              textAlignVertical={"top"}
              extraInputStyle={{
                height: descriptionHeight,
                paddingVertical: perfectSize(10),
              }}
            />
          </Block>
        </Block>
        <Button
          name={"Submit"}
          onPress={() => {}}
          extraBtnViewStyle={{
            marginBottom: bottom > 0 ? 10 : perfectSize(30),
          }}
          disabled={false}
        />
      </KeyboardAvoidingView>
    </Block>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  item: {
    paddingVertical: perfectSize(25),
    flexDirection: "row",
    alignItems: "center",
  },
  title: {},
});
