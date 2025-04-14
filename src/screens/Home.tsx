import {
  FlatList,
  Image,
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
    category: 1,
    title: 'Setup Macbook User',
    desc: 'persiapkan macbook untuk user adb yang belum di deploy',
    status: 'Pending',
  },
  {
    id: 2,
    prority: 3,
    category: 1,
    title: 'Annual check',
    desc: 'Cek semua inventory adb IRM yang ada',
    status: 'In Progress',
  },
  {
    id: 3,
    prority: 2,
    category: 1,
    title: 'Mobile Portofolio',
    desc: 'Bikin portofolio yang banyak supaya tidak lupa',
    status: 'Completed',
  },
  {
    id: 4,
    prority: 3,
    category: 1,
    title: 'Backup Restore',
    desc: 'Belajar backup restore untuk percobaan ke user IRM',
    status: 'Canceled',
  },
  {
    id: 5,
    prority: 2,
    category: 1,
    title: 'Indonesia VS Korea Utara',
    desc: 'Jangan lupa nonton senin malam di RCTI',
    status: 'Pending',
  },
  {
    id: 6,
    prority: 1,
    category: 1,
    title: 'Streaming playlist',
    desc: 'Cari streaming link untuk playlist tv online',
    status: 'Pending',
  },
  {
    id: 7,
    prority: 1,
    category: 1,
    title: 'Upload Jatisejahtera',
    desc: 'Upload server jatisejahtera ke digitalocean',
    status: 'Pending',
  },
];

const Home = () => {
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
