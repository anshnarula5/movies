import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import {setAlert} from "../redux/actions/alert";
import {likeReview} from "../redux/actions/reviewActions";

const Review = ({ review }) => {
  const dispatch = useDispatch()
  const {
    userInfo: user,
    loading,
    error,
  } = useSelector((state) => state.login);
  const {success} = useSelector(state => state.likeReview)
  const [like, setLike] = useState(0);
  const [likes, setLikes] = useState(review.likes.length);
  useEffect(() => {
    if (user) {
      setLike(review.likes.find((like) => like.user === user._id));
    } else {
      setLike(0);
    }
  }, [user]);
  const handleLike = () => {
    if (!user) {
      dispatch(setAlert({message : "Login to like a review", type :"danger"}))
    } else {
      dispatch(likeReview(review._id))
      setLike(prev => !prev)
      if (!like) {
        setLikes(prev => prev + 1)
      } else {
        setLikes(prev =>prev -1)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: review.user.profileImage }} style={styles.image} />
      <View style={styles.review}>
        <View style={styles.username}>
          <Text style={styles.text2}>{review.user.name}</Text>
          <Text style={styles.date}>{moment(review.createdAt).fromNow()}</Text>
        </View>
        <Text style={styles.text}>{review.review}</Text>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={handleLike}>
          {like ? (
            <Icon name="like1" color="cyan" size={25} />
          ) : (
            <Icon name="like2" color="cyan" size={25} />
          )}
        </TouchableOpacity>
        <Text style={styles.likesCount}>{likes} likes</Text>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 15,
  },
  likesCount: {
    color: "cyan",
    fontSize: 10,
  },
  date: {
    color: "white",
    fontSize: 10,
    paddingHorizontal: 8,
  },
  text2: {
    color: "cyan",
    fontSize: 15,
  },
  container: {
    borderBottomColor: "cyan",
    borderBottomWidth: 1,
    minHeight: 50,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    justifyContent: "center",
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  review: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  username: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  likeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
