import { createAppContainer } from 'react-navigation';
import Main from './components/Main';
import Details from './components/Details';
import {createStackNavigator} from '@react-navigation/stack';



const screens = {
  Home: {
    screen: Main,
  },
  Details: {
    screen: Details,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);