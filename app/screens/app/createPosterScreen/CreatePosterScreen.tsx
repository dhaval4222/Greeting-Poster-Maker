import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { responsiveScale } from "../../../styles/mixins";
import { color } from "../../../config/color";
import Text from "../../../components/utilities/Text";
import Block from "../../../components/utilities/Block";
import CustomHeader from "../../../components/CustomHeader";
import { deviceWidth, perfectSize } from "../../../styles/theme";
import PosterImage from "../../../components/posterImage/PosterImage";

interface Option {
  id: number;
  title: string;
  isSelect: boolean;
}

const CreatePosterScreen = ({ route }: any) => {
  const options: Option[] = [
    {
      id: 1,
      title: "Theme",
      isSelect: false,
    },
    {
      id: 2,
      title: "Background",
      isSelect: false,
    },
    {
      id: 3,
      title: "Graphics",
      isSelect: false,
    },
    {
      id: 4,
      title: "Logo-Position",
      isSelect: false,
    },
    {
      id: 5,
      title: "Font",
      isSelect: false,
    },
    {
      id: 6,
      title: "Outline",
      isSelect: false,
    },
    {
      id: 7,
      title: "Details",
      isSelect: false,
    },
  ];

  const theme = [
    {
      id: 1,
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: 2,
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: 3,
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: 4,
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: 5,
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: 6,
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: 7,
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: 8,
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
  ];

  const { item } = route?.params;

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedPoster, setSelectedPoster] = useState(theme[0]); 
  const flatListRef = useRef<FlatList<Option>>(null);

  const handlePosterSelect = (theme: any) => {
    setSelectedPoster(theme);
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

  const numColumns = 4;
  const itemWidth = (deviceWidth - 5 * perfectSize(10)) / numColumns;
  const itemHeight = perfectSize(81);

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

  const renderPosterImage = ({ item }: { item: any }) => (
    <PosterImage
      festival={item}
      isSelected={selectedPoster?.id === item.id}
      onPress={() => handlePosterSelect(item)}
      imageExtraStye={{
        width: itemWidth,
        height: itemHeight,
        marginLeft: perfectSize(10),
      }}
    />
  );

  const renderBackground = () => (
    <Block flex={false}>
      <Text>Background</Text>
    </Block>
  );

  const renderGraphics = () => (
    <Block flex={false}>
      <Text>Graphics</Text>
    </Block>
  );

  const renderLogoPosition = () => (
    <Block flex={false}>
      <Text>Logo-Position</Text>
    </Block>
  );

  const renderFont = () => (
    <Block flex={false}>
      <Text>Font</Text>
    </Block>
  );

  const renderOutline = () => (
    <Block flex={false}>
      <Text>Outline</Text>
    </Block>
  );

  const renderDetails = () => (
    <Block flex={false}>
      <Text>Details</Text>
    </Block>
  );

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
          <Image source={item?.image} style={styles.image} />
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
            {selectedOption.title === "Theme" && (
              <FlatList
                data={theme}
                showsVerticalScrollIndicator={false}
                renderItem={renderPosterImage}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
              />
            )}
            {selectedOption.title === "Background" && renderBackground()}
            {selectedOption.title === "Graphics" && renderGraphics()}
            {selectedOption.title === "Logo-Position" && renderLogoPosition()}
            {selectedOption.title === "Font" && renderFont()}
            {selectedOption.title === "Outline" && renderOutline()}
            {selectedOption.title === "Details" && renderDetails()}
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
});

export default CreatePosterScreen;
