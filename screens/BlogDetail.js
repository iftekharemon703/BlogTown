import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  View,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const BlogDetail = (props) => {
  const initialState = {
    id: "",
    title: "",
    description: "",
  };

  const [blog, setBlog] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setBlog({ ...blog, [prop]: value });
  };

  const getBlogById = async (id) => {
    const dbRef = firebase.db.collection("blogs").doc(id);
    const doc = await dbRef.get();
    const blog = doc.data();
    setBlog({ ...blog, id: doc.id });
    setLoading(false);
  };

  const deleteBlog = async () => {
    setLoading(true);
    const dbRef = firebase.db
      .collection("blogs")
      .doc(props.route.params.blogId);
    await dbRef.delete();
    setLoading(false);
    props.navigation.navigate("BlogList");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the Blog",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteBlog() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateBlog = async () => {
    const blogRef = firebase.db.collection("blogs").doc(blog.id);
    await blogRef.set({
      title: blog.title,
      description: blog.description,
    });
    setBlog(initialState);
    props.navigation.navigate("BlogList");
  };

  useEffect(() => {
    getBlogById(props.route.params.blogId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Title"
          autoCompleteType="blogTitle"
          style={styles.inputGroup}
          value={blog.title}
          onChangeText={(value) => handleTextChange(value, "title")}
        />
      </View>
      <View>
        <TextInput
          autoCompleteType="Description"
          placeholder="Blog Description"
          style={styles.inputGroup}
          value={blog.description}
          onChangeText={(value) => handleTextChange(value, "description")}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Update" onPress={() => updateBlog()} color="#19AC52" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 7,
  },
});

export default BlogDetail;
