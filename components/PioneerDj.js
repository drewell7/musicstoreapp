import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import PioneerSwiperWithRenderItems from './PioneerSwiperWithRenderItems';
import { Divider, Icon } from 'react-native-elements';


export default () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PioneerSwiperWithRenderItems />
        <Text style={styles.title}>Pioneer DJ DDJ-REV7 Professional DJ Controller</Text>
        <Divider />
        <Text style={styles.subTitle}>Features</Text>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Motorized, vinylized jog wheel with record-like feel</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>On jog display</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Instant scratch—rapidly fire samples with dedicated buttons</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Advanced audio design</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Magvel Fader Pro</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>22 built-in effects</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Plug and play capability with Serato DJ Pro</Text>
        </View>
        <Text style={styles.subTitle}>Description</Text>
        <Text style={{ margin: 4 }}>The Pioneer DJ DDJ-REV7 professional DJ controller is an innovative two-channel unit that enables you to maximize the full potential of Serato DJ Pro performance software. Featuring large, vinylized and motorized jog wheels, this controller is designed to create a tactile connection between you and your music. An ideal solution for open-format and scratch DJing, the DDJ-REV7 is the first Pioneer DJ controller with tempo sliders that sit horizontally on the top of the deck to mirror PLX turntables in a battle configuration. Performance pads and Lever FX paddles sit in the mixer section to parallel the DJM-S Series mixer design. The 7" jog wheels feature customizable settings and two slip sheets inside each deck to allow experimentation with torque and friction. The acrylic top is uniquely finished to feel like a real analog record and includes a spin treatment to easily catch on your fingertips. In the center of each jog wheel is a 3.5" display showing important info and removing the need to switch between a deck and laptop.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 4,
  },
  feature: {
    margin: 5,
  }
});