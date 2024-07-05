import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook if needed
import { themeColors } from '../theme';

const Header = () => {
  // State for managing the slider modal
  const [sliderVisible, setSliderVisible] = React.useState(false);
  const navigation = useNavigation(); // Use navigation hook from React Navigation if needed
  const sliderAnimation = useRef(new Animated.Value(0)).current;

  // Function to toggle the slider modal visibility
  const toggleSlider = () => {
    setSliderVisible(!sliderVisible);
    if (!sliderVisible) {
      Animated.timing(sliderAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(sliderAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  // Function to navigate to login screen
  const navigateToLogin = () => {
    navigation.navigate('LoginScreen'); // Replace with your actual screen name
    setSliderVisible(false); // Close slider modal after navigation
  };

  // Function to navigate to logout (or any other action) screen
  const handleLogout = () => {
    navigation.navigate('LogoutScreen'); // Replace with your actual screen name
    setSliderVisible(false); // Close slider modal after navigation
  };

  const sliderTranslateX = sliderAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-1000, 0], // Adjust the initial position based on your screen width
  });

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.hamburgerButton}
        onPress={toggleSlider}
      >
        <Icon name="menu" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.restaurantName}>QuickBite</Text>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')} // Replace with your actual logo image source
          style={styles.logo}
        />
      </View>

      {/* Slider modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={sliderVisible}
        onRequestClose={() => {
          setSliderVisible(false); // Close modal on press outside
        }}
      >
        <Animated.View style={[styles.centeredView, { transform: [{ translateX: sliderTranslateX }] }]}>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderContent}>
              <TouchableOpacity onPress={navigateToLogin}>
                <Text style={styles.modalText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.modalText}>Signup</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={toggleSlider}>
              <Text style={[styles.modalText, styles.closeButton]}>Close</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12, // Additional vertical padding
    backgroundColor: 'white', // Use your theme color for background
  },
  hamburgerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // White background for hamburger button
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  restaurantName: {
    fontSize: 20,
    color: 'black', // Text color for restaurant name
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the left
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  sliderContainer: {
    width: '50%', // Half of the screen width
    height: '100%',
    backgroundColor: 'white', // White background for slider modal
    padding: 20,
  },
  sliderContent: {
    flex: 1,
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 12,
    color: 'black',
  },
  closeButton: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Header;
