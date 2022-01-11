import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import Tabs from "./navigation/Tabs";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar animated={true} barStyle="light-content" hidden={false} />
      <NavigationContainer>
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
    paddingHorizontal: 5,
    backgroundColor: "black",
  },
});
