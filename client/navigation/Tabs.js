import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import { BlurView } from "expo-blur";
import User from "../screens/user/User";
import BrowseHome from "../screens/browse/BrowseHome";
import UserHome from "../screens/user/UserHome";
import {useSelector} from "react-redux";
import Alert from "../components/Alert";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {alert} = useSelector(state => state.alert)
  return (
    <>
     {alert.message &&  <Alert />}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#161616",
          tabBarInactiveBackgroundColor: "black",
          tabBarStyle: {
            height: 40,
            backgroundColor: "black",
            borderTopWidth : 0
          },
          tabBarHideOnKeyboard : true
        }}
      >
        <Tab.Screen
          name="Home"
          component={BrowseHome}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home" color={focused ? "cyan" : "white"} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserHome}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="user" color={focused ? "cyan" : "white"} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
