import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState, useRef} from 'react';
import MainButton from './MainButton';
import InputText from './InputText';
import {Colors} from '../styles/colors';
import {Fonts} from '../styles/fonts';
import {isAndroid} from '../utility/DeviceInfo';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

interface bottoSheet {
  onPress: any;
  title: string;
  loading?: boolean;
  setOpenSheet: any;
}

const BottomSheet: FC<bottoSheet> = ({onPress, loading, setOpenSheet}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [prority, setPrority] = useState(1);
  const [status, setStatus] = useState('');

  const slide = useRef(new Animated.Value(500)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const choosePriority = (pickPriority: number) => {
    setPrority(pickPriority);
  };

  const slideDown = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(slide, {
      toValue: 500,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    slideUp();
  });

  const closeModal = () => {
    slideDown();

    setTimeout(() => {
      setOpenSheet(false);
    }, 300);
  };

  return (
    <Pressable onPress={closeModal} style={styles.backDrop}>
      <Pressable style={styles.pressableArea}>
        <Animated.View
          style={[styles.bottomSheet, {transform: [{translateY: slide}]}]}>
          <InputText
            options={{
              value: title,
              onChangeText: t => setTitle(t),
              placeholder: 'Title',
            }}
            title="Title"
          />
          <InputText
            options={{
              value: desc,
              onChangeText: t => setDesc(t),
              placeholder: 'Description',
            }}
            title="Description"
          />
          <View style={styles.titlePosition}>
            <Text style={styles.titleFont}>Priority</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => choosePriority(1)}
              style={[
                styles.priorityBullet,
                {
                  backgroundColor: prority == 1 ? Colors.baseColor : 'white',
                },
              ]}>
              <Text
                style={{
                  color: prority == 1 ? 'white' : 'black',
                  fontFamily:
                    prority == 1 ? Fonts.poppinsBold : Fonts.poppinsMedium,
                }}>
                High
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => choosePriority(2)}
              style={[
                styles.priorityBullet,
                {
                  backgroundColor: prority == 2 ? Colors.baseColor : 'white',
                },
              ]}>
              <Text
                style={{
                  color: prority == 2 ? 'white' : 'black',
                  fontFamily:
                    prority == 2 ? Fonts.poppinsBold : Fonts.poppinsMedium,
                }}>
                Normal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => choosePriority(3)}
              style={[
                styles.priorityBullet,
                {
                  backgroundColor: prority == 3 ? Colors.baseColor : 'white',
                },
              ]}>
              <Text
                style={{
                  color: prority == 3 ? 'white' : 'black',
                  fontFamily:
                    prority == 3 ? Fonts.poppinsBold : Fonts.poppinsMedium,
                }}>
                Low
              </Text>
            </TouchableOpacity>
          </View>
          <InputText
            options={{
              value: status,
              onChangeText: t => setStatus(t),
              placeholder: 'Status',
            }}
            title="Status"
          />
          <View style={{marginTop: 15}}>
            <MainButton
              onPress={closeModal}
              loading={loading}
              title={'Add Task'}
            />
          </View>
        </Animated.View>
      </Pressable>
    </Pressable>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  backDrop: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'flex-end',
    zIndex: 4,
  },
  bottomSheet: {
    width: screenWidth,
    height: 500,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 4,
    alignItems: 'center',
    paddingTop: 35,
  },
  pressableArea: {
    width: '100%',
    height: isAndroid ? 550 : 500,
  },
  priorityBullet: {
    width: (screenWidth - 80) / 3,
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  titlePosition: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 30,
  },
  titleFont: {
    fontFamily: Fonts.poppinsMedium,
  },
});
