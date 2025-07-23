import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View, Text } from 'react-native';

const GineScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ginie Assistant</Text>
        <Text style={styles.headerSubtitle}>
          Your smart AI-powered assistant.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Try asking something like:</Text>
        <Text style={styles.cardPrompt}>“What’s the weather today?”</Text>
      </View>
    </SafeAreaView>
  );
};

export default GineScreen;

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
  card: {
    marginHorizontal: 28,
    marginVertical: 18,
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#303030ff',
    backgroundColor: '#111111',
  },
  cardTitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  cardPrompt: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Poppins-Medium',
  },
});
