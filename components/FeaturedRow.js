import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { themeColors } from '../theme'; // Adjust the path if necessary
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, restaurants }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} item={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#6B7280',
    fontSize: 12,
  },
  seeAllButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#4B5563', // Example color
    borderRadius: 8,
  },
  seeAllText: {
    color: '#FFFFFF', // Example color
    fontWeight: '600',
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    overflow: 'visible',
    marginTop: 5, // Adjust as per your design
  },
});
