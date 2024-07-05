import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice'; // Ensure correct import path
import { themeColors } from '../theme';

const DishRow = ({ item }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCartItemsById(state, item.id));

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const { name, price, description, image } = item;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>{typeof price === 'number' ? price.toFixed(2) : price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={[styles.button, !totalItems.length && styles.disabledButton]}
              onPress={handleDecrease}
              disabled={!totalItems.length}
            >
              <Icon name="minus" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{totalItems.length}</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncrease}>
              <Icon name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default DishRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B5563',
    paddingHorizontal: 12,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
});
