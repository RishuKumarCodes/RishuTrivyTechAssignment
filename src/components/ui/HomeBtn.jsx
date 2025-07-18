import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeIcn from '../../assets/icons/HomeIcn';

const GinieBtn = () => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={[styles.IcnWrapper]}>
        <View style={styles.Button}>
          <HomeIcn color={'#555555'} />
        </View>
      </View>
      <Text style={[styles.Label]}>home</Text>
    </TouchableOpacity>
  );
};

export default GinieBtn;
const styles = StyleSheet.create({
  Container: {
    width: 44,
  },
  IcnWrapper: {
    width: 44,
    height: 44,
    borderRadius: 84,
    padding: 1,
    backgroundColor: '#252525',
    paddingBottom: 0,
    paddingHorizontal: 0.4,
  },
  Button: {
    height: '100%',
    width: '100%',
    marginBottom: -3,
    backgroundColor: '#000',
    borderRadius: 84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,

    color: '#555555',
    textAlign: 'center',
  },
});
