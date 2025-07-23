import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import YoloPayIcn from '../../assets/icons/YoloPayIcn';

const YoloPay = ({ active, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={onPress}
      activeOpacity={0}
    >
      <View style={[styles.IcnWrapper, active && { backgroundColor: '#fff' }]}>
        <View style={styles.Button}>
          <View style={{ opacity: active ? 1 : 0.3 }}>
            <YoloPayIcn />
          </View>
        </View>
      </View>
      <Text style={[styles.Label, active && { color: '#fff' }]}>yolo pay</Text>
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
