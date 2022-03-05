import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import KorgSwiperWithRenderItems from './KorgSwiperWithRenderItems';
import { Divider, Icon } from 'react-native-elements';


export default () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <KorgSwiperWithRenderItems />
        <Text style={styles.title}>Korg monologue Monophonic Analog Synthesizer</Text>
        <Divider />
        <Text style={styles.subTitle}>Features</Text>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Fully programmable, with 100 program memories (80 presets included)</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Microtuning lets you freely create scales and alternate tonalities</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>16-step sequencer with extensive motion sequence technology to make your sound move</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Oscilloscope function helps visualize the waveform in real time</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
        <Icon name='caret-right' type='font-awesome' style={{ margin: 5 }}/><Text style={styles.feature}>Aluminum top panel, chassis-mounted pots, rubber-coated knobs, and real wood back panel</Text>
        </View>
        <Text style={styles.subTitle}>Description</Text>
        <Text style={{ margin: 4 }}>The monologue by Korg is a programmable analog monophonic synthesizer that shares the sleek layout, knob-per-function workflow and high-quality construction of the best-selling minilogue. monologue is a new synth for all types of musicians; rock keyboard players appreciate its sine, saw and square wave leads and EDM producers will find its bass patches attractive for recording and shows.</Text>
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