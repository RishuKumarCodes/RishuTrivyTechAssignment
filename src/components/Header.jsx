import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>select payment mode</Text>
        <Text style={styles.headerSubtitle}>
          choose your preferred payment method to make payment.
        </Text>
      </View>

      <View style={styles.togglesContainer}>
        <View
          style={[
            styles.toggleButtonContainer,
            {
              backgroundColor: '#fff',
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.toggleButton,
              {
                paddingVertical: 10,
                marginHorizontal: 0.8,
              },
            ]}
          >
            <Text style={styles.payText}>pay</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.toggleButtonContainer,
            {
              backgroundColor: '#A90808',
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.toggleButton,
              {
                marginTop: 2.5,
              },
            ]}
          >
            <Text style={styles.cardText}>card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  togglesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 32,
    marginTop:18
  },
  toggleButtonContainer: {
    borderRadius: 50,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
    backgroundColor: '#fff',
  },
  toggleButton: {
    paddingHorizontal: 35,
    paddingVertical: 9,
    borderRadius: 50,
    marginTop: 0.5,
    marginHorizontal: 1.5,

    alignItems: 'center',
    minWidth: 100,
    marginBottom: -0.65,
    backgroundColor: '#000',
  },

  payText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  cardText: {
    color: '#A90808',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});
