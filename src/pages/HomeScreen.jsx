import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to YoloPay</Text>
        <Text style={styles.headerSubtitle}>
          Your one‑stop app for fast, secure payments.
        </Text>
      </View>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₹ 8,450.00</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  balanceCard: {
    borderWidth: 2,
    borderColor: '#303030ff',
    marginHorizontal: 28,
    marginVertical: 18,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 6,
    fontFamily: 'Poppins-Regular',
  },
  balanceAmount: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
});
