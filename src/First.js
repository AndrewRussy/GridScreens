import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';
// name, price, category
class First extends Component {

  constructor() {
    super();
    this.state = {
      section1_images: [
     
        require('../imgs/books/bookef.jpg'),
        require('../imgs/books/born2barl.jpg'),
        require('../imgs/books/fichbook.jpg'),
        require('../imgs/books/born2barl.jpg'),
        require('../imgs/books/bookef.jpg'),


      ],
      demoData: [
        {
          group: 0,
          images:[
            require('../imgs/books/bookef.jpg'),
          ], 
          name: 'Nothing ', 
          price: '$200', 
          category: "Drama", 
        },
        {
          group: 1,
          images:[
            require('../imgs/books/born2barl.jpg'),
          ], 
          name: "Born", 
          price: '$200', 
          category: "Story", 
        },
        {
          group: 2,
          images:[
            require('../imgs/books/fichbook.jpg'),
        
          ],
          name: "Fish", 
          price: '$200', 
          category: "Wirld", 
        },
        {
          group: 3,
          images:[
         
            require('../imgs/books/rose.jpg'),
         
          ],
          name: "Sister", 
          price: '$200', 
          category: "People", 
        },
      ]
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textBooks}>GridBooks</Text>
        <ScrollView>
        <Text style={styles.treading}>Treading Books</Text>
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
      <TouchableOpacity key={data.group} style={styles.demo}>
        <View style={styles.demo_images}>
          {
            data.images.map((image, index) => {
              return(
                <View key={index} style={styles.demo_image}>
                  <Image style={{width: '100%', height: 200}} source={image} />
                </View>
              )
            })
          }
        </View>
        <Text style={styles.demo_text}> Name:{data.name}</Text>
        <Text style={styles.demo_text}> Price:{data.price}</Text>
        <Text style={styles.demo_text}> Category:{data.category}</Text>
        
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   position: 'relative'
  },
  textBooks: {
  textAlign: "center",
  fontSize: 20,
  fontWeight: 'bold'
  },
  treading: {
    fontSize: 20,
    fontWeight: 'bold'
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
    marginVertical: 12,
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
    width: '100%',
    height: '100%'
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