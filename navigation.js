import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairingScreen from './screens/OrderPrepairingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import UserProfile from './screens/UserProfile';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/LogoutScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ presentation: 'modal' }} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ presentation: 'modal' }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        <Stack.Screen name="OrderPrepairingScreen" component={OrderPrepairingScreen} options={{ presentation: 'fullScreenModal' }} />
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{ presentation: 'fullScreenModal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
