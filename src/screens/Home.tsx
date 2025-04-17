import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hasNotch} from '../utility/DeviceInfo';
import {Fonts} from '../styles/fonts';
import {Colors} from '../styles/colors';
import TaskCard from '../components/TaskCard';
import taskData from '../data/taskData';
import BottomSheet from '../components/BottomSheet';

const Home = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const addTask = () => {
    console.log('add');
  };

  const HeaderComponent = () => {
    return (
      <View style={{margin: 16}}>
        <Text style={{fontSize: 17, fontFamily: Fonts.poppinsSemibold}}>
          Ongoing Task
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View>
          <Text style={{fontFamily: Fonts.poppinsMedium, fontSize: 19}}>
            Welcome Indra
          </Text>
          <Text style={{fontFamily: Fonts.poppinsRegular, color: 'red'}}>
            {`${taskData.length} Task Pending`}
          </Text>
        </View>

        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/icon/menu.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => setOpenSheet(true)}
        style={styles.addPosition}>
        <View style={styles.addIcon}>
          <Image
            style={styles.addSize}
            source={require('../assets/icon/add.png')}
          />
        </View>
      </TouchableOpacity>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        style={{paddingTop: 10}}
        data={taskData}
        keyExtractor={(item, i) => `item${i}`}
        renderItem={({item, index}) => (
          <TaskCard
            priority={item.prority}
            index={index}
            title={item.title}
            desc={item.desc}
            status={item.status}
          />
        )}
      />
      {openSheet && (
        <BottomSheet
          onPress={addTask}
          title={'Add Task'}
          loading={false}
          setOpenSheet={setOpenSheet}
        />
      )}
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
    alignItems: 'center',
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
