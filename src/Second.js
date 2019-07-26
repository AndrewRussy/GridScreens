import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
        <View>
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
        <View style={styles.buttons}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Image source={require('../imgs/icons/microphone.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Image source={require('../imgs/icons/video-camera.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Image source={require('../imgs/icons/cancel.png')} />
            </TouchableOpacity>
          </View>
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
  },
  buttons: {
    position: 'absolute',
    bottom: 16,
    flexDirection: 'row',
    width: '100%'
  },
  button: {
    width: '33.33%',
    alignItems: 'center'
  }
});

export default Second;