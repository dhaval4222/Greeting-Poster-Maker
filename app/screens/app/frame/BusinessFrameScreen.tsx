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

const BusinessFrameScreen = ({ route }: any) => {
  const { bottom } = useSafeAreaInsets();
  const [companyName, setCompanyName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [address, setAddress] = useState("");
  const [logoUri, setLogoUri] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const businessframeData = route.params?.businessframeData;

  useEffect(() => {
    if (businessframeData) {
      setCompanyName(businessframeData.name);
      setContactNumber(businessframeData.phone);
      setEmail(businessframeData.email);
      setAddress(businessframeData.address);
      setLogoUri(businessframeData.image);
    }
  }, []);
  const handleSave = () => {
    if (businessframeData) {
      console.log("Update data");
    } else {
      console.log("Save data");
    }
  };
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
    <Block flex={1} color={color.WHITE}>
      <CustomHeader
        title={businessframeData ? "Edit Frame" : "Create Frame"}
        isBack={true}
      />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Block flex={1} margin={[perfectSize(10), perfectSize(20)]}>
          <Block flex={false}
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
            Business
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
            itemTitle={"Company Name"}
            value={companyName}
            placeholder={"Please enter company name"}
            onChangeText={(text: any) => setCompanyName(text)}
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
            placeholder={"Contact number"}
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
          <CustomTextInput
            itemTitle={"Website URL"}
            value={websiteUrl}
            placeholder={"Enter website URL"}
            onChangeText={(text: any) => setWebsiteUrl(text)}
            extraTitleStyle={{
              color: color.BLUE,
              fontSize: responsiveScale(13),
            }}
            multiline={false}
            keyboardType={"default"}
            textAlignVertical={"center"}
          />
          <CustomTextInput
            itemTitle={"Address"}
            value={address}
            placeholder={"Enter office address"}
            onChangeText={(text: any) => setAddress(text)}
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
            Show company logo
          </Text>

          {logoUri ? (
            <TouchableOpacity
              style={styles.showPhotoView}
              onPress={handleSelectPhoto}
            >
              <Image
                source={
                  businessframeData?.image
                    ? businessframeData?.image
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

export default BusinessFrameScreen;

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
