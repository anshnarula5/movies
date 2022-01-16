import {NavigationContainer} from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import List from "./List";
import Details from "./Details";
import Main from "./Main";
import {backgroundColor} from "../../constants";
const Stack = createStackNavigator();

const BrowseHome = () => {
  return (
        <Stack.Navigator
          initialRouteName="Movies"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name="Movies"
            component={Main}
            options={{
              title: "Movies",
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
  );
};

export default BrowseHome;
