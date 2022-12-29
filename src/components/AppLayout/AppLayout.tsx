import {ReactElement, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {setNetworkStatus} from '../../store/slices';
import {useAppDispatch} from '../../store/store';
import React from 'react';
import {NetworkStatusBanner} from '../NetworkStatusBanner/NetworkStatusBanner';
import {useNetInfo} from '@react-native-community/netinfo';

export const AppLayout = ({children}: {children: ReactElement}) => {
  const netWorkInfo = useNetInfo();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNetworkStatus(netWorkInfo.isConnected));
  }, [netWorkInfo]);

  return (
    <SafeAreaView style={styles.container}>
      {!netWorkInfo.isConnected ? <NetworkStatusBanner /> : null}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
