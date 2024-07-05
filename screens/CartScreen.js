import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';
import { themeColors } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems } from '../slices/cartSlice';
import { selectCartTotal } from '../slices/cartSlice';
import { useState, useEffect } from 'react';

const CartScreen = () => {
  const restaurant = featured.restaurants[0]; // Assuming 'featured' has the correct structure
  const navigation = useNavigation();
   const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});

    setGroupedItems(items);
  }, [cartItems]);


  return (
    <View style={styles.container}>
      {/* Header with back button, cart title, and restaurant name */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.cartTitle}>Your Cart</Text>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
        </View>
      </View>

      {/* Delivery time */}
      <View style={styles.deliveryTime}>
        <View style={[styles.deliveryTimeContainer, { backgroundColor: themeColors.bgColor(0.2) }]}>
          <Image source={require('../assets/images/bikeguy.png')} style={styles.deliveryImage} />
          <Text style={styles.deliveryText}>Deliver in 20-30 minutes</Text>
          <TouchableOpacity>
            <Text style={[styles.changeLink, { color: themeColors.text }]}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Space */}
      <View style={styles.space} />

      {/* Dishes */}
      <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 50 }}
>
  {Object.entries(groupedItems).map(([key, items]) => (
    <View key={key} style={styles.dishItem}>
      <Text style={styles.quantity}>{items.length} x</Text>
      <Image source={items[0].image} style={styles.dishImage} />
      <View style={styles.dishDetails}>
        <Text style={styles.dishName}>{items[0].name}</Text>
        <Text style={styles.dishPrice}>{items[0].price}</Text>
      </View>
      {/* Button to remove item */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(removeFromCart({ id: items[0].id }))}
      >
        <Icon name="minus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  ))}
</ScrollView>

      {/* Order summary and place order */}
      <View style={styles.orderSummary}>
        <View style={[styles.summaryContainer, { backgroundColor: themeColors.bgColor(0.2) }]}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${cartTotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>₹2</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Order Total</Text>
            <Text style={styles.totalValue}>₹{2+cartTotal}</Text>
          </View>
          <TouchableOpacity
            onPress={()=>navigation.navigate('OrderPrepairingScreen')}
            style={[styles.placeOrderButton, { backgroundColor: themeColors.bgColor(1) }]}
          >
            <Text style={styles.placeOrderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: themeColors.bgColor(1),
    padding: 10,
    borderRadius: 20,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 0,
    marginVertical:14,
    marginRight:45
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  restaurantName: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  deliveryTime: {
    paddingHorizontal: 8  ,
    marginTop: 20,
  },
  deliveryTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
  },
  deliveryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  deliveryText: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  changeLink: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
  space: {
    height: 20, // Adjust as needed
  },
  dishesContainer: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    borderRadius: 20, // Rounded corners
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
  },
  dishImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  dishDetails: {
    flex: 1,
    marginLeft: 12,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B5563',
    marginLeft: 0,
  },
  button: {
    backgroundColor: themeColors.bgColor(1),
    padding: 8,
    borderRadius: 20,
  },
  orderSummary: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  summaryContainer: {
    padding: 16,
    borderRadius: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    color: '#6B7280',
    fontSize: 16,
  },
  summaryValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalLabel: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: themeColors.bgColor(1),
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 16,
  },
  placeOrderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
