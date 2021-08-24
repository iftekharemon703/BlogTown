import React, { useState } from "react";
import { Button, ScrollView, TextInput, View, StyleSheet } from "react-native";

export const CreateBlog = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const handleChangeText = (value, title) => {
    setState({ ...state, [title]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Blog Title"
          onChangeText={(value) => handleChangeText("title", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.description}
          placeholder="Blog Description"
          onChangeText={(value) => handleChangeText("description", value)}
        />
      </View>
      <View>
        <Button
          color="#2c3c50"
          title="Add Blog"
          onPress={() => console.log(state)}
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
    marginBottom: 40,
  },
});

export default CreateBlog;
