import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import { StatusBar } from "expo-status-bar";
import CreateBlog from "./screens/CreateBlog";
import BlogList from "./screens/BlogList";
import BlogDetail from "./screens/BlogDetail";

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#341f97",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="CreateBlog"
        component={CreateBlog}
        options={{ title: "Write Your Blog Here" }}
      />
      <Stack.Screen
        name="BlogsList"
        component={BlogList}
        options={{ title: "Blogs List" }}
      />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{ title: "Blog Detail" }}
      />
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
