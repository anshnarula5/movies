import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { backgroundColor } from "../../constants";
import Details from "../browse/Details";
import People from "../browse/People";
import Search from "./Search";
const Stack = createStackNavigator();

const SearchHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchHome"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          title: "Search",
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
          headerShown: false,
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
      <Stack.Screen
        name="People"
        component={People}
        options={{
          title: "People",
          headerShown: false,
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

export default SearchHome;
