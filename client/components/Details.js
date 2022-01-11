import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../redux/actions/fetchDetails";
import YoutubePlayer from "react-native-youtube-iframe";
import millify from "millify";
import Reviews from "./Reviews";
const Details = ({ route }) => {
  const [trailerUrl, setTrailerUrl] = useState();
  const { id } = route.params;
  const dispatch = useDispatch();
  const { loading, details } = useSelector((state) => state.movieDetails);
  const trailerHandler = (movie) => {
    movieTrailer(movie?.title || "").then((url) => {
      setTrailerUrl(url.split("v=")[1].substring(0, 11).toString());
      console.log(url.split("v=")[1].substring(0, 11).toString());
    });
  };
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id, dispatch]);
  const handleTrailer = () => {
    trailerHandler(details);
  };
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="neon" />
        </View>
      ) : (
        <>
          {/* <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`,
            }}
            style={styles.image}
          /> */}

          {!trailerUrl && (
              <ImageBackground
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`,
                }}
                style={styles.image}
              >
                {/* <TouchableOpacity style={styles.button2}>
                  <Button
                    title="Watch Trailer"
                    onPress={handleTrailer}
                    color="black"
                  />
                </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={handleTrailer}
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    top: 125,
                    left: 300,
                    backgroundColor: "#161616",
                    borderRadius: 50,
                    alignContent : "center"
                  }}
                >
                  <Icon name="play" color="#00ffff" size={30} />
                </TouchableOpacity>
              </ImageBackground>
          )}
          {trailerUrl && (
            <View>
              <YoutubePlayer height={200} play={true} videoId={trailerUrl} />
            </View>
          )}

          <View style={styles.data}>
            <View style={styles.header}>
              <Text style={styles.heading}>
                {details.title || details.name}
              </Text>
              <Text style={styles.text}>{details.release_date} </Text>
            </View>
            <Text style={styles.text}>
              {details.runtime} m |{" "}
              {(details?.spoken_languages &&
                details?.spoken_languages.length > 0 &&
                details?.spoken_languages[0]?.english_name) ||
                ""}{" "}
            </Text>
            <View style={styles.genres}>
              {details.genres &&
                details.genres.length > 0 &&
                details.genres.map((genre) => (
                  <Text key={Math.random()} style={styles.genre}>
                    {genre.name}
                  </Text>
                ))}
            </View>
            <Text style={styles.overview}>
              {details.overview}{" "}
              {/* <a href={details?.homepage}>
                <Text style={styles.text2}>See more</Text>
              </a>{" "} */}
            </Text>
            <View style={styles.view}>
              <Text style={styles.rating}>{details.vote_average}/10</Text>
            </View>
            {/* 
            {!trailerUrl && (
              <View style={styles.button}>
                <Button
                  title="Watch Trailer"
                  onPress={handleTrailer}
                  color="black"
                />
              </View>
            )}
            {trailerUrl && (
              <View style={styles.button}>
                <YoutubePlayer height={200} play={true} videoId={trailerUrl} />
              </View>
            )} */}
            <View style={styles.info}>
              <View>
                <View style={styles.view}>
                  <Text style={styles.text}>
                    Budget :{" "}
                    <Text style={styles.text2}>
                      $ {details.budget && millify(details.budget)}{" "}
                    </Text>
                  </Text>
                </View>
                <View style={styles.view}>
                  <Text style={styles.text}>
                    Revenue :{" "}
                    <Text style={styles.text2}>
                      $ {details.revenue && millify(details.revenue)}{" "}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.view}>
                <Text style={styles.text2}>Production Companies</Text>
                {details?.production_companies &&
                  details?.production_companies.length > 0 &&
                  details?.production_companies?.map(
                    (c) =>
                      c.logo_path && (
                        <Image
                          key={Math.random()}
                          style={styles.logo}
                          resizeMode="contain"
                          source={{
                            uri: `https://image.tmdb.org/t/p/w200${c.logo_path}`,
                          }}
                        />
                      )
                    )}
                  {/* <Text style={styles.text2}>{c.name}</Text> */}
              </View>
            </View>
          </View>
        </>
      )}
      <Reviews tmdbId = {id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  text2: {
    color: "cyan",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  button: {
    borderColor: "cyan",
    marginBottom: 20,
    borderWidth: 1,
  },
  image: {
    marginBottom: 20,
    justifyContent: "center",
    height: 250,
  },
  logo: {
    minHeight: 50,
    marginVertical: 10,
  },
  heading: {
    color: "white",
    fontSize: 30,
  },
  overview: {
    color: "white",
    marginVertical: 10,
    fontSize: 15,
  },
  data: {
    paddingHorizontal: 10,
  },
  rating: {
    color: "cyan",
    fontSize: 20,
  },
  header: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  genre: {
    color: "cyan",
    borderColor: "cyan",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 6,
  },
  genres: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    marginVertical: 10,
  },
  button2: {
    borderRadius: 1,
    width: 100,
    height: 100,
  },
});

export default Details;
