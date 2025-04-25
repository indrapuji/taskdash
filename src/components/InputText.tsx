import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TextInputProps,
} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../styles/fonts';

const screenWidth = Dimensions.get('screen').width;

interface Props {
  options: TextInputProps;
  title?: string;
}

const InputText: FC<Props> = ({options, title}) => {
  return (
    <View>
      {title && (
        <View style={styles.titleText}>
          <Text style={styles.titleFont}>{title}</Text>
        </View>
      )}
      <TextInput style={styles.input} {...options} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 7,
    marginTop: 5,
  },
  titleFont: {
    fontFamily: Fonts.poppinsMedium,
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    width: screenWidth - 60,
    padding: 10,
    borderRadius: 10,
    fontSize: 17,
    fontFamily: Fonts.poppinsMedium,
  },
});
