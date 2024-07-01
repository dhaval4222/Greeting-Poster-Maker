import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { responsiveScale } from "../../../styles/mixins";
import { color } from "../../../config/color";
import Text from "../../../components/utilities/Text";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import { deviceWidth, perfectSize } from "../../../styles/theme";
import PosterTheme from "../../../components/createPoster/PosterTheme";
import PosterLogoPosition from "../../../components/createPoster/PosterLogoPosition";
import PosterFont from "../../../components/createPoster/PosterFont";
import PosterDetails from "../../../components/createPoster/PosterDetails";
import { useSelector } from "react-redux";
import ViewShot from "react-native-view-shot";

interface Option {
  id: number;
  title: string;
  isSelect: boolean;
}

const CreatePosterScreen = ({ route }: any) => {
  const options: Option[] = [
    { id: 1, title: "Theme", isSelect: false },
    { id: 2, title: "Background", isSelect: false },
    { id: 3, title: "Graphics", isSelect: false },
    { id: 4, title: "Logo-Position", isSelect: false },
    { id: 5, title: "Font", isSelect: false },
    { id: 6, title: "Outline", isSelect: false },
    { id: 7, title: "Details", isSelect: false },
  ];

  const data = {
    theme: [
      {
        text1: {
          bottom: 60,
          left: "10%",
        },
        text2: {
          bottom: 50,
          left: "30%",
          alignSelf: "center",
        },
        text3: {
          bottom: 35,
          left: "25%",
        },
        text4: {
          bottom: 50,
          left: "60%",
        },
        text5: {
          bottom: 35,
          left: "55%",
        },
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme1.png"),
      },
      {
        text1: {
          top: 10,
          left: 10,
        },
        text2: {
          top: 15,
          alignSelf: "center",
        },
        text3: {
          bottom: 35,
          alignSelf: "center",
        },
        text4: {
          top: 35,
          right: 10,
        },
        text5: {
          top: 10,
          left: 90,
        },
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme2.png"),
      },
      {
        text1: {
          bottom: 60,
          left: "10%",
        },
        text2: {
          top: 15,
          right: "5%",
        },
        text3: {
          bottom: 35,
          alignSelf: "center",
        },
        text4: {
          top: 45,
          right: "5%",
        },
        text5: {},
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme3.png"),
      },
      {
        text1: {
          bottom: 60,
          left: "10%",
        },
        text2: {
          bottom: 65,
          left: "50%",
        },
        text3: {
          bottom: 60,
          left: "30%",
        },
        text4: {
          bottom: 35,
          left: "50%",
        },
        text5: {},
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme4.png"),
      },
      {
        text1: {
          bottom: 35,
          left: "5%",
        },
        text2: {
          bottom: 25,
          right: "2%",
        },
        text3: {
          bottom: 60,
          left: "30%",
        },
        text4: {
          bottom: 35,
          left: "50%",
        },
        text5: {
          bottom: 35,
          left: "50%",
        },
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme4.png"),
      },
      {
        text1: {
          bottom: 65,
          left: "5%",
        },
        text2: {
          bottom: 25,
          alignSelf: "flex-end",
          right: "5%",
        },
        text3: {
          bottom: 60,
          left: "30%",
        },
        text4: {
          bottom: 35,
          left: "50%",
        },
        text5: {
          bottom: 35,
          left: "5%",
        },
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme6.png"),
      },
      {
        text1: {
          bottom: 65,
          right: "5%",
        },
        text2: {
          bottom: 55,
          left: "5%",
        },
        text3: {
          bottom: 35,
          alignSelf: "center",
        },
        text4: {
          bottom: 55,
          alignSelf: "flex-end",
          right: "2%",
        },
        text5: {
          bottom: 65,
          alignSelf: "center",
        },
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme7.png"),
      },
      {
        text1: {
          bottom: 65,
          right: "5%",
        },
        text2: {
          bottom: 55,
          left: "5%",
        },
        text3: {
          bottom: 35,
          alignSelf: "center",
        },
        text4: {
          bottom: 55,
          alignSelf: "flex-end",
          right: "2%",
        },
        text5: {
          bottom: 35,
          alignSelf: "center",
        },
        logoimage: {
          top: 20,
          left: 20,
        },
        image: require("../../../assets/appImages/Theme8.png"),
      },
    ],
    background: [
      {
        id: 1,
        image: require("../../../assets/appImages/BackgroundImage.png"),
      },
      {
        id: 2,
        image: require("../../../assets/appImages/BackgroundImage1.png"),
      },
      {
        id: 3,
        image: require("../../../assets/appImages/BackgroundImage2.png"),
      },
      {
        id: 4,
        image: require("../../../assets/appImages/BackgroundImage3.png"),
      },
    ],
    graphics: [
      { id: 1, image: require("../../../assets/appImages/GraphicsImg1.png") },
      { id: 2, image: require("../../../assets/appImages/GraphicsImg2.png") },
      { id: 3, image: require("../../../assets/appImages/GraphicsImg3.png") },
      { id: 4, image: require("../../../assets/appImages/GraphicsImg4.png") },
    ],
    logoPosition: [
      {
        id: 1,
        logo: "Logo",
        position: "Top-left",
      },
      {
        id: 2,
        logo: "Logo",
        position: "Top-center",
      },
      {
        id: 3,
        logo: "Logo",
        position: "Top-right",
      },
      {
        id: 4,
        logo: "Logo",
        position: "Bottom-left",
      },
      {
        id: 5,
        logo: "Logo",
        position: "Bottom-center",
      },
      {
        id: 6,
        logo: "Logo",
        position: "Bottom-right",
      },
    ],
    outline: [
      { id: 1, borderStyle: "none" },
      { id: 2, borderStyle: "dotted" },
      { id: 3, borderStyle: "dashed" },
      { id: 4, borderStyle: "solid" },
    ],

    details: [
      {
        id: 1,
        name: "Name",
        image: require("../../../assets/appImages/UserIcon.png"),
      },
      {
        id: 2,
        name: "Mobile",
        image: require("../../../assets/appImages/MobileIcon.png"),
      },
      {
        id: 3,
        name: "Email",
        image: require("../../../assets/appImages/EmailIcon.png"),
      },
      {
        id: 4,
        name: "Logo",
        image: require("../../../assets/appImages/LogoIcon.png"),
      },
      {
        id: 5,
        name: "Address",
        image: require("../../../assets/appImages/AddressIcon.png"),
      },
      {
        id: 6,
        name: "Website",
        image: require("../../../assets/appImages/WebsiteIcon.png"),
      },
    ],
  };

  const { item } = route?.params;
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedPoster, setSelectedPoster] = useState(data.theme[0]);
  const [selectedBackground, setSelectedBackground] = useState(
    data.background[0]
  );
  const [selectedGraphics, setSelectedGraphics] = useState();

  const [selectedLogoPosition, setSelectedLogoPosition] = useState(
    data.logoPosition[0]
  );
  const [selectedDetail, setSelectedDetail] = useState(data.details[0]);
  const [selectedOutline, setSelectedOutline] = useState(data.outline[0]);
  const [currentData, setCurrentData] = useState(data.theme);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedBorderStyle, setSelectedBorderStyle] = useState("none");
  const [selected, setSelected] = useState(0);
  console.log("selected---->", selected);

  const frameData = useSelector((state: any) => state.auth?.frameData ?? "");
  const defaultData = frameData.filter((item: any) => item?.isDefault === true);
  console.log("frameData----->", defaultData);
  const viewShotRef = useRef();

  const flatListRef = useRef<FlatList<Option>>(null);
  console.log("data.theme---->", data.theme);
  console.log("selectedOption.title", selectedOption.title),
    useEffect(() => {
      switch (selectedOption.title) {
        case "Theme":
          // setCurrentData(data.theme);
          break;
        case "Background":
          setCurrentData(data.background);
          break;
        case "Graphics":
          setCurrentData(data.graphics);
          break;
        case "Logo-Position":
          setCurrentData(data.logoPosition);
          break;
        case "Font":
          setCurrentData([]);
          break;
        case "Outline":
          setCurrentData(data.outline);
          break;
        case "Details":
          setCurrentData(data.details);
          break;
        default:
          setCurrentData([]);
          break;
      }
    }, [selectedOption]);

  const handlePosterSelect = (item: any) => {
    setSelectedPoster(item);
    setSelectedImage(item.image);
  };

  const handleBackgroundSelect = (item: any) => {
    setSelectedBackground(item);
    setSelectedImage(item.image);
  };

  const handleGraphicsSelect = (item: any) => {
    setSelectedGraphics(item);
    setSelectedImage(item.image);
  };

  const handleLogoPositionSelect = (item: any) => {
    setSelectedLogoPosition(item);
  };

  const handleDetailSelect = (item: DetailItem) => {
    setSelectedDetail(item);
  };

  const handleOutlineSelect = (item: any) => {
    setSelectedOutline(item);
    setSelectedBorderStyle(item.borderStyle);
  };

  const handleOptionPress = () => {
    const currentIndex = options.findIndex(
      (opt) => opt.id === selectedOption.id
    );
    const nextIndex = (currentIndex + 1) % options.length;
    setSelectedOption(options[nextIndex]);
    scrollToIndex(nextIndex);
  };

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  const renderOptionItem = ({ item }: { item: Option }) => (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        selectedOption.id === item.id && styles.selectedOption,
      ]}
      onPress={() => setSelectedOption(item)}
    >
      <Text
        medium
        caption
        color={selectedOption.id === item.id ? color.WHITE : color.BLUE}
        size={responsiveScale(6)}
        center
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderPosterImage = ({ item, index }: { item: any; index: any }) => (
    console.log("index------>", index),
    (
      <PosterTheme
        festival={item}
        selected={selected}
        index={index}
        isThemaData={true}
        onPressImg={() => setSelected(index)}
        isSelected={selectedPoster?.id === item.id}
        onPress={() => handlePosterSelect(item)}
        imageExtraStye={{
          width: itemWidth,
          height: itemHeight,
          marginLeft: perfectSize(10),
        }}
      />
    )
  );

  const renderBackgroundImage = ({ item }: { item: any }) => (
    <PosterTheme
      festival={item}
      isSelected={selectedBackground?.id === item.id}
      onPress={() => handleBackgroundSelect(item)}
      imageExtraStye={{
        width: itemWidth,
        height: itemHeight,
        marginLeft: perfectSize(10),
      }}
    />
  );

  const renderGraphicsImage = ({ item }: { item: any }) => (
    <PosterTheme
      festival={item}
      isSelected={selectedGraphics?.id === item.id}
      onPress={() => handleGraphicsSelect(item)}
      imageExtraStye={{
        width: itemWidth,
        height: itemHeight,
        marginLeft: perfectSize(10),
      }}
    />
  );

  const renderLogoPositionImage = ({ item }: { item: any }) => (
    <PosterLogoPosition
      festival={item}
      isLogoText={true}
      isSelected={selectedLogoPosition?.id === item.id}
      onPress={() => handleLogoPositionSelect(item)}
      imageExtraStye={{
        width: itemWidth,
        height: 81,
        marginLeft: perfectSize(10),
      }}
    />
  );
  const renderLogoOutlineImage = ({ item }: { item: any }) => (
    <PosterLogoPosition
      festival={item}
      isLogoText={false}
      isSelected={selectedOutline?.id === item.id}
      onPress={() => handleOutlineSelect(item)}
      borderStyle={item.borderStyle}
      imageExtraStye={{
        width: itemWidth,
        height: 81,
        marginLeft: perfectSize(10),
        paddingVertical: perfectSize(10),
      }}
    />
  );

  const renderDetailImage = ({ item }: { item: any }) => (
    <PosterDetails
      festival={item}
      isLogoText={false}
      isSelected={selectedDetail?.id === item.id}
      onPress={() => handleDetailSelect(item)}
      imageExtraStye={{
        marginLeft: perfectSize(10),
      }}
    />
  );

  const renderItem = ({ item, index }: { item: any; index: any }) => {
    if (selectedOption.title === "Theme") {
      return renderPosterImage({ item, index });
    } else if (selectedOption.title === "Background") {
      return renderBackgroundImage({ item });
    } else if (selectedOption.title === "Graphics") {
      return renderGraphicsImage({ item });
    } else if (selectedOption.title === "Logo-Position") {
      return renderLogoPositionImage({ item });
    } else if (selectedOption.title === "Font") {
      return <PosterFont />;
    } else if (selectedOption.title === "Outline") {
      return renderLogoOutlineImage({ item });
    } else if (selectedOption.title === "Details") {
      return renderDetailImage({ item });
    }
    return null;
  };

  const LogoIcon = ({ positionStyle }: any) => (
    <>
      <Block flex={1} style={[styles.logo, positionStyle]}>
        <Image
          source={{ uri: defaultData[0]?.companyLogo }}
          style={styles.logoIcon}
          resizeMode="cover"
        />
      </Block>
    </>
  );

  const getLogoPositionStyle = () => {
    switch (selectedLogoPosition.position) {
      case "Top-left":
        return { top: perfectSize(10), left: perfectSize(10) };
      case "Top-center":
        return { top: perfectSize(10), alignSelf: "center" };
      case "Top-right":
        return { top: perfectSize(10), right: perfectSize(10) };
      case "Bottom-left":
        return { bottom: perfectSize(10), left: perfectSize(10) };
      case "Bottom-center":
        return { bottom: perfectSize(10), alignSelf: "center" };
      case "Bottom-right":
        return { bottom: perfectSize(10), right: perfectSize(10) };
      default:
        return {};
    }
  };
  const numColumns = 4;
  const itemWidth =
    (deviceWidth - (numColumns + 1) * perfectSize(10)) / numColumns;
  const itemHeight = perfectSize(81);
  console.log("currentData---->", currentData);
  return (
    <Block flex={1} style={styles.container}>
      <CustomHeader
        title={"Create poster"}
        isBack={true}
        isleftIcon={true}
        leftIconComponent={
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleOptionPress}
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
          style={styles.imageContainer}
        >
          <Block style={styles.image}>
            <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 1 }}>
              <ImageBackground
                source={
                  selectedOption.title === "Background"
                    ? selectedBackground.image
                    : require("../../../assets/appImages/BackgroundImage3.png")
                }
                resizeMode="cover"
                style={styles.bgImage}
              >
                <Image
                  source={
                    selectedOption.title === "Graphics"
                      ? selectedGraphics?.image
                      : require("../../../assets/appImages/GraphicsImg1.png")
                  }
                  resizeMode="cover"
                  style={[styles.logo1]}
                />
                {selected !== 1 &&
                  selected !== 2 &&
                  selected !== 3 &&
                  selected !== 6 &&
                  selected !== 7 &&
                  defaultData[0]?.companyName && (
                    <Block
                      flex={false}
                      margin={[
                        perfectSize(0),
                        perfectSize(10),
                        perfectSize(0),
                        perfectSize(0),
                      ]}
                      row
                      center
                      style={[styles.text, data.theme[selected].text1]}
                    >
                      <Block
                        flex={false}
                        style={styles.iconContainer}
                        center
                        middle
                      >
                        <Image
                          source={require("../../../assets/appImages/UserIcon.png")}
                          style={[styles.icon]}
                          resizeMode="contain"
                        />
                      </Block>
                      <Text regular small color={color.DARK_GREY}>
                        {defaultData[0].companyName}
                      </Text>
                    </Block>
                  )}

                {selected !== 7 && defaultData[0]?.contactNumber && (
                  <Block
                    flex={false}
                    row
                    center
                    margin={[
                      perfectSize(0),
                      perfectSize(10),
                      perfectSize(10),
                      perfectSize(0),
                    ]}
                    style={[styles.text, data.theme[selected].text2]}
                  >
                    <Block
                      flex={false}
                      style={styles.iconContainer}
                      center
                      middle
                    >
                      <Image
                        source={require("../../../assets/appImages/MobileIcon.png")}
                        style={[styles.icon]}
                        resizeMode="contain"
                      />
                    </Block>
                    <Text regular small color={color.DARK_GREY}>
                      {defaultData[0].contactNumber}
                    </Text>
                  </Block>
                )}

                {selected !== 1 &&
                  selected !== 4 &&
                  selected !== 5 &&
                  selected !== 7 &&
                  defaultData[0]?.email && (
                    <Block
                      flex={false}
                      margin={[
                        perfectSize(0),
                        perfectSize(10),
                        perfectSize(10),
                        perfectSize(0),
                      ]}
                      row
                      center
                      style={[styles.text, data.theme[selected].text4]}
                    >
                      <Block
                        flex={false}
                        style={styles.iconContainer}
                        center
                        middle
                      >
                        <Image
                          source={require("../../../assets/appImages/EmailIcon.png")}
                          style={[styles.icon]}
                          resizeMode="contain"
                        />
                      </Block>
                      <Text regular small color={color.DARK_GREY}>
                        {defaultData[0].email}
                      </Text>
                    </Block>
                  )}

                {selected !== 4 &&
                  selected !== 5 &&
                  selected !== 7 &&
                  defaultData[0]?.address && (
                    <Block
                      flex={false}
                      margin={[
                        perfectSize(0),
                        perfectSize(10),
                        perfectSize(0),
                        perfectSize(0),
                      ]}
                      row
                      center
                      style={[styles.text, data.theme[selected].text3]}
                    >
                      <Block
                        flex={false}
                        style={styles.iconContainer}
                        center
                        middle
                      >
                        <Image
                          source={require("../../../assets/appImages/AddressIcon.png")}
                          style={[styles.icon]}
                          resizeMode="contain"
                          tintColor={color.BLUE}
                        />
                      </Block>
                      <Text regular small color={color.DARK_GREY}>
                        {defaultData[0]?.address}
                      </Text>
                    </Block>
                  )}
                {selected !== 1 &&
                  selected !== 2 &&
                  selected !== 3 &&
                  defaultData[0]?.websiteUrl && (
                    <Block
                      flex={false}
                      margin={[
                        perfectSize(0),
                        perfectSize(10),
                        perfectSize(0),
                        perfectSize(0),
                      ]}
                      row
                      center
                      style={[styles.text, data.theme[selected].text5]}
                    >
                      <Block
                        flex={false}
                        style={styles.iconContainer}
                        center
                        middle
                      >
                        <Image
                          source={require("../../../assets/appImages/WebsiteIcon.png")}
                          style={[styles.icon]}
                          resizeMode="contain"
                          tintColor={color.BLUE}
                        />
                      </Block>
                      <Text regular small color={color.DARK_GREY}>
                        {defaultData[0].websiteUrl}
                      </Text>
                    </Block>
                  )}
              </ImageBackground>
            </ViewShot>

            {/* {selectedOption.title === "Theme" ||
              (selectedGraphics && (
                <Image
                  source={selectedGraphics.image}
                  style={styles.graphicsImageStyle}
                />
              ))} */}
          </Block>
          {selectedBorderStyle !== "none" && (
            <Block
              flex={false}
              style={[
                styles.borderView,
                {
                  borderStyle: selectedBorderStyle,
                },
              ]}
            ></Block>
          )}
          <LogoIcon positionStyle={getLogoPositionStyle()} />
        </Block>

        <Block flex={1}>
          <Block flex={false}>
            <FlatList
              ref={flatListRef}
              horizontal
              data={options}
              contentContainerStyle={{ paddingHorizontal: perfectSize(10) }}
              showsHorizontalScrollIndicator={false}
              renderItem={renderOptionItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </Block>

          <Block
            flex={1}
            margin={[
              perfectSize(30),
              perfectSize(0),
              perfectSize(20),
              perfectSize(0),
            ]}
          >
            {selectedOption.title !== "Font" ? (
              <FlatList
                data={currentData}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id?.toString()}
                numColumns={4}
              />
            ) : (
              <PosterFont />
            )}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  nextButton: {
    paddingHorizontal: perfectSize(10),
    paddingVertical: perfectSize(3),
    borderWidth: perfectSize(1),
    borderRadius: perfectSize(5),
    borderColor: color.WHITE,
  },
  imageContainer: {
    overflow: "hidden",
    shadowColor: color.BLACK,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    margin: perfectSize(25),
    borderRadius: perfectSize(20),
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
    // padding: 10,
  },
  optionContainer: {
    paddingHorizontal: perfectSize(15),
    paddingVertical: perfectSize(6),
    margin: perfectSize(3),
    borderRadius: perfectSize(20),
    backgroundColor: color.WHITE,
    borderWidth: perfectSize(1),
    borderColor: color.BLUE,
  },
  selectedOption: {
    backgroundColor: color.BLUE,
  },
  logo: {
    position: "absolute",
    width: perfectSize(40),
    height: perfectSize(40),
    margin: perfectSize(10),
  },
  logoIcon: {
    width: "100%",
    height: "100%",
  },
  borderView: {
    padding: 10,
    height: "95%",
    width: "95%",
    zIndex: 1,
    left: 8,
    top: 8,
    borderRadius: perfectSize(20),
    borderColor: color.BLACK,
    borderWidth: 1,
  },
  graphicsImageStyle: {
    position: "absolute",
    width: "65%",
    height: "70%",
    top: "15%",
    left: "18%",
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: color.BLUE,
    height: perfectSize(25),
    width: perfectSize(25),
    borderRadius: perfectSize(50),
    backgroundColor: color.WHITE,
    marginRight: perfectSize(5),
  },
  icon: {
    width: perfectSize(10),
    height: perfectSize(10),
  },

  bgImage: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: 40,
    height: 60,
    position: "absolute",
    top: 10,
    left: 10,
  },
  logo1: {
    width: "65%",
    height: "70%",
    alignSelf: "center",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
    position: "absolute",
  },
  capturedImage: {
    height: 200,
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default CreatePosterScreen;
