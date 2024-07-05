import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/LogoutScreen';
import OrderPrepairingScreen from './screens/OrderPrepairingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              // Define icons only for specific screens
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Account') {
                iconName = 'user';
              } else if (route.name === 'Restaurant') {
                iconName = 'list';
              } else if (route.name === 'Cart') {
                iconName = 'shopping-cart';
              } else {
                return null; // Return null for screens not included in the bottom tab
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              display: 'flex'
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Restaurant" component={RestaurantScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
          <Tab.Screen name="LoginScreen" component={LoginScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="LogoutScreen" component={LogoutScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="Delivery" component={DeliveryScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="OrderPrepairingScreen" component={OrderPrepairingScreen} options={{ tabBarButton: () => null }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
