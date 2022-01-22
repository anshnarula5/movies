import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import PosterLoader from "./loaders/PosterLoader";

const Poster = ({ movie }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.poster}
      onPress={() => navigation.navigate("Details", { id: movie.id })}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.image}`,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
    // <Text style={styles.heading}>{movie.name}</Text>
  );
};

const MyMovies = ({ favourites, watchlist }) => {
  return (
    <>
      <Text style={styles.heading}>My Favourites </Text>
      {
        <FlatList
          horizontal={true}
          data={favourites}
          renderItem={({ item }) => <Poster movie={item} />}
          keyExtractor={(item) => item.id}
        />
      }
      <Text style={styles.heading}>My Watchlist </Text>
      {
        <FlatList
          horizontal={true}
          data={watchlist}
          renderItem={({ item }) => <Poster movie={item} />}
          keyExtractor={(item) => item.id}
        />
      }
    </>
  );
};

export default MyMovies;

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 25,
    padding: 10,
    alignSelf: "center",
  },
  image: {
    justifyContent: "center",
    height: 200,
    width: 150,
  },
  poster: {
    marginVertical: 10,
    marginHorizontal: 5,
    elevation: 15,
    shadowColor: "black",
  },
});
