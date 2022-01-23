import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from "@react-native-async-storage/async-storage";

let userInfoFromStorage

const getData = async () => {
  userInfoFromStorage = await AsyncStorage.getItem("userInfo")
}

getData()

const initialState = {
  userInfo : userInfoFromStorage
}
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store