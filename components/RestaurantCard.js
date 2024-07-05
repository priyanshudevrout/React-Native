import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { themeColors } from '../theme'; // Adjust the path if necessary
import Icon from 'react-native-vector-icons/Feather'; // Assuming you have Feather icons
import { useNavigation } from '@react-navigation/native';
const RestaurantCard = ({ item }) => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback 
    onPress={() => navigation.navigate('Restaurant', { item })}>
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Image source={require('../assets/images/starIcon.jpg')} style={styles.starIcon} />
            <Text style={styles.rating}>{item.stars}</Text>
            <Text style={styles.reviews}>{`(${item.reviews} reviews)`}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Icon name="map-pin" color="gray" size={15} />
            <Text style={styles.address}>{`Nearby. ${item.address}`}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{`$${item.price}`}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: themeColors.bgColor(0.2), // Example shadow color based on theme
    shadowRadius: 7,
    shadowOpacity: 0.8,
    elevation: 5, // Android shadow elevation
    height: 300, // Adjust height as needed
    width: 330, // Adjust width as needed
  },
  image: {
    height: '69%', // Adjust image height to fill container
    width: '100%', // Adjust image width to fill container
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333', // Example dark color
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  starIcon: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  rating: {
    fontSize: 14,
    color: '#228B22', // Example green color
  },
  reviews: {
    fontSize: 14,
    color: '#666666', // Example gray color
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
    color: '#333333', // Example dark color
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  address: {
    fontSize: 12,
    color: '#666666', // Example gray color
    marginLeft: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666', // Example gray color
    marginTop: 8,
  },
  priceContainer: {
    backgroundColor: '#FCA5A5', // Example red color
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // Example white color
  },
});
