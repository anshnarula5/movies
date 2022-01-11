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
import requests from "../request";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const Main = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchTrending })
        }
        style={styles.header}
      >
        <Text style={styles.title}>Trending</Text>
        <Text style={styles.button}><Icon name = "arrow-right" size={20} /></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchTopRated })
        }
        style={styles.header}
      >
        <Text style={styles.title}>Top Rated</Text>
        <Text style={styles.button}><Icon name = "arrow-right" size={20} /></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchActionMovies })
        }
        style={styles.header}
      >
        <Text style={styles.title}>Action </Text>
        <Text style={styles.button}><Icon name = "arrow-right" size={20} /></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchComedyMovies })
        }
        style={styles.header}
      >
        <Text style={styles.title}>Comedy</Text>
        <Text style={styles.button}><Icon name = "arrow-right" size={20} /></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchHorrorMovies })
        }
        style={styles.header}
      >
        <Text style={styles.title}>Horror</Text>
        <Text style={styles.button}><Icon name = "arrow-right" size={20} /></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchRomanceMovies })
        }
        style={styles.header}
      >
        <Text style={styles.title}>Romance</Text>
        <Text style={styles.button}><Icon name = "arrow-right" size={20} /></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Browse", { url: requests.fetchDocumentaries })
        }
        style={styles.header}
      >
        <Text style={styles.title}>Documentaries</Text>
        <Text style={styles.button}><Icon name = "arrow-right" size={20} /></Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
    backgroundColor: "black",
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
});

export default Main;
