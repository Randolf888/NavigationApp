import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text>User: John Doe</Text>
      <Text>Email: john@example.com</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
