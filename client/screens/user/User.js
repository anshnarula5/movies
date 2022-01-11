import {useNavigation} from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import Login from "./Auth";

const User = () => {
  const { loading, userInfo, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigation()
  useEffect(() => {
    dispatch(getUserInfo())
    if (!userInfo) {
      navigate.navigate("Auth")
    }
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User info</Text>
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
