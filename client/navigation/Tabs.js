import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import Home from "../components/Home";
import { BlurView } from "expo-blur";
import Login from "../components/Login";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#161616",
        tabBarInactiveBackgroundColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" color={focused ? "cyan" : "white"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" color={focused ? "cyan" : "white"} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
