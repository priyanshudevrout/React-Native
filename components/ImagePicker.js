import { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {!image && (
          <TouchableOpacity style={styles.iconContainer} onPress={pickImage}>
            <Icon name="camera-outline" size={20} color="#fff" />
          </TouchableOpacity>
        )}
        {image && (
          <TouchableOpacity style={styles.iconOnImage} onPress={pickImage}>
            <Icon name="camera-outline" size={15} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconContainer: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconOnImage: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
