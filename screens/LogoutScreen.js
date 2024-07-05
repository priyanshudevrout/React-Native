import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/Button'; 
import CustomInput from '../components/CustomInput'; 
import { themeColors } from '../theme';

const LogoutScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <CustomInput
        placeholder="Name"
      />
      <CustomInput
        placeholder="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Password"
        secureTextEntry
      />
      <CustomButton
        title="Sign Up"
        buttonStyle={styles.signupButton}
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: themeColors.bgColor(1),
  },
});

export default LogoutScreen;
