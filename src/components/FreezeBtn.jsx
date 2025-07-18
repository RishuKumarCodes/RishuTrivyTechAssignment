import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FreezeIcn from '../assets/icons/FreezeIcn.jsx';

const FreezeBtn = ({ isFrozen, setIsFrozen }) => {
  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.freezeContainer} onPress={toggleFreeze}>
        <View
          style={[
            styles.freezeIcnWrapper,
            { backgroundColor: isFrozen ? '#EF4444' : '#323232' },
          ]}
        >
          <View style={styles.freezeButton}>
            <FreezeIcn color={isFrozen ? '#EF4444' : '#fff'} />
          </View>
        </View>
        <Text
          style={[styles.freezeLabel, { color: isFrozen ? '#EF4444' : '#fff' }]}
        >
          {isFrozen ? 'unfreeze' : 'freeze'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FreezeBtn;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 'auto',
    flex: 1,
    justifyContent: 'center',
  },
  freezeContainer: {
    marginBottom: 75,
    width: 58,
  },
  freezeIcnWrapper: {
    width: 59,
    height: 59,
    borderRadius: 84,
    padding: 1,
    paddingBottom: 0,
    paddingHorizontal: 0.4,
    marginBottom: 10,
  },
  freezeButton: {
    height: '100%',
    width: '100%',
    marginBottom: -3,
    backgroundColor: '#000',
    borderRadius: 84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freezeLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    textAlign: 'center',
  },
});
