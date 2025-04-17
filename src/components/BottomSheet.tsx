import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import React, {FC, useState, useRef} from 'react';
import MainButton from './MainButton';
import InputText from './InputText';

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
  const [prority, setPrority] = useState('');
  const [status, setStatus] = useState('');

  const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slide, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(slide, {
      toValue: 350,
      duration: 300,
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
      <Pressable style={{width: '100%', height: screenHeight / 2.3}}>
        <Animated.View
          style={[styles.bottomSheet, {transform: [{translateY: slide}]}]}>
          <InputText
            options={{
              value: title,
              onChangeText: t => setTitle(t),
              secureTextEntry: true,
              placeholder: 'Title',
            }}
          />
          <InputText
            options={{
              value: desc,
              onChangeText: t => setDesc(t),
              secureTextEntry: true,
              placeholder: 'Description',
            }}
          />
          <InputText
            options={{
              value: prority,
              onChangeText: t => setPrority(t),
              secureTextEntry: true,
              placeholder: 'Priority',
            }}
          />
          <InputText
            options={{
              value: status,
              onChangeText: t => setStatus(t),
              secureTextEntry: true,
              placeholder: 'Status',
            }}
          />
          <View style={{marginTop: 15}}>
            <MainButton
              onPress={onPress}
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
    height: screenHeight / 2.3,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 4,
    alignItems: 'center',
    paddingTop: 35,
  },
});
