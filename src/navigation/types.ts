import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  CommentsModal: undefined;
};

//TODO: remove this value
export type ImagePageProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;

export type NavigationUseType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationUseType>();
