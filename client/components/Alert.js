import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Alert = () => {
  const { alert } = useSelector((state) => state.alert);
  return (
    <>
      {alert && alert.message && alert.type === "success" ? (
        <View style={styles.success}>
          <Text style={styles.text}>{alert.message}</Text>
        </View>
      ) : (
        <View style={styles.danger}>
          <Text style={styles.text}>{alert.message}</Text>
        </View>
      )}
    </>
  );
};

export default Alert;

const styles = StyleSheet.create({
  success: {
    flex: 1,
    backgroundColor: "#5cb85c",
    position: "absolute",
    zIndex: 10,
    borderRadius: 3,
    alignSelf: "center",
    top: 30,
    margin: 10,
  },
  danger: {
    flex: 1,
    backgroundColor: "#ff4444",
    position: "absolute",
    zIndex: 10,
    borderRadius: 3,
    alignSelf: "center",
    top: 30,
    margin: 10,
  },
  text: {
    color: "white",
    padding: 10,
    fontSize : 15
  },
});
