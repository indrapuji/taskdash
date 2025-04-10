import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../styles/fonts';
import InputText from '../components/InputText';
import MainButton from '../components/MainButton';
import {RootScreenNavigationProp} from '../constant/stackTypes';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  const navigation = useNavigation<RootScreenNavigationProp>();

  const RegisterButton = () => {
    console.log('register');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/images/taskdask_icon.png')}
        />
        <Text style={styles.headlines}>Register</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputText
          options={{
            value: fullName,
            onChangeText: t => setFullName(t),
            placeholder: 'Full Name',
          }}
        />
        <InputText
          options={{
            value: phone,
            onChangeText: t => setPhone(t),
            placeholder: 'Phone',
            keyboardType: 'numeric',
          }}
        />
        <InputText
          options={{
            value: userName,
            onChangeText: t => setUserName(t),
            placeholder: 'Username',
          }}
        />
        <InputText
          options={{
            value: password,
            onChangeText: t => setPassword(t),
            secureTextEntry: true,
            placeholder: 'Password',
          }}
        />
        <InputText
          options={{
            value: verify,
            onChangeText: t => setVerify(t),
            secureTextEntry: true,
            placeholder: 'Verify Password',
          }}
        />
        <MainButton title={'Register'} onPress={RegisterButton} />
        <View style={styles.signUpContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 90,
    height: 90,
    margin: 10,
  },
  headlines: {
    fontSize: 25,
    fontFamily: Fonts.poppinsBold,
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
  },
  signUpText: {
    marginLeft: 5,
    color: '#7b4ccf',
    fontFamily: Fonts.poppinsSemibold,
  },
});
