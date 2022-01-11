import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {useDispatch} from "react-redux"
import {login} from "../redux/actions/userActions";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const handleLogin = () => {
    dispatch(login({email, password}))
    console.log("HI")
  }
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
      }}
      resizeMode="cover"
      imageStyle={{ opacity: 0.8 }}
      style={styles.container}
    >
      <View style={styles.form}>
        <Text style={styles.header}>{isLogin ? "Login" : "Sign Up"}{email}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="grey"
          value={email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            placeholderTextColor="grey"
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="grey"
          value={password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

export default Login;

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
