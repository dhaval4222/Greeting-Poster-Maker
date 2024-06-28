import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { responsiveScale } from "../../../styles/mixins";
import { color } from "../../../config/color";
import Text from "../../../components/utilities/Text";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import { font, perfectSize } from "../../../styles/theme";
import { image } from "../../../utils/Images";
import Button from "../../../components/utilities/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import DeviceInfo from "react-native-device-info";
import {
  frameCollection,
  mainCollection,
} from "../../../constants/globalFunctions";
import { setFrameDataAction } from "../../../store/auth";
const FrameScreen = ({ navigation }: any) => {
  const frameData = useSelector((state: any) => state.auth?.frameData ?? []);
  const deviceId = useSelector((state: any) => state.auth?.deviceId ?? "");
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [isBusiness, setIsBusiness] = useState(true);
  const { bottom } = useSafeAreaInsets();
  const [defaultItemId, setDefaultItemId] = useState(null);
  const [businessData, setBusinessData] = useState(
    frameData.filter((item: any) => item?.type === "Business")
  );
  const [personalData, setPersonalData] = useState(
    frameData.filter((item: any) => item?.type === "Personal")
  );
  const handleCreateFrame = () => {
    if (isBusiness) {
      navigation.navigate("BusinessFrameScreen");
    } else {
      navigation.navigate("PersonalFrameScreen");
    }
  };

  const dataToShow = isBusiness ? businessData : personalData;
  const handleEdit = (item: any) => {
    if (isBusiness) {
      navigation.navigate("BusinessFrameScreen", { businessframeData: item });
    } else {
      navigation.navigate("PersonalFrameScreen", { personalframeData: item });
    }
  };

  const handleDelete = (item: any) => {
    Alert.alert(
      "Delete Frame",
      "Are you sure you want to delete this frame?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            firestore()
              .collection(mainCollection)
              .doc(deviceId)
              .collection(frameCollection)
              .doc(item?.id)
              .delete()
              .then(() => {
                console.log("delete sucessfull");
              })
              .catch((err) => {});
            if (isBusiness) {
              setBusinessData((prevData: any) =>
                prevData.filter((data: any) => data?.id !== item.id)
              );
            } else {
              setPersonalData((prevData: any) =>
                prevData.filter((data: any) => data?.id !== item.id)
              );
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    if (isFocused) {
      getFrameData();
    }
  }, [isFocused]);

  useEffect(() => {
    setBusinessData(frameData.filter((item: any) => item.type === "Business"));
    setPersonalData(frameData.filter((item: any) => item.type === "Personal"));
  }, [frameData]);

  const getFrameData = async () => {
    const clientsCollection = await firestore()
      .collection(mainCollection)
      .doc(deviceId)
      .collection(frameCollection)
      .get();
    const clientsList = clientsCollection.docs.map((doc) => ({
      id: doc?.id,
      ...doc.data(),
    }));
    dispatch(setFrameDataAction(clientsList));
  };
  const updateField = async (fieldName: any, fieldValue: any, id: any) => {
    try {
      await firestore()
        .collection(mainCollection)
        .doc(deviceId)
        .collection(frameCollection)
        .doc(id)
        .update({
          [fieldName]: fieldValue,
        });
      console.log(`Document ${id} updated successfully`);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  const handleSetDefault = async (item: any) => {
    const selectedItem = frameData?.find(
      (item: any) => item?.isDefault === true
    );
    updateField("isDefault", false, selectedItem?.id);
    updateField("isDefault", true, item?.id);

    getFrameData();
    console.log("selectedItem", selectedItem);
  };
  const renderItem = ({ item }: any) => {
    return (
      <Block
        flex={false}
        style={[
          styles.itemContainer,
          { borderColor: item?.isDefault ? color.BLUE : color.GRAY_LINE },
        ]}
      >
        <Block flex={false} width={"32%"}>
          <Image source={{ uri: item?.companyLogo }} style={styles.imageView} />

          <Block
            flex={false}
            margin={[
              perfectSize(5),
              perfectSize(10),
              perfectSize(5),
              perfectSize(0),
            ]}
            width={84}
          >
            <Text medium caption center color={color.BLUE} key={item.id}>
              {isBusiness ? item?.companyName : item?.personalName}
            </Text>
          </Block>
        </Block>
        <Block flex={false} style={styles.line} />
        <Block
          flex={1}
          margin={[
            perfectSize(5),
            perfectSize(0),
            perfectSize(0),
            perfectSize(20),
          ]}
        >
          <Text
            regular
            body
            color={color.GRAY_DARK_TEXT}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            {item?.countryCode + item?.contactNumber}
          </Text>
          <Block
            flex={false}
            margin={[
              perfectSize(5),
              perfectSize(0),
              perfectSize(5),
              perfectSize(0),
            ]}
          >
            <Text regular body color={color.GRAY_DARK_TEXT} numberOfLines={1}>
              {item?.email}
            </Text>
          </Block>

          <Text regular body color={color.GRAY_DARK_TEXT}>
            {isBusiness ? item?.address : item?.occupation}
          </Text>
          <Block
            flex={false}
            row
            between
            margin={[
              perfectSize(12),
              perfectSize(0),
              perfectSize(5),
              perfectSize(0),
            ]}
          >
            <TouchableOpacity onPress={() => handleEdit(item)}>
              {image.editIcon}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item)}>
              {image.deleteIcon}
            </TouchableOpacity>

            <Button
              name={!item?.isDefault ? "Set as Default" : "Default"}
              onPress={() => handleSetDefault(item)}
              extraBtnViewStyle={{
                height: perfectSize(20),
                width: "40%",
              }}
              extraBtnTextStyle={{
                fontFamily: font.regular,
                fontSize: perfectSize(9),
                color: color.WHITE,
              }}
              disabled={item?.data?.isDefault}
            />
          </Block>
        </Block>
      </Block>
    );
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
            body
            medium
            color={isBusiness ? color.WHITE : color.BLACK_LIGHT}
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
            body
            medium
            color={!isBusiness ? color.WHITE : color.BLACK_LIGHT}
          >
            Personal
          </Text>
        </TouchableOpacity>
      </Block>
      {dataToShow?.length > 0 ? (
        <FlatList
          data={dataToShow}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <Block flex={1} center middle>
          <Block flex={false}>{image.noFrameImg}</Block>
          <Text
            size={responsiveScale(20)}
            medium
            center
            color={color.GRAY}
            style={styles.noFrameText}
          >
            No frames
          </Text>
        </Block>
      )}
      <Button
        name={"Create new frame"}
        onPress={handleCreateFrame}
        extraBtnViewStyle={{
          marginBottom: bottom,
        }}
        extraBtnTextStyle={{}}
        disabled={false}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  flatListContent: {
    marginTop: perfectSize(20),
  },
  itemContainer: {
    flexDirection: "row",
    borderWidth: perfectSize(2),

    marginHorizontal: perfectSize(20),
    marginVertical: perfectSize(10),
    borderRadius: perfectSize(19),
    padding: perfectSize(10),
  },
  imageView: {
    height: perfectSize(84),
    width: perfectSize(84),
  },
  line: {
    width: 1,
    height: "100%",
    backgroundColor: color.GRAY_LINE,
  },
  noFrameText: {
    marginTop: perfectSize(10),
  },
});

export default FrameScreen;
