import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurvedNavbarLine from '../assets/icons/CurvedNavbarLine';
import YoloPayBtn from './ui/YoloPay';
import GinieBtn from './ui/GinieBtn';
import HomeBtn from './ui/HomeBtn';

export default function BottomNavigation({ state, navigation }) {
  const currentRoute = state.routes[state.index].name;

  return (
    <View style={styles.bottomNav}>
      <HomeBtn
        active={currentRoute === 'Home'}
        onPress={() => navigation.navigate('Home')}
      />
      <YoloPayBtn
        active={currentRoute === 'Payment'}
        onPress={() => navigation.navigate('Payment')}
      />
      <GinieBtn
        active={currentRoute === 'Ginie'} 
        onPress={() => navigation.navigate('Ginie')}
      />

      <View style={styles.navbarCurve}>
        <CurvedNavbarLine />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'relative',
    backgroundColor:"#000",
    height: 108,
    paddingHorizontal: 34,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingBottom: 12,
  },
  navbarCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
