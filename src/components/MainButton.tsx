import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../styles/fonts';
import {Colors} from '../styles/colors';

const screenWidth = Dimensions.get('screen').width;

interface mainButton {
  onPress: any;
  title: string;
  loading?: boolean;
}

const MainButton: FC<mainButton> = ({onPress, title, loading}) => {
  return (
    <TouchableOpacity
      style={[styles.button, loading && {opacity: 0.5}]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.baseColor,
    height: 50,
    margin: 10,
    width: screenWidth - 60,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: Fonts.poppinsBold,
  },
});
