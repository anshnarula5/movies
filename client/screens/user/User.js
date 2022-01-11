import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import {LOGOUT} from "../../redux/types";

const User = () => {
  const { loading, userInfo, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleLogout = () => {
    dispatch({type : LOGOUT})
  }
  return (
    <View style={styles.container}>
      {!userInfo ? (
        <TouchableOpacity onPress={() => navigate.navigate("Auth")}>
          <Text style={styles.header}>Login</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Image source={{ uri: userInfo.profileImage }} style={styles.image} />
          <Text style={styles.header}>{userInfo.name}</Text>
          <Text style={styles.text}>{userInfo.email}</Text>
            <View style={styles.button}>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        </>
      )}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "cyan",
    fontSize: 30,
    marginVertical: 15,
  },
  image: {
    justifyContent: "center",
    height: 150,
    width: 150,
    borderRadius: 80,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  button: {
    marginVertical : 15
  }
});
