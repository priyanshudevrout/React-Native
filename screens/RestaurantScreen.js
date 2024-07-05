import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; 
import { useDispatch } from 'react-redux';
import { themeColors } from '../theme';
import { featured } from '../constants'; // Ensure correct import path
import DishRow from '../components/DishRow'; // Ensure correct import path
import Carticon from '../components/Carticon';
import { setRestaurant } from '../slices/restaurantSlice'; // Ensure correct import path

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation(); 
  const [restaurant, setRestaurantState] = useState(null);
  const dispatch = useDispatch();

  // Fetch restaurant data based on params or default to the first restaurant in featured
  useEffect(() => {
    if (params && params.restaurant) {
      setRestaurantState(params.restaurant);
      dispatch(setRestaurant({ ...params.restaurant }));
    } else {
      // Set default restaurant (first one from featured)
      setRestaurantState(featured.restaurants[0]);
      dispatch(setRestaurant({ ...featured.restaurants[0] }));
    }
  }, [params]);

  if (!restaurant) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { name, image, description, stars, reviews, address, dishes } = restaurant;

  return (
    <View style={styles.container}>
      <Carticon/>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={24} color={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.additionalInfo}>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.ratingContainer}>
                <Image source={require('../assets/images/pizzaIcon.png')} style={styles.ratingIcon} />
                <Text style={styles.ratingText}>
                  <Text style={styles.ratingValue}>{stars}</Text>
                  <Text style={styles.reviewsText}> ({reviews} reviews)</Text>
                </Text>
              </View>
              <View style={styles.locationContainer}>
                <Icon name="map-pin" size={15} color="gray" />
                <Text style={styles.locationText}>Nearby. {address}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuDivider} />
          <Text style={styles.menuTitle}>Menu</Text>
          {dishes.map((dish, index) => (
            <DishRow key={index} item={dish} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 240,
  },
  backButton: {
    position: 'absolute',
    top: 56,
    left: 16,
    backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 9999,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  contentContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFFFFF',
    marginTop: -48,
    paddingTop: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  additionalInfo: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  description: {
    color: '#6B7280',
    fontSize: 14,
    marginVertical: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingIcon: {
    width: 16,
    height: 16,
  },
  ratingText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 5,
  },
  ratingValue: {
    color: '#10B981',
  },
  reviewsText: {
    color: '#6B7280',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 5,
  },
  menuContainer: {
    paddingBottom: 36,
    backgroundColor: '#FFFFFF',
  },
  menuTitle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
