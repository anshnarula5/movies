import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const List = ({ route }) => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const url = route.params.url;
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(url);
      setMovies(res.data.results);
    };
    fetchMovies();
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { id: item.id })}
      style={styles.container}
    >
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
        }}
        style={styles.image}
        imageStyle={{ opacity: 0.8 }}
      >
        <Item title={item.title || item.name} />
      </ImageBackground>
    </TouchableOpacity>
  );

  const Item = ({ title }) => (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style = {styles.list}
    />
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
    top: 80,
    fontSize: 30,
    padding: 10,
  },
  image: {
    flex: 1,
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
    marginBottom: 5,
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
    fontSize: 30,
    paddingHorizontal: 15,
    },
    list: {
      backgroundColor : "black"
  }
});

// const navigation = useNavigation()
//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate("Details", {id : item.id})} style={styles.container}>
//       <ImageBackground
//       source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }}
//       style={styles.image}
//       imageStyle={{ opacity: 0.8 }}
//     >
//         <Item title={item.title || item.name} />
//     </ImageBackground>
//     </TouchableOpacity>
//   );

// loading || movies.length === 0 ? (
//   <Text>...loading</Text>
// ) : (
//   <FlatList
//     data={movies}
//     renderItem={renderItem}
//     keyExtractor={(item) => item.id}
//   />
// );

export default List;
