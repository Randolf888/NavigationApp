import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon = 'home';

          if (route.name === 'HomeTab') icon = 'home-outline';
          if (route.name === 'Search') icon = 'search-outline';
          if (route.name === 'Settings') icon = 'settings-outline';

          return <Icon name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNavigator} options={{ title: "Home" }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
