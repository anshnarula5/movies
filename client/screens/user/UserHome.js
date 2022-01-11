import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
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
        </Stack.Navigator>
      </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "black",
  },
});
