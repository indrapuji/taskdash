import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hasNotch} from '../utility/DeviceInfo';
import {Fonts} from '../styles/fonts';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskDash</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hasNotch ? 60 : 20,
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.poppinsSemibold,
  },
});
