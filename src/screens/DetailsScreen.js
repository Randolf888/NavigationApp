import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { itemId, itemName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Item Name: {itemName}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <Button
        title="Update Params"
        onPress={() =>
          navigation.setParams({ itemName: 'Updated Item' })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
