import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
};

export type NavigationUseType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationUseType>();
