import React, { useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import CustomHeader from "../../../components/CustomHeader";
import FestivalCard from "../../../components/FestivalCard/FestivalCard";
import Block from "../../../components/utilities/Block";
import Text from "../../../components/utilities/Text";
import { WINDOW_WIDTH, responsiveScale } from "../../../styles/mixins";
import { deviceWidth, perfectSize } from "../../../styles/theme";
import SearchIcon from "../../../assets/appImages/SearchIcon.svg";
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
      image: require("../../../assets/appImages/FestivalsPoster.png"),
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
      image: require("../../../assets/appImages/GreetPoster.png"),
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
      image: require("../../../assets/appImages/GreetPoster.png"),
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
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
    {
      id: "6",
      name: "Raksha Bandhan",
      date: "23 Jan",
      image: require("../../../assets/appImages/GreetPoster.png"),
    },
  ],
};

const DashBoard = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const itemWidth = (deviceWidth - 4 * 10) / 3;
  const secondItemWidth = (deviceWidth - 4 * 17) / 3;
  return (
    <Block style={styles.container}>
      <CustomHeader title="Greeting Poster Maker" />
      <View style={styles.searchBarContainer}>
        <SearchIcon width={15} height={15} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search festival poster"
        />
      </View>
      <ScrollView>
        <Block style={styles.section}>
          <Text size={13} medium style={styles.sectionTitle}>
            Today's festivals
          </Text>
          <View>
            <FlatList
              horizontal
              data={festivalsData.today}
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
                    color: "#ffffff",
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: perfectSize(7) }}
            />
          </View>
        </Block>
        <Block style={styles.section}>
          <Text style={styles.sectionTitle}>Trending festivals</Text>
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
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingRight: perfectSize(20) }}
          />
        </Block>
        <Block style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming festivals</Text>
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
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingRight: perfectSize(20) }}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: perfectSize(40),
    borderRadius: perfectSize(7),
    margin: perfectSize(16),
    paddingHorizontal: perfectSize(18),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
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
    fontSize: perfectSize(14),
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
