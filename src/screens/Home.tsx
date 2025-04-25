import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {hasNotch} from '../utility/DeviceInfo';
import {Fonts} from '../styles/fonts';
import {Colors} from '../styles/colors';
import TaskCard from '../components/TaskCard';
import taskData from '../data/taskData';
import BottomSheet from '../components/BottomSheet';

const screenHeight = Dimensions.get('screen').height;

const Home = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const addTask = () => {
    console.log('add');
  };

  const HeaderComponent = () => {
    return (
      <View style={{marginHorizontal: 16, marginVertical: 10}}>
        <Text style={{fontSize: 17, fontFamily: Fonts.poppinsSemibold}}>
          {taskData.length} Ongoing Task
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {taskData.length > 0 ? (
        <View>
          <View style={styles.headContainer}>
            <View>
              <Text style={{fontFamily: Fonts.poppinsRegular, fontSize: 13}}>
                Welcome
              </Text>
              <Text style={{fontFamily: Fonts.poppinsMedium, fontSize: 19}}>
                Indra Puji Novirwan
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/icon/menu.png')}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            ListHeaderComponent={HeaderComponent}
            style={{paddingTop: 5}}
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
        </View>
      ) : (
        <View style={styles.centerImage}>
          <Image
            style={styles.clipboardImage}
            source={require('../assets/images/clipboard.png')}
          />
          <Text style={styles.titleText}>You're all caught up!</Text>
          <Text style={styles.subText}>
            Nothing here right now. Start by adding your first task.
          </Text>
        </View>
      )}
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
  centerImage: {
    height: screenHeight - 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clipboardImage: {
    width: 300,
    height: 300,
  },
  titleText: {
    fontFamily: Fonts.poppinsBold,
    fontSize: 24,
  },
  subText: {
    textAlign: 'center',
    fontFamily: Fonts.poppinsRegular,
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 46,
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
