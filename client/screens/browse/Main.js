import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import requests from "../../request";
import { backgroundColor, boxColor } from "../../constants";
import Row from "../../components/Row";

const Box = ({category, onPress}) => {
  return (
    <TouchableOpacity style = {styles.box} onPress={onPress}>
      <Text style={{color : "white", fontSize : 15}}>{category}</Text>
    </TouchableOpacity>
  )
}

const Main = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Trending movies 🚀</Text>
      <Row
        url={`https://api.themoviedb.org/3/trending/movie/week?api_key=3075ded08ee9e418eafcfb6da8a1d5ea&language=en-US`}
      />
      <Text style={styles.heading}>All categories</Text>
      <ScrollView horizontal={true}>
        <Box category="Top Rated 🥇" onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchTopRated })
        } />
        <Box category="Action 🔥"  onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchActionMovies })
        } />
        <Box category="Comedy 😂"  onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchComedyMovies })
        } />
        <Box category="Horror 😱"  onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchHorrorMovies })
        } />
        <Box category="Romance 💖"  onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchRomanceMovies })
        } />
        <Box category="Documentary 📽️"  onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchDocumentaries })
        } />
      </ScrollView>
     
    </ScrollView>
  );
};

{/* <TouchableOpacity
onPress={() =>
  navigation.navigate("Browse", { url: requests.fetchTrending })
}
style={styles.header}
>
<Text style={styles.title}>Trending</Text>
<Text style={styles.button}>
  <Icon name="arrow-right" size={20} />
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() =>
  navigation.navigate("Browse", { url: requests.fetchTopRated })
}
style={styles.header}
>
<Text style={styles.title}>Top Rated</Text>
<Text style={styles.button}>
  <Icon name="arrow-right" size={20} />
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() =>
  navigation.navigate("Browse", { url: requests.fetchActionMovies })
}
style={styles.header}
>
<Text style={styles.title}>Action </Text>
<Text style={styles.button}>
  <Icon name="arrow-right" size={20} />
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() =>
  navigation.navigate("Browse", { url: requests.fetchComedyMovies })
}
style={styles.header}
>
<Text style={styles.title}>Comedy</Text>
<Text style={styles.button}>
  <Icon name="arrow-right" size={20} />
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() =>
  navigation.navigate("Browse", { url: requests.fetchHorrorMovies })
}
style={styles.header}
>
<Text style={styles.title}>Horror</Text>
<Text style={styles.button}>
  <Icon name="arrow-right" size={20} />
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() =>
  navigation.navigate("Browse", { url: requests.fetchRomanceMovies })
}
style={styles.header}
>
<Text style={styles.title}>Romance</Text>
<Text style={styles.button}>
  <Icon name="arrow-right" size={20} />
</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() =>
  navigation.navigate("Browse", { url: requests.fetchDocumentaries })
}
style={styles.header}
>
<Text style={styles.title}>Documentaries</Text>
<Text style={styles.button}>
  <Icon name="arrow-right" size={20} />
</Text>
</TouchableOpacity> */}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    padding: 10,
  },
  image: {
    flex: 1,
    marginBottom: 5,
    justifyContent: "center",
    height: 250,
  },
  linearGradient: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    color: "cyan",
    paddingHorizontal: 15,
  },
  heading: {
    color: "white",
    fontSize: 25,
    padding: 20,
  },
  box: {
    backgroundColor: boxColor,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
  }
});

export default Main;
