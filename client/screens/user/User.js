import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system'
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImagePickerManager,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { getUserInfo } from "../../redux/actions/userActions";
import { LOGOUT } from "../../redux/types";

const getFileInfo = async (fileURI) => {
  const fileInfo = await FileSystem.getInfoAsync(fileURI);
  return fileInfo;
};

const isLessThanTheMB = (fileSize, smallerThanSizeMB) => {
  const isOk = fileSize / 1024 / 1024 < smallerThanSizeMB;
  return isOk;
};

const User = () => {
  const { loading, userInfo, error } = useSelector((state) => state.login);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [newImage, setNewImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };
  useEffect(() => {
    getUserInfo()
  },[])
  const upload = async (image) => {
    const fd = new FormData();
    fd.append("image", {
      name: new Date() + "_profile",
      uri: image,
      type: "image/jpg",
    });
    setUploading(true);
    try {
      const userInfo = await AsyncStorage.getItem("userInfo");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${JSON.parse(userInfo).token}`,
        },
        Accept: "application/json",
        onUploadProgress: ({ loaded, total }) =>
          setProgress((loaded / total) * 100),
      };
      const res = await axios.post(
        "https://guarded-bayou-79443.herokuapp.com/api/upload",
        fd,
        config
      );
      setNewImage(res.data);
      setUploading(false);
      dispatch(
        setAlert({ message: "Profile image changed!", type: "success" })
      );
    } catch (e) {
      console.log(e);
      setUploading(false);
    }
  };
  const handleUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const fileInfo = await getFileInfo(result.uri);
  
    const isLt15MB = isLessThanTheMB(fileInfo.size, 10);
    console.log(fileInfo.size/1024 / 1024)
    if (!isLt15MB) {
      alert(`Image size must be smaller than 10MB!`);
      return;
    }
    upload(result.uri);
  };
  return (
    <View style={styles.container}>
      {!userInfo ? (
        <TouchableOpacity onPress={() => navigate.navigate("Auth")}>
          <Text style={styles.header}>Login</Text>
        </TouchableOpacity>
      ) : (
        <>
          {uploading ? (
            <View style={styles.loader}>
              <Text style={styles.progress}>{progress.toFixed(2)} %</Text>
              <ActivityIndicator size="large" color="cyan" />
            </View>
          ) : (
            <Image
              source={{ uri: newImage ? newImage : userInfo.profileImage }}
              style={styles.image}
            />
          )}

          <Text style={styles.header}>{userInfo.name}</Text>
          <Text style={styles.text}>{userInfo.email}</Text>
          <View style={styles.button}>
            <Button title="Logout" onPress={handleLogout} />
          </View>
          <View style={styles.button}>
            <Button title="Change profile image" onPress={handleUpload} />
          </View>
        </>
      )}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  loader: {
    justifyContent: "center",
  },
  header: {
    color: "cyan",
    fontSize: 30,
    marginVertical: 15,
  },
  progress: {
    color: "cyan",
    fontSize: 20,
    marginVertical: 15,
  },
  image: {
    justifyContent: "center",
    height: 150,
    width: 150,
    borderRadius: 80,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  button: {
    marginVertical: 15,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
