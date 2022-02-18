import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SwiperWithRenderItems from './SwiperWithRenderItems';
import { Divider, Icon } from 'react-native-elements';


export default () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SwiperWithRenderItems />
        <Text style={styles.title}>Korg monologue Monophonic Analog Synthesizer</Text>
        <Divider />
        <Text style={styles.subTitle}>Features</Text>
        <Text style={styles.feature}><Icon name='chevron-right' type='font-awesome'/>Fully programmable, with 100 program memories (80 presets included)</Text>
        <Text style={styles.feature}><Icon name='chevron-right' type='font-awesome'/>Microtuning lets you freely create scales and alternate tonalities</Text>
        <Text style={styles.feature}><Icon name='chevron-right' type='font-awesome'/>16-step sequencer with extensive motion sequence technology to make your sound move</Text>
        <Text style={styles.feature}><Icon name='chevron-right' type='font-awesome'/>Oscilloscope function helps visualize the waveform in real time</Text>
        <Text style={styles.feature}><Icon name='chevron-right' type='font-awesome'/>Aluminum top panel, chassis-mounted pots, rubber-coated knobs, and real wood back panel</Text>
        <Text style={styles.subTitle}>Description</Text>
        <Text>The monologue by Korg is a programmable analog monophonic synthesizer that shares the sleek layout, knob-per-function workflow and high-quality construction of the best-selling minilogue. monologue is a new synth for all types of musicians; rock keyboard players appreciate its sine, saw and square wave leads and EDM producers will find its bass patches attractive for recording and shows.</Text>
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