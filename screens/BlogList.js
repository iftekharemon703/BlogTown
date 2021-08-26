import React, { useState, useEffect } from "react";
import { Button, View, Text, Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";
import BlogDetail from "./BlogDetail";

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    firebase.db.collection("blogs").onSnapshot((querySnapshot) => {
      const blogs = [];
      querySnapshot.docs.forEach((doc) => {
        const { title, description } = doc.data();
        blogs.push({
          id: doc.id,
          title,
          description,
        });
      });
      setBlogs(blogs);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateBlog")}
        title="Create Blog"
      />
      {blogs.map((blog) => {
        return (
          <ListItem
            key={blog.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("BlogDetail", {
                blogId: blog.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri: "https://static.remove.bg/remove-bg-web/207b10c4ce48e7dca1441ee119b7f52754f487fd/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{blog.title}</ListItem.Title>
              <ListItem.Subtitle>{blog.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default BlogList;
