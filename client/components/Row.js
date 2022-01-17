import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Row = ({url}) => {
  const navigation = useNavigation()
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(url)
      setMovies(res.data.results)
    }
    fetchMovies()
  }, [])
  return (
    <ScrollView horizontal={true} scroll>
      {movies.map((movie) => (
        <TouchableOpacity style={styles.poster} onPress={() => navigation.navigate("Details", {id : movie.id})}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    height: 200,
    width: 150,
  },
  poster: {
    margin: 10,
    elevation: 10,
    shadowColor : "black",
  },
});

export default Row;
