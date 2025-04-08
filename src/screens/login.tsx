import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../styles/fonts';
import InputText from '../components/InputText';

const screenWidth = Dimensions.get('screen').width;

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  console.log(userName);

  return (
    <View style={styles.container}>
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
            placeholder: 'password',
          }}
        />
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
        <View style={styles.signUpContainer}>
          <Text>Don’t have an account?</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7b4ccf',
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
