import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, ScrollView } from "react-native";
import firebase from "../database/firebase";

const CreateBlog = (props) => {
  const initialState = {
    title: "",
    description: "",
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (value, title) => {
    setState({ ...state, [title]: value });
  };

  const createNewBlog = async () => {
    if (state.title === "") {
      alert("please provide a title");
    } else {
      try {
        await firebase.db.collection("blogs").add({
          title: state.title,
          description: state.description,
        });

        props.navigation.navigate("BlogsList");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* title Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Title"
          onChangeText={(value) => handleChangeText(value, "title")}
          value={state.title}
        />
      </View>

      {/* Description Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Description"
          multiline={true}
          numberOfLines={5}
          onChangeText={(value) => handleChangeText(value, "description")}
          value={state.description}
        />
      </View>

      <View>
        <Button
          color="#2c3e50"
          title="Create Blog"
          onPress={() => createNewBlog()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  description: {
    paddingBottom: 15,
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
});

export default CreateBlog;
