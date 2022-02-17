import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SwiperWithRenderItems from './SwiperWithRenderItems';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <SwiperWithRenderItems />
      </View>
      <View>
        <Text>Korg monologue Monophonic Analog Synthesizer</Text>
        <Text>Features</Text>
        <Text>Fully programmable, with 100 program memories (80 presets included)</Text>
        <Text>Microtuning lets you freely create scales and alternate tonalities</Text>
        <Text>16-step sequencer with extensive motion sequence technology to make your sound move</Text>
        <Text>Oscilloscope function helps visualize the waveform in real time</Text>
        <Text>Aluminum top panel, chassis-mounted pots, rubber-coated knobs, and real wood back panel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});