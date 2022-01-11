import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="neon" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
