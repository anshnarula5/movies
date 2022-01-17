import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import { backgroundColor } from "../../constants";

const PersonLoader = () => {
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
          width: 360,
          height: 400,
          margin: 10,
        },
        {
          key: "someOtherId",
          width: 360,
          height: 200,
          margin: 10,
        },
      ]}
    ></SkeletonContent>
  );
};

export default PersonLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: backgroundColor,
    display: "flex",
    alignContent: "center",
  },
});
