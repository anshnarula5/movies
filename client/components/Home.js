import {NavigationContainer} from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import Details from "./Details";
import List from "./List";
import Main from "./Main";

const Stack = createStackNavigator();

const Home = () => {
  return (
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "#161616",
                shadowOffset: 1,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="Browse"
            component={List}
            options={{
              title: "Browse",
              gestureDirection: "horizontal",
              headerStyle: {
                backgroundColor: "#161616",
                shadowOffset: 1,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              animationEnabled: true,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: "Movie Info",
              gestureDirection: "horizontal",
              headerStyle: {
                backgroundColor: "#161616",
                shadowOffset: 1,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "black",
  },
});
