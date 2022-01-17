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
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import YoutubePlayer from "react-native-youtube-iframe";
import millify from "millify";
import { fetchDetails } from "../../redux/actions/fetchDetails";
import Reviews from "../../components/Reviews";
import { backgroundColor, boxColor } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import DetailsLoader from "../../components/loaders/DetailsLoader";
import {fetchSearchResults} from "../../redux/actions/fetchSearchResults";
const Details = ({ route }) => {
  const [trailerUrl, setTrailerUrl] = useState();
  const { id } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { loading, details } = useSelector((state) => state.movieDetails);
  const trailerHandler = (movie) => {
    movieTrailer(movie?.title || "").then((url) => {
      setTrailerUrl(url.split("v=")[1].substring(0, 11).toString());
    });
  };
  useEffect(() => {
    dispatch(fetchSearchResults("spiderman"));
    dispatch(fetchDetails(id));
  }, [id, dispatch]);
  const handleTrailer = () => {
    trailerHandler(details);
  };
  return loading ? (
    <DetailsLoader />
  ) : (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <>
        {!trailerUrl && (
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`,
            }}
            style={styles.image}
          >
            <LinearGradient
              colors={["transparent", backgroundColor]}
              style={styles.gradient}
            >
              <TouchableOpacity
                onPress={handleTrailer}
                style={{
                  borderWidth: 1,
                  borderColor: boxColor,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  top: 25,
                  left: 300,
                  backgroundColor: boxColor,
                  borderRadius: 50,
                  alignContent: "center",
                  elevation: 25,
                  shadowColor: "black",
                }}
              >
                <Icon name="play" color="white" size={30} />
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        )}

        {trailerUrl && (
          <View style={styles.videoPlayer}>
            <YoutubePlayer
              height={250}
              play={true}
              videoId={trailerUrl}
              onFullScreenChange={true}
            />
          </View>
        )}

        <View style={styles.data}>
          <View style={styles.header}>
            <Text style={styles.heading}>{details.title || details.name} </Text>
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
          <Text style={styles.overview}>{details.overview} </Text>
          <View style={styles.view}>
            <Text style={styles.rating}>{details.vote_average}/10</Text>
          </View>
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
          </View>
          <Text style={styles.castHeading}>Cast</Text>
          <ScrollView horizontal={true} style={styles.cast}>
            {details?.cast?.map(
              (cast) =>
                cast.profile_path && (
                  <TouchableOpacity
                    style={styles.poster}
                    onPress={() =>
                      navigation.navigate("People", { id: cast.id })
                    }
                  >
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${cast.profile_path}`,
                      }}
                      style={styles.castImage}
                    />
                  </TouchableOpacity>
                )
            )}
          </ScrollView>
          {/* <Text style={styles.castHeading}>Clips/Videos</Text>
          <ScrollView horizontal={true} style={styles.cast}>
            {details?.clips?.map(
              (clip) =>
                clip.key && (
                  <View style={{marginHorizontal : 10}}>
                    <YoutubePlayer
                      height={100}
                      width={200}
                      play={false}
                      videoId={clip.key}
                    />
                  </View>
                )
            )}
          </ScrollView> */}
        </View>
      </>
      <Reviews tmdbId={id} />
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
    backgroundColor: backgroundColor,
    flex: 1,
  },
  button: {
    borderColor: "cyan",
    marginBottom: 20,
    borderWidth: 1,
  },
  image: {
    marginBottom: 20,
    height: 250,
    display: "flex",
    justifyContent: "flex-end",
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
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  data: {
    paddingHorizontal: 15,
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
    color: "white",
    backgroundColor: boxColor,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 6,
    marginBottom: 6,
    elevation: 10,
    shadowColor: "black",
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
  poster: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  castImage: {
    justifyContent: "center",
    height: 150,
    width: 100,
  },
  castHeading: {
    fontSize: 25,
    color: "cyan",
    paddingVertical: 10,
  },
  gradient: {
    height: 100,
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default Details;
