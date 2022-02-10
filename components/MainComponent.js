import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView, Text, ImageBackground } from "react-native";

const bgImage = { uri: "https://m.media-amazon.com/images/I/71BI6WC0mWL._AC_SL1500_.jpg" };

class Main extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        
        <ScrollView>
        
          <Image
            style={{
              resizeMode: "cover",
              height: 210,
              width: 300
            }}
            source={{uri:     'https://media.guitarcenter.com/is/image/MMGS7/J47249000001000-00-720x720.jpg'}}
          />
          <Text style={styles.text}>KORG MONOLOGUE</Text>
          <Image
            style={{
              resizeMode: "cover",
              height: 210,
              width: 300
            }}
            source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/L92399000000000-00-720x720.jpg'}}
          />
          <Text style={styles.text}>PIONEER DJ DDJ-REV7</Text>
          <Image
            style={{
              resizeMode: "cover",
              height: 280,
              width: 300
            }}
            source={{uri: 'https://media.guitarcenter.com/is/image/MMGS7/H96225000000000-00-720x720.jpg'}}
          />
          <Text style={styles.text}>YAMAHA HS8 8" STUDIO MONITOR</Text>
          
        </ScrollView>
        
      </View>
      </ImageBackground>
    );
  }
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
  text: {
    fontWeight: "bold",
    color: "white"
  }
});

export default Main;


