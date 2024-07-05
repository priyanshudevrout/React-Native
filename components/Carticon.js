import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';

const CartIcon = () => {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: themeColors.bgColor(1) }]}
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >
        <View style={styles.iconContainer}>
          <Text style={styles.itemCount}>{cartItems.length}</Text>
        </View>
        <Text style={styles.text}>View Cart</Text>
        <Text style={styles.price}>  ${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    zIndex: 50,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 9999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 9999,
  },
  itemCount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});
