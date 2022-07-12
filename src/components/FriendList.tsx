import React from "react";

import { ScrollView, View } from "react-native";
import { Friend } from "./Friend";

interface Props {
  data: {
    id: string;
    name: string;
    likes: number;
  }[];
}

export function FriendList({ data }: Props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((friend) => (
        <Friend key={String(friend.id)} data={friend} />
      ))}
    </ScrollView>
  );
}
