import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogList } from "./screens/BlogList";
import { CreateBlog } from "./screens/CreateBlog";
import { BlogDetail } from "./screens/BlogDetail";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateBlog" component={CreateBlog} />
      <Stack.Screen name="BlogList" component={BlogList} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
