import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import { perfectSize } from "../../../styles/theme";
import CustomTextInput from "../../../components/utilities/CustomTextInput";
import { color } from "../../../config/color";
import Button from "../../../components/utilities/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { responsiveScale } from "../../../styles/mixins";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { image } from "../../../utils/Images";
import Text from "../../../components/utilities/Text";
import ImagePicker from "react-native-image-crop-picker";

const PersonalFrameScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [yourName, setYourName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [logoUri, setLogoUri] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleSelectPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setLogoUri(image.path);
      })
      .catch((error) => {
        console.log("Error opening gallery:", error);
      });
  };

  const handleCountrySelect = (country: any) => {
    setCountryCode(`+${country.callingCode[0]}`);
  };
  return (
    <Block flex={1}>
      <CustomHeader title={"Create Frame"} isBack={true} />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Block flex={1} margin={[perfectSize(10), perfectSize(20)]}>
          <Block
            center
            margin={[
              perfectSize(10),
              perfectSize(0),
              perfectSize(10),
              perfectSize(0),
            ]}
          >
            {image?.businessIcon}
          </Block>
          <Text color={color.BLACK} medium center h2>
            Personal
          </Text>
          <Block
            flex={false}
            margin={[
              perfectSize(10),
              perfectSize(0),
              perfectSize(0),
              perfectSize(0),
            ]}
          >
            <Text color={color.GREY_COLOR} medium center caption>
              Fill the details which you want to show on banners.
            </Text>
          </Block>

          <CustomTextInput
            itemTitle={"Your Name"}
            value={yourName}
            placeholder={"Please enter company name"}
            onChangeText={(text: any) => setYourName(text)}
            extraTitleStyle={{
              color: color.BLUE,
              fontSize: responsiveScale(13),
            }}
            multiline={false}
            keyboardType={"default"}
            textAlignVertical={"center"}
          />
          <CustomTextInput
            itemTitle={"Occupation"}
            value={occupation}
            placeholder={"Your occupation"}
            onChangeText={(text: any) => setOccupation(text)}
            extraTitleStyle={{
              color: color.BLUE,
              fontSize: responsiveScale(13),
            }}
            multiline={false}
            keyboardType={"default"}
            textAlignVertical={"center"}
          />
          <CustomTextInput
            itemTitle={"Contact Number"}
            value={contactNumber}
            placeholder={"Your contact number"}
            onChangeText={(text: any) => setContactNumber(text)}
            extraTitleStyle={{
              color: color.BLUE,
              fontSize: responsiveScale(13),
            }}
            multiline={false}
            keyboardType={"numeric"}
            textAlignVertical={"center"}
            countryCode={countryCode}
            onSelectCountry={handleCountrySelect}
          />
          <CustomTextInput
            itemTitle={"Email Id"}
            value={email}
            placeholder={"Email Id"}
            onChangeText={(text: any) => setEmail(text)}
            extraTitleStyle={{
              color: color.BLUE,
              fontSize: responsiveScale(13),
            }}
            multiline={false}
            keyboardType={"default"}
            textAlignVertical={"center"}
          />
        </Block>
        <Block
          flex={false}
          margin={[
            perfectSize(0),
            perfectSize(0),
            perfectSize(0),
            perfectSize(20),
          ]}
        >
          <Text medium color={color.BLUE} size={responsiveScale(10)}>
            Show my photo
          </Text>

          {logoUri ? (
            <TouchableOpacity
              style={styles.showPhotoView}
              onPress={handleSelectPhoto}
            >
              <Image
                source={{ uri: logoUri }}
                style={styles.logoImage}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.showPhotoView}
              onPress={handleSelectPhoto}
            >
              <Block
                flex={false}
                center
                margin={[
                  perfectSize(0),
                  perfectSize(0),
                  perfectSize(10),
                  perfectSize(0),
                ]}
              >
                {image.cameraIcon}
              </Block>
              <Text color={color.GREY_COLOR} regular center caption>
                Upload your photo
              </Text>
            </TouchableOpacity>
          )}
        </Block>

        <Button
          name={"Save"}
          onPress={() => {}}
          extraBtnViewStyle={{
            marginBottom: bottom + 10,
          }}
          disabled={false}
        />
      </KeyboardAwareScrollView>
    </Block>
  );
};

export default PersonalFrameScreen;

const styles = StyleSheet.create({
  item: {
    paddingVertical: perfectSize(25),
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: responsiveScale(16),
  },
  showPhotoView: {
    borderWidth: 1,
    borderColor: color.BLUE,
    marginRight: perfectSize(20),
    padding: perfectSize(20),
    marginTop: perfectSize(10),
    marginBottom: perfectSize(30),
    borderRadius: perfectSize(10),
    borderStyle: "dashed",
  },
  logoImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "red",
  },
});
