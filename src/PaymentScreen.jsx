import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import CardSection from './components/CardSection';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Header />
      <CardSection />
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default PaymentScreen;
