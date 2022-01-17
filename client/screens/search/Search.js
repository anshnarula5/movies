import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PosterLoader from "../../components/loaders/PosterLoader";
import { backgroundColor } from "../../constants";
import { fetchSearchResults } from "../../redux/actions/fetchSearchResults";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { loading, movies } = useSelector((state) => state.searchMovie);
  const { loading : peopleLoading, people } = useSelector((state) => state.searchPeople);
  useEffect(() => {
    dispatch(fetchSearchResults(keyword));
    !loading && console.log(movies);
  }, [keyword]);
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"white"}
        onChangeText={(e) => setKeyword(e)}
      />
      <Text style={styles.header}>All movies</Text>
      {!keyword ? (
        <Text>Preovious searches</Text>
      ) : loading || peopleLoading ? (
        <PosterLoader />
      ) : (
        <ScrollView horizontal={true}>
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <TouchableOpacity
                  style={styles.poster}
                  onPress={() =>
                    navigation.navigate("Details", { id: movie.id })
                  }
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                    }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              )
          )}
        </ScrollView>
      )}
      <Text style={styles.header}>All People</Text>
      {!keyword ? (
        <Text>Preovious searches</Text>
      ) : loading || peopleLoading ? (
        <PosterLoader />
      ) : (
        <ScrollView horizontal={true}>
          {people.map(
            (p) =>
              p.profile_path && (
                <TouchableOpacity
                  style={styles.poster}
                  onPress={() => navigation.navigate("People", { id: p.id })}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${p.profile_path}`,
                    }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              )
          )}
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#21374f",
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 20,
    color: "white",
    elevation: 15,
  },
  header: {
    fontSize: 25,
    color: "white",
    padding: 10,
  },
  image: {
    justifyContent: "center",
    height: 200,
    width: 150,
  },
  poster: {
    margin: 10,
    elevation: 15,
    shadowColor: "black",
  },
});
