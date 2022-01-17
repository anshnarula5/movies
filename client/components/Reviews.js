import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createReview, getReviews } from "../redux/actions/reviewActions";
import Review from "./Review";
import Icon from "react-native-vector-icons/FontAwesome";
import { setAlert } from "../redux/actions/alert";
import ReviewLoader from "./loaders/ReviewLoader";

const Reviews = ({ tmdbId }) => {
  const { userInfo } = useSelector((state) => state.login);
  const {
    loading: uploadLoading,
    success,
    error: uploadError,
  } = useSelector((state) => state.createReview);
  const [showInput, setShowInput] = useState(false);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const { loading, reviews, error } = useSelector((state) => state.getReviews);
  useEffect(() => {
    dispatch(getReviews(tmdbId));
  }, [success]);

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
  const handleSend = () => {
    setReview("");
    if (review.trim().length < 10) {
      dispatch(
        setAlert({
          message: "Review should be atleast 10 characters long",
          type: "danger",
        })
      );
    } else {
      dispatch(createReview({ review, tmdbId }));
    }
  };
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.heading}>Reviews</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddReview}>
          <Icon name={showInput ? "close" : "plus"} color="cyan" size={20} />
        </TouchableOpacity>
      </View>
      {showInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new review"
            multiline
            value={review}
            placeholderTextColor="grey"
            onChangeText={(text) => setReview(text)}
          />
          <Button
            style={styles.send}
            onPress={handleSend}
            title="send"
          ></Button>
        </View>
      )}
      {loading ? (
        <>
          <ReviewLoader />
          <ReviewLoader />
          <ReviewLoader />
        </>
      ) : reviews.length > 0 ? (
        <View>
          {reviews.map((review) => (
            <Review review={review} key={Math.random()} />
          ))}
        </View>
      ) : (
        <Text style={styles.message}>Be the first one to review</Text>
      )}
      {/* <FlatList
        data={reviews}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Review review={item} />}
      /> */}
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
  message: {
    fontSize: 20,
    color: "cyan",
    paddingHorizontal : 10
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
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
