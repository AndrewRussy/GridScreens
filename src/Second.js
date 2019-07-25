import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity, Text, TextInput, Keyboard, Animated, UIManager, Platform, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

class Second extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.section}>
          <Image style={styles.section1_image} source={require('../imgs/second/image1.png')} />
        </View>
        <View style={styles.section2}>
          <Image style={styles.section2_image} source={require('../imgs/second/image2.png')} />
          <Image style={styles.section2_image} source={require('../imgs/second/image3.png')} />
        </View>
        <View style={styles.section}>
          <Image style={styles.section1_image} source={require('../imgs/second/image4.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  section: {
    width: '100%',
    height: '33.33%'
  },
  section1_image: {
    width: '100%',
    height: '100%'
  },
  section2: {
    width: '100%',
    height: '33.33%',
    flexDirection: 'row'
  },
  section2_image: {
    width: '50%',
    height: '100%'
  }
});

export default Second;