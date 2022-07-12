import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
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
      <Text>Amigos</Text>

      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />

      <Button title="Buscar" onPress={handleSearch} />

      <FriendList data={friends} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  input: {
    borderWidth: 0.7,
    padding: 7,
    marginBottom: 10,
  },
});
