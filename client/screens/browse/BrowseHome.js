import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import List from "./List";
import Details from "./Details";
import Main from "./Main";
import People from "./People";
import DetailsHeader from "../../components/headers/DetailsHeader";
import Icon from "react-native-vector-icons/FontAwesome";
const Stack = createStackNavigator();

const BrowseHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="Movies"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        detachPreviousScreen: false,
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
          title: "",
          headerTintColor: "#fff",
          headerTransparent : true,
          animationEnabled: true,
          // headerRight: () => <Icon name="heart" size={25} color={"red"} />,
        }}
      />
      <Stack.Screen
        name="People"
        component={People}
        options={{
          title: "",
          headerTransparent : true,
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default BrowseHome;
