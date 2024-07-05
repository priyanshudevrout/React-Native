import React, { useState } from 'react';
import { View, Text, Switch, Image, TouchableOpacity, StyleSheet, Alert, ScrollView, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ImagePickerExample from '../components/ImagePicker';

const UserProfile = () => {
  const navigation = useNavigation();

  const [theme, setTheme] = useState('light');
  const [isEmailNotifications, setIsEmailNotifications] = useState(true);
  const [isPushNotifications, setIsPushNotifications] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@mail.com');
  const [profileImage, setProfileImage] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleImagePicked = (uri) => {
    setProfileImage(uri);
  };

  const lightTheme = {
    backgroundColor: '#f5f5f5',
    textColor: '#000',
    optionBackgroundColor: '#fff',
    optionTextColor: '#000',
  };

  const darkTheme = {
    backgroundColor: '#1c1c1c',
    textColor: '#fff',
    optionBackgroundColor: '#000',
    optionTextColor: '#fff',
  };

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleEmailNotificationsToggle = () => {
    setIsEmailNotifications(!isEmailNotifications);
  };

  const handlePushNotificationsToggle = () => {
    setIsPushNotifications(!isPushNotifications);
  };

  const handleEditProfile = () => {
    setIsEditModalVisible(true);
  };

  const handleSaveProfile = () => {
    Alert.alert("Profile Updated", "Changes saved successfully!");
    setIsEditModalVisible(false);
  };

  const handleCancelProfile = () => {
    setIsEditModalVisible(false);
  };

  const handleLanguagePress = () => {
    Alert.alert("Language", "Language option pressed!");
  };

  const handleLocationPress = () => {
    Alert.alert("Location", "Location option pressed!");
  };

  const handleSoundPress = () => {
    Alert.alert("Sound", "Sound option pressed!");
  };

  const styles = StyleSheet.create({
    scrollContainer: {
      padding: 20,
      backgroundColor: theme === 'light' ? lightTheme.backgroundColor : darkTheme.backgroundColor,
    },
    header: {
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'light' ? lightTheme.textColor : darkTheme.textColor,
    },
    subHeaderText: {
      fontSize: 16,
      color: '#888',
    },
    profile: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImageContainer: {
      borderRadius: 50,
      overflow: 'hidden',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    profileName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme === 'light' ? lightTheme.textColor : darkTheme.textColor,
    },
    profileEmail: {
      fontSize: 16,
      color: '#888',
      marginBottom: 10,
    },
    editProfileButton: {
      backgroundColor: 'orange',
      padding: 10,
      borderRadius: 5,
    },
    editProfileText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    section: {
      marginBottom: 20,
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#888',
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: theme === 'light' ? lightTheme.optionBackgroundColor : darkTheme.optionBackgroundColor,
      borderRadius: 5,
      marginBottom: 10,
    },
    optionText: {
      fontSize: 16,
      color: theme === 'light' ? lightTheme.optionTextColor : darkTheme.optionTextColor,
    },
    optionValue: {
      fontSize: 16,
      color: '#888',
    },
    footer: {
      textAlign: 'center',
      fontSize: 16,
      color: '#888',
      marginTop: 20,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    modalInput: {
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#555',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      color: theme === 'light' ? '#000' : '#fff',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 10,
    },
    modalButton: {
      marginLeft: 10,
      padding: 10,
      borderRadius: 5,
    },
    modalButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    saveButton: {
      backgroundColor: 'orange',
    },
    cancelButton: {
      backgroundColor: '#dc3545',
    },
  });

  const defaultImage = 'https://via.placeholder.com/100';

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
        <Text style={styles.subHeaderText}>Edit your Profile here</Text>
      </View>
      <View style={styles.profile}>
      <ImagePickerExample onImagePicked={handleImagePicked} />
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileEmail}>{email}</Text>
        <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>PREFERENCES</Text>
        <TouchableOpacity style={styles.option} onPress={handleLanguagePress}>
          <Icon name="globe-outline" size={24} color={theme === 'light' ? lightTheme.textColor : darkTheme.textColor} />
          <Text style={styles.optionText}>Language</Text>
          <Text style={styles.optionValue}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleChangeTheme}>
          <Icon name="color-palette-outline" size={24} color={theme === 'light' ? lightTheme.textColor : darkTheme.textColor} />
          <Text style={styles.optionText}>Change Theme</Text>
          <Text style={styles.optionValue}>{theme === 'light' ? 'Light' : 'Dark'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLocationPress}>
          <Icon name="location-outline" size={24} color={theme === 'light' ? lightTheme.textColor : darkTheme.textColor} />
          <Text style={styles.optionText}>Location</Text>
          <Text style={styles.optionValue}>India, ND</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>NOTIFICATIONS</Text>
        <View style={styles.option}>
          <Icon name="mail-outline" size={24} color={theme === 'light' ? lightTheme.textColor : darkTheme.textColor} />
          <Text style={styles.optionText}>Email Notifications</Text>
          <Switch value={isEmailNotifications} onValueChange={handleEmailNotificationsToggle} />
        </View>
        <View style={styles.option}>
          <Icon name="notifications-outline" size={24} color={theme === 'light' ? lightTheme.textColor : darkTheme.textColor} />
          <Text style={styles.optionText}>Push Notifications</Text>
          <Switch value={isPushNotifications} onValueChange={handlePushNotificationsToggle} />
        </View>
        <TouchableOpacity style={styles.option} onPress={handleSoundPress}>
          <Icon name="musical-notes-outline" size={24} color={theme === 'light' ? lightTheme.textColor : darkTheme.textColor} />
          <Text style={styles.optionText}>Sound</Text>
          <Text style={styles.optionValue}>Default</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Made with codedawgs</Text>

      {/* Edit Profile Modal */}
      <Modal
        visible={isEditModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCancelProfile}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.modalInput}
              placeholder="Name"
              placeholderTextColor={theme === 'light' ? '#888' : '#bbb'}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Email"
              placeholderTextColor={theme === 'light' ? '#888' : '#bbb'}
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={handleCancelProfile}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.saveButton]} onPress={handleSaveProfile}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default UserProfile;

