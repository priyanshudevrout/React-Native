import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderPreparingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // move to delivery screen
      navigation.navigate('Delivery');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/delivery.gif')} style={styles.image} />
    </View>
  );
};

export default OrderPreparingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});
