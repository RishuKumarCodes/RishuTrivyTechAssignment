import { StyleSheet, View } from 'react-native';
import React from 'react';
import CurvedNavbarLine from '../assets/icons/CurvedNavbarLine';
import YoloPay from './ui/YoloPay';
import GinieBtn from './ui/GinieBtn';
import HomeBtn from './ui/HomeBtn';

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNav}>
      <HomeBtn />
      <YoloPay />
      <GinieBtn />

      <View style={styles.navbarCurve}>
        <CurvedNavbarLine />
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNav: {
    position: 'relative',
    height: 108,
    paddingHorizontal: 34,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingBottom: 12,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#FFF',
  },
  navbarCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
