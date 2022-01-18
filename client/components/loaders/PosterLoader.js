import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import { backgroundColor } from "../../constants";

const PosterLoader = () => {
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
          height: 200,
          width: 150,
          marginVertical: 10,
          marginHorizontal: 5,
        },
        {
          key: "someOtherId",
          height: 200,
          width: 150,
          marginVertical: 10,
          marginHorizontal: 5,
        },
        {
          key: "someOtherId1",
          height: 200,
          width: 150,
          marginVertical: 10,
          marginHorizontal: 5,

        },
      ]}
    ></SkeletonContent>
  );
};

export default PosterLoader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: backgroundColor,
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
  },
});
