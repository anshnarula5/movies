import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import moment from "moment";

const Review = ({ review }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: review.user.profileImage }} style={styles.image} />
      <View style={styles.right}>
        <View style={styles.username}>
          <Text style={styles.text2}>{review.user.name}</Text>
          <Text style={styles.date}>{moment(review.createdAt).fromNow()}</Text>
        </View>
        <Text style={styles.text}>{review.review}</Text>
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
  right: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 320,
    paddingHorizontal: 10,
  },
  username: {
    display: "flex",
    flexDirection: "row",
    justifyContent  : "center",
    alignItems: "center",
    marginBottom: 5,
  },
});
