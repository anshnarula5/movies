import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
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
import { backgroundColor, boxColor } from "../../constants";
import {
  fetchSearchMovieResults,
  fetchSearchPeopleResults,
} from "../../redux/actions/fetchSearchResults";
import Icon from "react-native-vector-icons/AntDesign";

const History = ({ history, handleSearch }) => {
  return (
    <>
      <Text style={styles.header}>History</Text>
      <View style={styles.history}>
        {history &&
          history.length > 0 &&
          history.map((h) => (
            <TouchableOpacity
              style={styles.tag}
              onPress={() => handleSearch(h)}
              key={Math.random()}
            >
              <Text style={styles.searchTerm}>{h}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

const Search = () => {
  const Movie = ({ movie }) => {
    return (
      movie.poster_path && (
        <TouchableOpacity
          style={styles.poster}
          onPress={() => {
            navigation.navigate("Search Details", { id: movie.id });
            setKeyword("");
            setHistory((prev) => [movie.name || movie.title, ...prev]);
          }}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      )
    );
  };
  const Person = ({ p }) => {
    return (
      p.profile_path && (
        <TouchableOpacity
          style={styles.poster}
          onPress={() => {
            navigation.navigate("People", { id: p.id });
            setKeyword("");
            setHistory((prev) => [p.name, ...prev]);
          }}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${p.profile_path}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      )
    );
  };
  const [keyword, setKeyword] = useState("");
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { loading, movies } = useSelector((state) => state.searchMovie);
  const { loading: peopleLoading, people } = useSelector(
    (state) => state.searchPeople
  );
  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(fetchSearchMovieResults(keyword));
      dispatch(fetchSearchPeopleResults(keyword));
    }, 300);
    return () => clearTimeout(delay);
  }, [keyword]);
  useEffect(() => {
    const saveHistory = async () => {
      await AsyncStorage.setItem("history", JSON.stringify(history));
    };
    saveHistory();
    getHistory();
  }, []);
  const getHistory = async () => {
    const h = await AsyncStorage.getItem("history");
    setHistory(JSON.parse(h));
  };
  const handleSearch = (term) => {
    setKeyword(term);
  };
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <TouchableOpacity onPress={() => setKeyword("")} style={styles.clear}>
        <Icon name="delete" size={30} color={"white"} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"white"}
        onChangeText={(e) => setKeyword(e)}
        value={keyword}
      ></TextInput>
      {!keyword ? (
        <History history={history} handleSearch={handleSearch} />
      ) : (
        <>
          <Text style={styles.header}>All movies</Text>
          {loading ? (
            <PosterLoader />
          ) : (
            <FlatList
              horizontal={true}
              data={movies}
              renderItem={({ item }) => <Movie movie={item} />}
              keyExtractor={(item) => item.id}
            />
          )}
          <Text style={styles.header}>All People</Text>
          {peopleLoading ? (
            <PosterLoader />
          ) : (
            <FlatList
              horizontal={true}
              data={people}
              renderItem={({ item }) => <Person p={item} />}
              keyExtractor={(item) => item.id}
            />
          )}
        </>
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
  tag: {
    padding: 5,
    backgroundColor: boxColor,
    marginRight: 6,
    marginBottom: 6,
    elevation: 15,
    borderRadius: 5,
  },
  history: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  searchTerm: {
    color: "white",
    padding: 4,
    fontSize: 15,
  },
  clear: {
    position: "absolute",
    left: 325,
    elevation: 15,
    top: 28,
  },
});
