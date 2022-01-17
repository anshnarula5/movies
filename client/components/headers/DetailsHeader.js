import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const DetailsHeader = () => {
  return (
    <View style={styles.container}>
      <Text>HELLO</Text>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    width: 400,
    right: 70,
  },
});
