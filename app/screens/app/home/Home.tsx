import React, { useEffect } from "react";
import { StyleSheet, TextInput, FlatList } from "react-native";
import SplashScreen from "react-native-splash-screen";
import CustomHeader from "../../../components/CustomHeader";
import Text from "../../../components/utilities/Text";
import { color } from "../../../config/color";
import { deviceWidth, font, perfectSize } from "../../../styles/theme";
import { responsiveScale } from "../../../styles/mixins";
import FestivalCard from "../../../components/FestivalCard/FestivalCard";
import Block from "../../../components/utilities/Block";
import { image } from "../../../utils/Images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DeviceInfo from "react-native-device-info";
import { useDispatch, useSelector } from "react-redux";
import { setDeviceIdAction, setFrameDataAction } from "../../../store/auth";
import firestore from "@react-native-firebase/firestore";
import { frameCollection, mainCollection } from "../../../constants/globalFunctions";
const festivalsData = {
  today: [
    {
      id: "1",
      name: "Guru Purnima",
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: "2",
      name: "Makar Sankranti",
      image: require("../../../assets/appImages/FestivalsPoster.png"),
    },
    {
      id: "3",
      name: "Ram Mandir",
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: "4",
      name: "Ram Mandir",
      image: require("../../../assets/appImages/FestivalsPoster.png"),
    },
  ],
  trending: [
    {
      id: "1",
      name: "Happy Diwali",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: "2",
      name: "Hanuman Jayanti",
      date: "23 Jan",
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: "3",
      name: "Raksha Bandhan",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: "4",
      name: "Raksha Bandhan",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
  ],
  upcoming: [
    {
      id: "1",
      name: "Happy Diwali",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: "2",
      name: "Hanuman Jayanti",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: "3",
      name: "Raksha Bandhan",
      date: "23 Jan",
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: "4",
      name: "Happy Diwali",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: "5",
      name: "Hanuman Jayanti",
      date: "23 Jan",
      image: require("../../../assets/appImages/GuruPurnimaImg.png"),
    },
    {
      id: "6",
      name: "Raksha Bandhan",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
  ],
};

const Home = ({ navigation }: any) => {
  const itemWidth = (deviceWidth - 4 * 10) / 3;
  const secondItemWidth = (deviceWidth - 4 * 17) / 3;
  const deviceId = useSelector((state: any) => state.auth?.deviceId ?? "");
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
    getFrameData();
    DeviceInfo.getUniqueId().then((uniqueId: any) => {
      dispatch(setDeviceIdAction(uniqueId));
    });
  }, []);

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
  return (
    <Block flex={1} style={styles.container}>
      <CustomHeader title="Greeting Poster Maker" />
      <Block flex={false} style={styles.searchBarContainer}>
        {image.searchIcon}
        <TextInput
          style={styles.searchBar}
          placeholder="Search festival poster"
          // onChangeText={handleSearch}
          // value={searchQuery}
        />
      </Block>

      <KeyboardAwareScrollView nestedScrollEnabled={true}>
        <Block flex={false} style={styles.section}>
          <Text size={responsiveScale(11)} medium style={styles.sectionTitle}>
            Today's festivals
          </Text>
          <Block flex={false}>
            <FlatList
              horizontal
              data={festivalsData?.today}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <FestivalCard
                  festival={item}
                  nameExtraStye={{
                    position: "absolute",
                    bottom: perfectSize(0),
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    paddingVertical: perfectSize(6),
                    borderBottomLeftRadius: perfectSize(5),
                    borderBottomRightRadius: perfectSize(5),
                    width: itemWidth,
                    marginLeft: perfectSize(10),
                  }}
                  imageExtraStye={{
                    width: itemWidth,
                    marginLeft: perfectSize(10),
                    height: perfectSize(138),
                  }}
                  festivalNameExtraStye={{
                    color: color.WHITE,
                  }}
                  onCardPress={(item: any) =>
                    navigation.navigate("CreatePosterScreen", {
                      item: item,
                    })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                paddingHorizontal: perfectSize(7),
              }}
            />
          </Block>
        </Block>
        <Block flex={false} style={styles.section}>
          <Text size={responsiveScale(11)} medium style={styles.sectionTitle}>
            Trending festivals
          </Text>
          <FlatList
            horizontal
            data={festivalsData.trending}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FestivalCard
                festival={item}
                nameExtraStye={{
                  width: secondItemWidth,
                  marginLeft: perfectSize(15),
                }}
                imageExtraStye={{
                  width: secondItemWidth,
                  marginLeft: perfectSize(15),
                  height: perfectSize(106),
                }}
                onCardPress={(item: any) =>
                  navigation.navigate("CreatePosterScreen", {
                    item: item,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingRight: perfectSize(20) }}
          />
        </Block>
        <Block flex={false} style={styles.section}>
          <Text size={responsiveScale(11)} medium style={styles.sectionTitle}>
            Upcoming festivals
          </Text>
          <FlatList
            numColumns={3}
            data={festivalsData.upcoming}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FestivalCard
                festival={item}
                nameExtraStye={{
                  width: secondItemWidth,
                  marginLeft: perfectSize(15),
                  marginBottom: perfectSize(10),
                }}
                imageExtraStye={{
                  width: secondItemWidth,
                  marginLeft: perfectSize(15),
                  height: perfectSize(106),
                }}
                cardDateExtraStyle={{
                  bottom: perfectSize(45),
                }}
                onCardPress={(item: any) =>
                  navigation.navigate("CreatePosterScreen", {
                    item: item,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingRight: perfectSize(20) }}
          />
        </Block>
      </KeyboardAwareScrollView>
    </Block>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.WHITE,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: perfectSize(40),
    borderRadius: perfectSize(7),
    margin: perfectSize(16),
    paddingHorizontal: perfectSize(18),
    backgroundColor: color.WHITE,
    shadowColor: color.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchBar: {
    flex: 1,
    height: "100%",
    marginLeft: perfectSize(5),
    fontSize: perfectSize(12),
    fontFamily: font.regular,
    paddingLeft: perfectSize(10),
  },
  searchIcon: {
    marginRight: perfectSize(10),
  },
  section: {
    marginBottom: perfectSize(16),
  },
  sectionTitle: {
    marginLeft: perfectSize(16),
    marginBottom: perfectSize(12),
  },
});
