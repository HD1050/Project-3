import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';

const App = () => {
  const [currentImage, setCurrentImage] = useState(require('./assets/shrek.jpg'));
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handlePress = (newImage) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentImage(newImage);
      fadeAnim.setValue(1);
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dynamic Image Viewer App</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4CAF50' }]}
        onPress={() => handlePress(require('./assets/shrek.jpg'))}
      >
        <Text style={styles.buttonText}>Shrek</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF5722' }]}
        onPress={() => handlePress(require('./assets/jhin.jpg'))}
      >
        <Text style={styles.buttonText}>Jhin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#3F51B5' }]}
        onPress={() => handlePress(require('./assets/jinx.jpg'))}
      >
        <Text style={styles.buttonText}>Jinx</Text>
      </TouchableOpacity>

      {/* Image Display with Fade Transition */}
      <Animated.View style={{ ...styles.imageContainer, opacity: fadeAnim }}>
        <Image source={currentImage} style={styles.image} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Light gray background color
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300, // Size
    height: 300,
  },
});

export default App;

