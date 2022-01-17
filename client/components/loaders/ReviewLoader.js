import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import { backgroundColor } from "../../constants";

const ReviewLoader = () => {
  return (
    <SkeletonContent
      containerStyle={styles.container}
      duration={1000}
      isLoading={true}
      boneColor="rgba(255, 255, 255, .1)"
      highlightColor="rgba(255, 255, 255, .2)"
      animationType="pulse"
      layout={[
        {
          key: "someId",
          height: 45,
          width: 45,
          borderRadius: 50,
          margin: 10,
        },
        {
          key: "someOtherId",
          width: 300,
          height: 40,
          margin: 10,
        },
      ]}
    ></SkeletonContent>
  );
};

export default ReviewLoader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: backgroundColor,
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 65,
    paddingVertical: 10,
    marginVertical : 5
  },
});

