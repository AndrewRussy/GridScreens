import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity, Text, FlatList, Keyboard, Animated, UIManager, Platform, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

class First extends Component {

  constructor() {
    super();
    this.state = {
      section1_images: [
        require('../imgs/first/section1/image1.png'),
        require('../imgs/first/section1/image2.png'),
        require('../imgs/first/section1/image3.png'),
        require('../imgs/first/section1/image1.png'),
        require('../imgs/first/section1/image2.png'),
        require('../imgs/first/section1/image3.png')
      ],
      demoData: [
        {
          group: 0, height: 221,
          images:[
            require('../imgs/first/section2/demo1/demo1-1.png'),
            require('../imgs/first/section2/demo1/demo1-2.png'),
            require('../imgs/first/section2/demo1/demo1-3.png'),
            require('../imgs/first/section2/demo1/demo1-4.png')
          ]
        },
        {
          group: 1, height: 173,
          images:[
            require('../imgs/first/section2/demo2/demo2-1.png'),
            require('../imgs/first/section2/demo2/demo2-2.png')
          ]
        },
        {
          group: 2, height: 173,
          images:[
            require('../imgs/first/section2/demo3/demo3-1.png'),
            require('../imgs/first/section2/demo3/demo3-2.png')
          ]
        },
        {
          group: 3, height: 173,
          images:[
            require('../imgs/first/section2/demo4/demo4-1.png'),
            require('../imgs/first/section2/demo4/demo4-2.png')
          ]
        },
      ]
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <ScrollView
            style={styles.section1}
            horizontal={true}
          >
            {
              this.state.section1_images.map((image, index) => {
                return(
                  <Image key={index} style={styles.section1_image} source={image} />
                )
              })
            }
          </ScrollView>
          <View style={styles.section2}>
            <View style={{width: '50%', paddingHorizontal: 10}}>
              {
                this.state.demoData.map((data, index) => {
                  return index % 2 === 0 && this.customDemo(data)
                })
              }
            </View>
            <View style={{width: '50%', paddingHorizontal: 10}}>
              {
                this.state.demoData.map((data, index) => {
                  return index % 2 === 1 && this.customDemo(data)
                })
              }
            </View>
          </View>
          
        </ScrollView>
        <TouchableOpacity
          style={styles.pic_btn}
          onPress={() => Actions.second()}
        >
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../imgs/icons/pic_btn.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  customDemo = (data) => {
    return(
      <View key={data.group} style={[styles.demo, {height: data.height}]}>
        <View style={styles.demo_images}>
          {
            data.images.map((image, index) => {
              return(
                <View key={index} style={styles.demo_image}>
                  <Image style={{width: '100%'}} source={image} />
                </View>
              )
            })
          }
        </View>
        <Text style={styles.demo_text}>Demo{data.group+1} 😀</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   position: 'relative'
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
  demo_text: {
    marginTop: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: 'bold'
  },
  demo: {
    width: '100%',
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
  demo_images: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  demo_image: {
    width: '50%',
  },
  pic_btn: {
    position: 'absolute',
    bottom: 14,
    alignSelf: 'center',
    width: 64,
    height: 62
  }
});

export default First;