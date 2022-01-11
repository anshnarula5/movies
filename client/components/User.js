import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/actions/userActions";
import Login from "./Login";

const User = () => {
  const { loading, userInfo, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="cyan" />
        </View>
      ) : error ? (
        <Text style={styles.header}>{error}</Text>
      ) : userInfo ? (
        <View >
          <Text style={styles.header}>User info</Text>
        </View>
      ) : (
        <Login />
      )}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "cyan",
    fontSize: 20,
  },
});
