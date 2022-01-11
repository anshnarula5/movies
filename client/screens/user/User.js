import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";

const User = () => {
  const { loading, userInfo, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  useEffect(() => {
    console.log(userInfo)
  }, [userInfo]);
  return (
    <View style={styles.container}>
      {!userInfo ? (
        <TouchableOpacity onPress={() => navigate.navigate("Auth")}>
          <Text style={styles.header}>Login</Text>
        </TouchableOpacity>
      ) : (
        <Text>HELLO</Text>
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
