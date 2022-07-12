import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { FriendList } from "../components/FriendList";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://10.109.0.15:3333/friends?q=${name}`);
    const data = await response.json();

    setFriends(data);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />

      <Button title="Buscar" onPress={handleSearch} />
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        <FriendList data={friends} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 0.7,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  },
});
