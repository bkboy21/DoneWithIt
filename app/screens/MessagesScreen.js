import React from 'react';
import { FlatList, SafeAreaView, StyleShee, Platform, StatusBar } from 'react-native';

import ListItem from '../components/ListItem';


const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <SafeAreaView>
    <FlatList
    data={messages}
    keyExtractor={(message) =>message.id.toString()}
    renderItem={({ item }) =>(
     <ListItem
     title={item.title}
     subTitle={item.description}
     image={item.image}
     />
    )}
    />
    </SafeAreaView>
  );
    }

    const styles = StyleSheet.create({
      
    })

export default MessagesScreen;