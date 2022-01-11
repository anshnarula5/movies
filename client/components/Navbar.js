import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Movies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "black",
    height: 80,
  },

  text: {
      top: 30,
    fontSize: 25,
      color: "white",
      paddingBottom: 10,
      paddingHorizontal : 150,
    
  },
});

export default Navbar;
