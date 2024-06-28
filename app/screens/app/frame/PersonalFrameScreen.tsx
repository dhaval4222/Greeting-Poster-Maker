import React, { useEffect, useState } from "react";
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
import firestore from "@react-native-firebase/firestore";
import DeviceInfo from "react-native-device-info";
import Toast from "react-native-toast-message";
import {
  frameCollection,
  mainCollection,
  validateEmail,
} from "../../../constants/globalFunctions";
import { useSelector } from "react-redux";
const PersonalFrameScreen = ({ route, navigation }: any) => {
  const { bottom } = useSafeAreaInsets();
  const [yourName, setYourName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [logoUri, setLogoUri] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [sourceUrl, setSourceUrl] = useState("");
  const personalframeData = route.params?.personalframeData;
  const deviceId = useSelector((state: any) => state.auth?.deviceId ?? "");
  useEffect(() => {
    if (personalframeData) {
      setYourName(personalframeData?.data?.personalName);
      setOccupation(personalframeData?.data?.occupation);
      setContactNumber(personalframeData?.data?.contactNumber);
      setCountryCode(personalframeData?.data?.countryCode);
      setEmail(personalframeData?.data?.email);
      setLogoUri(personalframeData?.data?.companyLogo);
      setSourceUrl(personalframeData?.data?.companyLogo);
    }
  }, []);
  const handleSave = () => {
    if (yourName === "") {
      Toast.show({
        type: "error",
        text1: "Required Field",
        text2: "Please Enter Name",
      });
    } else if (occupation === "") {
      Toast.show({
        type: "error",
        text1: "Required Field",
        text2: "Please Enter occupation",
      });
    } else if (contactNumber === "") {
      Toast.show({
        type: "error",
        text1: "Required Field",
        text2: "Please Enter contact number",
      });
    } else if (email === "") {
      Toast.show({
        type: "error",
        text1: "Required Field",
        text2: "Please Enter Email address",
      });
    } else if (!validateEmail(email)) {
      Toast.show({
        type: "error",
        text1: "Required Field",
        text2: "Please Enter valid Email",
      });
    } else if (sourceUrl === "") {
      Toast.show({
        type: "error",
        text1: "Required Field",
        text2: "Please Add Logo",
      });
    } else {
      if (personalframeData) {
        const data = {
          personalName: yourName,
          countryCode: countryCode,
          contactNumber: contactNumber,
          email: email,
          companyLogo: sourceUrl,
          occupation: occupation,
          type: "Personal",
        };
        firestore()
          .collection(mainCollection)
          .doc(deviceId)
          .collection(frameCollection)
          .doc(personalframeData?.id)
          .update({
            data,
          });
        navigation.goBack();
      } else {
        const data = {
          personalName: yourName,
          countryCode: countryCode,
          contactNumber: contactNumber,
          email: email,
          companyLogo: sourceUrl,
          occupation: occupation,
          type: "Personal",
        };
        firestore()
          .collection(mainCollection)
          .doc(deviceId)
          .collection(frameCollection)
          .doc()
          .set({
            data,
          });
        navigation.goBack();
      }
    }
  };
  const handleSelectPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setSourceUrl(image.sourceURL);
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
    <Block flex={1} color={color.WHITE}>
      <CustomHeader
        title={personalframeData ? "Edit Frame" : "Create Frame"}
        isBack={true}
      />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Block flex={1} margin={[perfectSize(10), perfectSize(20)]}>
          <Block
            flex={false}
            center
            margin={[
              perfectSize(10),
              perfectSize(0),
              perfectSize(10),
              perfectSize(0),
            ]}
          >
            {image?.personalIcon}
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
                source={
                  personalframeData?.image
                    ? personalframeData?.image
                    : { uri: logoUri }
                }
                style={styles.logoImage}
                resizeMode="contain"
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
          onPress={() => handleSave()}
          extraBtnViewStyle={{
            marginBottom: bottom + 10,
          }}
          extraBtnTextStyle={{}}
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
    height: perfectSize(100),
    borderRadius: perfectSize(10),
  },
});
