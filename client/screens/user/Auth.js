import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { login, register } from "../../redux/actions/userActions";
import Loader from "../../components/Loader";
import { setAlert } from "../../redux/actions/alert";
import { backgroundColor, boxColor } from "../../constants";

const Auth = () => {
  const { loading, userInfo, error } = useSelector((state) => state.login);
  const { loading: registerLoading, error: registerError } = useSelector(
    (state) => state.register
  );
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
    dispatch(login({ email, password }));
  };
  const handleRegister = () => {
    dispatch(register({ email, password, name }));
  };
  useEffect(() => {
    if (error) {
      dispatch(setAlert({ message: error, type: "danger" }));
    }
    if (userInfo) {
      dispatch(
        setAlert({ message: `Welcome ${userInfo.name}`, type: "success" })
      );
      navigate.navigate("Profile");
    }
  }, [userInfo, error]);
  useEffect(() => {
    if (registerError) {
      dispatch(setAlert({ message: registerError, type: "danger" }));
    }
  }, [registerError]);
  return (
    <View style={styles.container}>
      {loading || (registerLoading && <Loader />)}
      <View style={styles.form}>
        <Text style={styles.header}>{isLogin ? "Login" : "Sign Up"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          autoCapitalize="none"
          placeholderTextColor="grey"
          value={email}
          keyboardType="email-address"
          onChangeText={(e) => setFormData({ ...formData, email: e })}
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
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setFormData({ ...formData, password: e })}
        />
          {isLogin ? (
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleRegister} style={styles.button}>
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          )}
        <View style={styles.toggle}>
          {isLogin ? (
            <Text style={styles.text}>Don't have an account ?</Text>
          ) : (
            <Text style={styles.text}>Already have an account ?</Text>
          )}
        </View>
        <TouchableOpacity style={styles.button2}  onPress={() => setIsLogin(!isLogin)}>
          {!isLogin ? (
              <Text style={styles.text}>Login</Text>
          ) : (
              <Text style={styles.text}>Sign Up</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 15,
  },
  text2: {
    color: boxColor,
  },
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  form: {
    display: "flex",
    justifyContent: "space-evenly",
    height: "70%",
    width: "70%",
  },
  input: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: boxColor,
    color: "white",
    margin: 10,
  },
  toggle: {
    textAlign: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: boxColor,
    padding: 12,
    borderRadius: 15,
    marginVertical: 8,
  },
  button2: {
    alignItems: "center",
    backgroundColor: backgroundColor,
    padding: 2,
    borderRadius: 15,
    borderColor: boxColor,
    borderWidth: 2,
    marginVertical: 8,
    padding: 12,
  },
  image: {
    justifyContent: "center",
    width: 300,
    height: 200,
  },
});
