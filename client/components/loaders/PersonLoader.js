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
          height: 250,
          margin: 10,
        },
        {
          key: "someOtherId",
          width: 180,
          height: 40,
          margin: 10,
        },
        {
          key: "someOtherId1",
          width: 360,
          height: 20,
          margin: 10,
        },
        {
          key: "someOtherId2",
          width: 360,
          height: 70,
          margin: 10,
        },
        {
          key: "someOtherId3",
          width: 300,
          height: 20,
          margin: 10,
        },
        {
          key: "someOtherId4",
          width: 200,
          height: 30,
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
