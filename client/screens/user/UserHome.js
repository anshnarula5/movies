import {useNavigation} from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React, {useEffect} from "react";
import { StyleSheet, View } from "react-native";
import Details from "../browse/Details";
import Auth from "./Auth";
import User from "./User";

const Stack = createStackNavigator();

const UserHome = () => {
  
  return (
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name="Profile"
            component={User}
            options={{
              title: "Profile",
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
            name="Auth"
            component={Auth}
            options={{
              title: "Auth",
              gestureDirection: "horizontal",
              headerShown : false,
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
        name="MyMovieDetails"
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
        </Stack.Navigator>
      </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
