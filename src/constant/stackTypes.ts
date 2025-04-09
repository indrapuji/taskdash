import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RootScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
  'Login', 'Register'
>;