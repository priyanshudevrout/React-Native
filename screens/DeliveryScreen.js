import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Assuming you have Feather icons installed
import { themeColors } from '../theme';

const DeliveryStatus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Estimated Arrival</Text>
        <Text style={styles.time}>20-30 Minutes</Text>
        <Text style={styles.status}>Your order is on its way!</Text>
      </View>
      <Image
        source={require('../assets/images/bikeguy.png')}
        style={styles.image}
      />
      <View style={[styles.statusContainer, { backgroundColor: themeColors.bgColor(0.8) }]}>
        <View style={styles.iconBackground}>
          <Image
            source={require('../assets/images/bikeguy.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>Bishal</Text>
          <Text style={styles.subtitle}>Your Rider</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="phone" size={24} color={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconButton}>
            <Icon name="x" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -12,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  infoContainer: {
    paddingTop: 250,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 5,
  },
  time: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  status: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  iconBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: 10,
    borderRadius: 50,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default DeliveryStatus;
