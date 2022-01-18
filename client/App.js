import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Tabs from "./navigation/Tabs";
import Alert from "./components/Alert";
import {backgroundColor} from "./constants";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar animated={true} barStyle="light-content" hidden={false} backgroundColor={backgroundColor} />
      <NavigationContainer theme={{dark : true, colors : {background : backgroundColor}}} >
        <View style={styles.container}>
          <Tabs />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
