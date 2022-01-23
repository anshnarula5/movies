import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { boxColor } from "../constants";

const Empty = ({ text }) => {
  return (
    <View style={styles.container}>
      <Icon name="emoji-sad" size={50} color="white" />
      <Text style={{color : "white", fontSize : 20}}>Such Emptiness</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    height: 200,
    backgroundColor: boxColor,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
});
