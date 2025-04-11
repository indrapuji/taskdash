import {
  FlatList,
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
import TaskCard from '../components/TaskCard';

const taskData = [
  {
    id: 1,
    prority: 3,
    desc: 'ini file priority',
    status: 'Pending',
  },
  {
    id: 2,
    prority: 3,
    desc: 'ini file normal',
    status: 'In Progress',
  },
  {
    id: 3,
    prority: 2,
    desc: 'ini file low',
    status: 'Completed',
  },
  {
    id: 4,
    prority: 3,
    desc: 'ini file priority',
    status: 'Canceled',
  },
  {
    id: 5,
    prority: 1,
    desc: 'ini file normal',
    status: 'Pending',
  },
  {
    id: 6,
    prority: 2,
    desc: 'ini file low',
    status: 'Pending',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../assets/images/taskdask_icon.png')}
        />
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icon/menu.png')}
          />
        </TouchableOpacity>
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
      <FlatList
        style={{paddingTop: 10}}
        data={taskData}
        keyExtractor={(item, i) => `item${i}`}
        renderItem={({item, index}) => (
          <TaskCard
            priority={item.prority}
            index={index}
            desc={item.desc}
            status={item.status}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hasNotch ? 60 : 20,
    backgroundColor: 'white',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.poppinsSemibold,
  },
  addPosition: {
    position: 'absolute',
    bottom: 35,
    right: 25,
    zIndex: 2,
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
