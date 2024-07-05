import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { themeColors } from '../theme'; 
import RestaurantCard from './RestaurantCard';

const FeaturedGrid = ({ title, description, restaurants }) => {

  const displayedRestaurants = restaurants.slice(0, 4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{description}</Text>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
      >
        {displayedRestaurants.map((restaurant, index) => (
          <View key={index} style={styles.gridItem}>
            <RestaurantCard item={restaurant} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedGrid;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 10,
  },
  seeAllButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#4B5563',
    borderRadius: 8,
  },
  seeAllText: {
    color: '#FFFFFF', 
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  gridItem: {
    width: Dimensions.get('window').width > 600 ? '48%' : '100%', 
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
