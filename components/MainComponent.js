import React from "react";
import { View, Image, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Card, SearchBar } from 'react-native-elements';

const bgImage = { uri: "https://m.media-amazon.com/images/I/71BI6WC0mWL._AC_SL1500_.jpg" };

function Main({ navigation }) {
  
    return (
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Image
                style={{
                  resizeMode: 'stretch',
                  height: 200,
                  width: 500
                }}
                source={require('./images/mainHead.jpg')}
              />
            </View>
            <View style={styles.search}>
            <SearchBar
                placeholder="Type Here..."
              />
              </View>
            
            <Card>
              <Card.Title>KORG MONOLOGUE</Card.Title>
              <Card.Divider />
                <TouchableOpacity onPress={() => navigation.push('KorgMono')}>
                  <Image
                    style={{
                      resizeMode: "cover",
                      height: 210,
                      width: 300
                    }}
                    source={{uri:     'https://media.guitarcenter.com/is/image/MMGS7/J47249000001000-00-720x720.jpg'}} 
                  />
                </TouchableOpacity>
              <Text style={styles.text}>KORG MONOLOGUE</Text>
            </Card>
            <Card>
              <Card.Title>PIONEER DJ DDJ-REV7</Card.Title>
              <Card.Divider />
              <TouchableOpacity onPress={() => navigation.push('DjRev7')}>
              <Image
                style={{
                  resizeMode: "cover",
                  height: 210,
                  width: 300
                }}
                source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/L92399000000000-00-720x720.jpg'}}
              />
              </TouchableOpacity>
              <Text style={styles.text}>PIONEER DJ DDJ-REV7</Text>
            </Card>
            <Card>
              <Card.Title>YAMAHA HS8 8" STUDIO MONITOR</Card.Title>
              <Card.Divider />
              <Image
                style={{
                  resizeMode: "cover",
                  height: 280,
                  width: 300
                }}
                source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/H96225000000000-00-720x720.jpg'}}
              />
              <Text style={styles.text}>YAMAHA HS8 8" STUDIO MONITOR</Text>
            </Card>
            <Card>
              <Card.Title>ROLAND TR-08 SOUND MODULE</Card.Title>
              <Card.Divider />
              <Image
                style={{
                  resizeMode: "cover",
                  height: 280,
                  width: 300
                }}
                source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/K40860000000000-00-720x720.jpg'}}
              />
              <Text style={styles.text}>ROLAND TR-08 SOUND MODULE</Text>
            </Card>
            <Card>
              <Card.Title>YAMAHA HPH-MT7 STUDIO MONITOR HEADPHONES</Card.Title>
              <Card.Divider />
              <Image
                style={{
                  resizeMode: "cover",
                  height: 280,
                  width: 300
                }}
                source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/J39276000002000-00-720x720.jpg'}}
              />
              <Text style={styles.text}>YAMAHA HPH-MT7 STUDIO MONITOR HEADPHONES</Text>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }


const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  search: {
    width: 400
  }
});

export default Main;


