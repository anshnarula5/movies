import React, { useEffect } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { backgroundColor } from "../../constants";
import { fetchPerson } from "../../redux/actions/fetchCast";
import { LinearGradient } from "expo-linear-gradient";
import PersonLoader from "../../components/loaders/PersonLoader";

const People = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { loading, person } = useSelector((state) => state.person);
  useEffect(() => {
    dispatch(fetchPerson(id));
    return dispatch({type : "CLEAR_PERSON"})
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      {loading ? <PersonLoader /> : (
        <View>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/original/${person.profile_path}`,
            }}
            style={styles.image}
          >
            <LinearGradient
              colors={["transparent", backgroundColor]}
              style={styles.gradient}
            >
              <Text style={styles.name}> {person.name}</Text>
            </LinearGradient>
          </ImageBackground>
          <View>
            <Text style={styles.bio}>{person.biography}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  image: {
    marginBottom: 20,
    height: 550,
    display: "flex",
    justifyContent: "flex-end",
  },
  gradient: {
    height: 300,
    display: "flex",
    justifyContent: "flex-end",
  },
  name: {
    color: "white",
    fontSize: 50,
    paddingVertical : 20
  },
  bio: {
    color: "white",
    fontSize: 15,
    paddingHorizontal : 15
  }
});

export default People;
