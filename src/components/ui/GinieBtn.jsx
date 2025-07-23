import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GineIcn from '../../assets/icons/GinieIcn';

const GinieBtn = ({ active, onPress }) => {
  const iconColor = active ? '#fff' : '#555555';
  const wrapperBg = active ? '#fff' : '#252525';
  const labelColor = active ? '#fff' : '#555555';

  return (
    <TouchableOpacity style={styles.Container} onPress={onPress}>
      <View style={[styles.IcnWrapper, { backgroundColor: wrapperBg }]}>
        <View style={styles.Button}>
          <GineIcn color={iconColor} />
        </View>
      </View>
      <Text style={[styles.Label, { color: labelColor }]}>gine</Text>
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
    textAlign: 'center',
  },
});
