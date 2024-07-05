import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';
import Header from '../components/Header';

const HomeScreen = () => {
  const [isGridView, setIsGridView] = useState(false);
  const navigation = useNavigation(); 

  const toggleGridView = () => {
    setIsGridView(!isGridView);
  };

  const navigateToRestaurant = () => {
    navigation.navigate('Restaurant');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <View style={styles.searchBarContainer}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={20} stroke="gray" />
          <TextInput placeholder="Restaurants" style={styles.textInput} />
        </View>
        <TouchableOpacity
          style={[styles.filterIconContainer, { backgroundColor: themeColors.bgColor(1) }]}
          onPress={toggleGridView}
        >
          <Icon name="sliders" size={20} strokeWidth={2.5} stroke="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View>
          <Categories />
        </View>
        <View style={{ marginTop: 5 }}>
          {isGridView ? (
            <View style={styles.gridContainer}>
              {[featured, featured, featured,featured, featured, featured].map((item, index) => (
                <TouchableOpacity key={index} style={styles.gridItem} onPress={navigateToRestaurant}>
                  <Text style={styles.gridText}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            [featured, featured, featured].map((item, index) => (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'gray',
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
  },
  filterIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  gridItem: {
    width: '48%', // Adjust based on your grid layout needs
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    padding: 12,
  },
  gridText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
