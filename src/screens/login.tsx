import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../styles/fonts';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';
import MainButton from '../components/MainButton';
import {RootScreenNavigationProp} from '../constant/stackTypes';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<RootScreenNavigationProp>();

  console.log(userName);

  const loginButton = () => {
    console.log('login');
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
        <Text style={styles.headlines}>Welcome to TaskDash</Text>
        <Text style={styles.subtext}>
          Organize your day, one task at a time
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <InputText
          options={{
            value: userName,
            onChangeText: t => setUserName(t),
            placeholder: 'username',
          }}
        />
        <InputText
          options={{
            value: password,
            onChangeText: t => setPassword(t),
            secureTextEntry: true,
            placeholder: 'password',
          }}
        />
        <MainButton title={'Login'} onPress={loginButton} />
        <View style={styles.signUpContainer}>
          <Text>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
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
  subtext: {
    fontSize: 15,
    fontFamily: Fonts.poppinsRegular,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  signUpText: {
    marginLeft: 5,
    color: '#7b4ccf',
    fontFamily: Fonts.poppinsSemibold,
  },
});
