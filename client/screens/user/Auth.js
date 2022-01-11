import React, { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../redux/actions/userActions";
import Loader from "../../components/Loader";

const Auth = () => {
  const { loading, userInfo, error } = useSelector((state) => state.login);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleLogin = () => {
    console.log(email)
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo)
      navigate.navigate("Profile");
    }
  }, [userInfo]); 
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
      }}
      resizeMode="cover"
      imageStyle={{ opacity: 0.8 }}
      style={styles.container}
    >
      {loading ? (
        <Loader />
      ) : (
        error && <Text style={styles.header}>{error}</Text>
      )}
      <View style={styles.form}>
        <Text style={styles.header}>
          {isLogin ? "Login" : "Sign Up"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={(e) => setFormData({ ...formData, email: e})}
        />
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            placeholderTextColor="grey"
            value={name}
            onChangeText={(e) => setFormData({ ...formData, name: e })}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="grey"
          value={password}
          onChangeText={(e) =>
            setFormData({ ...formData, password: e })
          }
        />
        <View style={styles.toggle}>
          <Text style={styles.text}>
            Don't have an account ?{" "}
            <Text style={styles.text2} onPress={() => setIsLogin(!isLogin)}>
              Sign {isLogin ? "Up" : "In"}
            </Text>
          </Text>
        </View>
        <View style={styles.button}>
          {isLogin ? (
            <Button title="Login" color="black" onPress={handleLogin} />
          ) : (
            <Button title="Sign Up" color="black" />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Auth;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  text2: {
    color: "cyan",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    padding: 20,
  },
  form: {
    justifyContent: "center",
    borderRadius: 20,
    display: "flex",
    justifyContent: "space-evenly",
    height: "70%",
    width: "70%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "cyan",
    color: "white",
    margin: 10,
  },
  toggle: {
    textAlign: "center",
    margin: 20,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
  },
});
