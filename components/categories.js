import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { categories } from '../constants'
import { useState } from 'react';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={{ marginTop: 4 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          const isActive = category.id === activeCategory;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

          return (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                style={[styles.categoryButton, { backgroundColor: isActive ? '#4B5563' : '#D1D5DB' }, styles[btnClass]]}
              >
                <Image style={styles.categoryImage} source={category.image} />
              </TouchableOpacity>
              <Text style={[styles.categoryText, styles[textClass]]}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories

const styles = StyleSheet.create({
    categoryContainer: {
      marginRight: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryButton: {
      padding: 10,
      borderRadius: 9999, // Large enough to make it round
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    bgGray600: {
      backgroundColor: '#4B5563',
    },
    bgGray200: {
      backgroundColor: '#D1D5DB',
    },
    categoryImage: {
      width: 45,
      height: 45,
      resizeMode: 'cover',
      borderRadius: 9999, // Ensure the image is round
    },
    fontSemibold: {
      fontWeight: 'bold',
    },
    textGray800: {
      color: '#1F2937',
    },
    textGray500: {
      color: '#6B7280',
    },
    categoryText: {
      marginTop: 4,
      fontSize: 14,
      textAlign: 'center',
    },
  });