import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TextInputProps,
} from 'react-native';
import React, {FC} from 'react';

const screenWidth = Dimensions.get('screen').width;

interface Props {
  options: TextInputProps;
}

const InputText: FC<Props> = ({options}) => {
  return (
    <View>
      <TextInput style={styles.input} {...options} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    width: screenWidth - 60,
    padding: 10,
    borderRadius: 10,
    fontSize: 17,
  },
});
