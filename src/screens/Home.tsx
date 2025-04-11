import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hasNotch} from '../utility/DeviceInfo';
import {Fonts} from '../styles/fonts';
import {Colors} from '../styles/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TaskDash</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log('add')}
        style={styles.addPosition}>
        <View style={styles.addIcon}>
          <Image
            style={styles.addSize}
            source={require('../assets/icon/add.png')}
          />
        </View>
      </TouchableOpacity>
      <ScrollView
        style={{
          margin: 16,
        }}>
        <View style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
          <Text style={{fontSize: 20, fontFamily: Fonts.poppinsSemibold}}>
            Project
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: hasNotch ? 60 : 20,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.poppinsSemibold,
  },
  addPosition: {
    position: 'absolute',
    bottom: 35,
    right: 25,
    zIndex: 1,
  },
  addIcon: {
    backgroundColor: Colors.baseColor,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  addSize: {
    width: 40,
    height: 40,
  },
});
