import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../redux/actions/reviewActions";
import Review from "./Review";
import Icon from "react-native-vector-icons/FontAwesome";
import { setAlert } from "../redux/actions/alert";

const Reviews = ({ tmdbId }) => {
  const { userInfo } = useSelector((state) => state.login);
  const [showInput, setShowInput] = useState(false);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const { loading, reviews, error } = useSelector((state) => state.getReviews);
  useEffect(() => {
    dispatch(getReviews(1));
  }, []);
  const handleAddReview = () => {
    if (userInfo) {
      setShowInput(!showInput);
    } else {
      dispatch(
        setAlert({
          message: "You need to login first to review a movie",
          type: "danger",
        })
      );
    }
  };
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="cyan" />
    </View>
  ) : error ? (
    <Text style={styles.loader}>{error}</Text>
  ) : (
    <View>
      <View style={styles.header}>
        <Text style={styles.heading}>Reviews{}</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddReview}>
          <Icon name={showInput ? "close" : "plus"} color="cyan" size={20} />
        </TouchableOpacity>
      </View>
      {showInput && (
        <TextInput
          style={styles.input}
          placeholder="Add new review"
          multiline
          placeholderTextColor="grey"
          onChangeText={(text) => setReview(text)}
        />
      )}
      {/* <View>
        {reviews.map((review) => (
          <Review review={review} key={Math.random()} />
        ))}
          </View> */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Review review={item} />}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 25,
    color: "cyan",
  },
  button: {
    backgroundColor: "#161616",
    padding: 10,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: "cyan",
    color: "white",
    marginHorizontal: 10,
    marginBottom: 10,
    flex: 1,
  },
});
