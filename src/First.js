import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity, Text, TextInput, Keyboard, Animated, UIManager, Platform, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

class First extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <ScrollView
          style={styles.section1}
          horizontal={true}
        >
          <View style={styles.section1_image}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../imgs/first/section1/image1.png')}
            />
          </View>
          <View style={styles.section1_image}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../imgs/first/section1/image2.png')}
            />
          </View>
          <View style={styles.section1_image}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../imgs/first/section1/image3.png')}
            />
          </View>
          <View style={styles.section1_image}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../imgs/first/section1/image1.png')}
            />
          </View>
          <View style={styles.section1_image}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../imgs/first/section1/image2.png')}
            />
          </View>
          <View style={styles.section1_image}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../imgs/first/section1/image3.png')}
            />
          </View>
        </ScrollView>
        <View style={styles.section2}>
          <View style={{width: '50%', paddingHorizontal: 10}}>
            <View style={styles.demo1}>
              <View style={styles.demo1_images}>
                <View style={styles.demo1_image}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../imgs/first/section2/demo1/demo1-1.png')}
                  />
                </View>
                <View style={styles.demo1_image}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../imgs/first/section2/demo1/demo1-2.png')}
                  />
                </View>
                <View style={styles.demo1_image}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../imgs/first/section2/demo1/demo1-3.png')}
                  />
                </View>
                <View style={styles.demo1_image}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../imgs/first/section2/demo1/demo1-4.png')}
                  />
                </View>
              </View>
              <Text style={styles.demo_text}>Demo1 😀</Text>
            </View>
            <View style={styles.demox}>
              <View style={styles.demox_images}>
                <View style={styles.demox_image}>
                  <Image
                    style={{width: '100%'}}
                    source={require('../imgs/first/section2/demo3/demo3-1.png')}
                  />
                </View>
                <View style={styles.demox_image}>
                  <Image
                    style={{width: '100%'}}
                    source={require('../imgs/first/section2/demo3/demo3-2.png')}
                  />
                </View>
              </View>
              <Text style={styles.demo_text}>Demo3 😀</Text>
            </View>
          </View>
          <View style={{width: '50%', paddingHorizontal: 10}}>
            <View style={styles.demox}>
              <View style={styles.demox_images}>
                <View style={styles.demox_image}>
                  <Image
                    style={{width: '100%'}}
                    source={require('../imgs/first/section2/demo2/demo2-1.png')}
                  />
                </View>
                <View style={styles.demox_image}>
                  <Image
                    style={{width: '100%'}}
                    source={require('../imgs/first/section2/demo2/demo2-2.png')}
                  />
                </View>
              </View>
              <Text style={styles.demo_text}>Demo2 😀</Text>
            </View>
            <View style={styles.demox}>
              <View style={styles.demox_images}>
                <View style={styles.demox_image}>
                  <Image
                    style={{width: '100%'}}
                    source={require('../imgs/first/section2/demo4/demo4-1.png')}
                  />
                </View>
                <View style={styles.demox_image}>
                  <Image
                    style={{width: '100%'}}
                    source={require('../imgs/first/section2/demo4/demo4-2.png')}
                  />
                </View>
              </View>
              <Text style={styles.demo_text}>Demo4 😀</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.pic_btn}
          onPress={() => Actions.second()}
        >
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../imgs/icons/pic_btn.png')} />
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  section1: {
    marginTop: 32,
    height: 202,
  },
  section1_image: {
    width: Dimensions.get('window').width/3,
    height: '100%'
  },
  section2: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  demo1: {
    width: '100%',
    height:221,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 9,
    overflow: 'hidden',
    backgroundColor: '#F9F7F7'
  },
  demo1_images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  demo_text: {
    marginTop: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: 'bold'
  },
  demox: {
    width: '100%',
    height:173,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    overflow: 'hidden',
    backgroundColor: '#F9F7F7'
  },
  demox_images: {
    flexDirection: 'row'
  },
  demo1_image: {
    width: '50%',
    aspectRatio: 1
  },
  demox_image: {
    width: '50%',
  },
  pic_btn: {
    alignSelf: 'center',
    marginVertical: 16,
    width: 64,
    height: 62
  }
});

export default First;