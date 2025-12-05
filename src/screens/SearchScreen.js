import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Text>Searching for: {searchQuery}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginBottom: 20,
  },
});
