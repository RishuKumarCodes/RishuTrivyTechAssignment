import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import YoloPayIcn from '../../assets/icons/YoloPayIcn';

const YoloPay = () => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={[styles.IcnWrapper]}>
        <View style={styles.Button}>
          <YoloPayIcn />
        </View>
      </View>
      <Text style={[styles.Label]}>yolo pay </Text>
    </TouchableOpacity>
  );
};

export default YoloPay;
const styles = StyleSheet.create({
  Container: {
    width: 54,
  },
  IcnWrapper: {
    width: 55,
    height: 55,
    borderRadius: 84,
    padding: 1,
    backgroundColor: '#fff',
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

    color: '#fff',
    textAlign: 'center',
  },
});
