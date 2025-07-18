import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { faker } from '@faker-js/faker';
import { Image, ImageBackground } from 'react-native';
import FreezeBtn from './FreezeBtn.jsx';
import YesBank from '../assets/icons/YesBank.jsx';
import YoloIcn from '../assets/icons/YoloIcn.jsx';
import CardNumLine from '../assets/icons/CardNumLine.jsx';
import EyeClosedIcn from '../assets/icons/EyeClosedIcn.jsx';
import CopyIcn from '../assets/icons/CopyIcn.jsx';
import RupayIcn from '../assets/icons/RupayIcn.jsx';

const CardSection = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [showFrozenImage, setShowFrozenImage] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const cardData = {
    number: faker.finance
      .creditCardNumber('####-####-####-####')
      .replace(/-/g, ' '),
    expiry: `${faker.date
      .future()
      .getMonth()
      .toString()
      .padStart(2, '0')}/${faker.date
      .future()
      .getFullYear()
      .toString()
      .slice(-2)}`,
    cvv: '***',
  };

  const formatCardNumber = number => number;
  const formatExpiry = expiry => expiry;
  const formatCVV = cvv => cvv;

  useEffect(() => {
    if (isFrozen) {
      setShowFrozenImage(true);
      scaleAnim.setValue(1.5);
      opacityAnim.setValue(0);
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowFrozenImage(false);
        scaleAnim.setValue(1);
      });
    }
  }, [isFrozen]);

  return (
    <View style={styles.cardSection}>
      <Text style={styles.cardSectionTitle}>YOUR DIGITAL DEBIT CARD</Text>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        {/* card */}
        <ImageBackground
          source={require('../assets/icons/CardBg.png')}
          style={styles.cardContainer}
        >
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <YoloIcn />
              <View style={{ marginTop: -5 }}>
                <YesBank />
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.cardNumberContainer}>
                <View style={styles.cardNumberLines}>
                  {formatCardNumber(cardData.number)
                    .split(' ')
                    .map((group, index, arr) => (
                      <View key={index} style={styles.cardNumRow}>
                        <Text style={styles.cardNumber}>{group}</Text>
                        {index !== arr.length - 1 && (
                          <View
                            style={{ position: 'absolute', top: 5, left: -10 }}
                          >
                            <CardNumLine />
                          </View>
                        )}
                      </View>
                    ))}
                </View>
              </View>

              <View style={styles.cardDetails}>
                <View style={styles.cardDetailItem}>
                  <Text style={styles.cardDetailLabel}>expiry</Text>
                  <Text style={styles.cardDetailValue}>
                    {formatExpiry(cardData.expiry)}
                  </Text>
                </View>
                <View style={styles.cardDetailItem}>
                  <Text style={styles.cardDetailLabel}>cvv</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text
                      style={[
                        styles.cardDetailValue,
                        { opacity: 0.4, fontSize: 30 },
                      ]}
                    >
                      {formatCVV(cardData.cvv)}
                    </Text>
                    <EyeClosedIcn />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.copyIcn}>
              <CopyIcn />
              <Text style={styles.copybtn}>copy details</Text>
            </View>
          </View>
          <View style={styles.rupayIcn}>
            <RupayIcn />
          </View>

          {/* card overlay */}
          <View style={[styles.cardContainer, { position: 'absolute' }]}>
            {showFrozenImage && (
              <Animated.Image
                source={require('../assets/icons/freezed.png')}
                style={[
                  styles.frozenOverlay,
                  {
                    transform: [{ scale: scaleAnim }],
                    opacity: opacityAnim,
                  },
                ]}
              />
            )}

            <Image
              source={require('../assets/icons/Unfreezed.png')}
              style={styles.cardOverlay}
            ></Image>
          </View>
        </ImageBackground>

        <FreezeBtn setIsFrozen={setIsFrozen} isFrozen={isFrozen} />
      </View>
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({
  cardSection: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  cardSectionTitle: {
    fontSize: 13,
    color: '#3D3D3D',
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 16,
    fontFamily: 'Poppins-Regular',
  },
  cardContainer: {
    width: 210,
    overflow: 'hidden',
    aspectRatio: 186 / 296,
    position: 'relative',
    borderRadius: 16,
  },
  card: {
    padding: 15,
    paddingHorizontal: 20,
  },
  cardFrozen: {
    opacity: 0.6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  copyIcn: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  copybtn: {
    fontSize: 14,
    color: '#aa0a0aff',
    fontFamily: 'Poppins-Regular',
  },
  rupayIcn: {
    marginLeft: 'auto',
    marginRight: 18,
    marginTop: 'auto',
    marginBottom: 15,
  },
  cardBank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  cardType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#60A5FA',
  },
  cardNumberContainer: {
    marginBottom: 14,
    width: '50%',
  },
  cardNumRow: {
    position: 'relative',
    justifyContent: 'center',
  },
  cardNumber: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
    fontFamily: 'ocr-a-std',
    letterSpacing: 2,
  },
  cardDetails: {
    width: '50%',
    justifyContent: 'space-between',
  },
  cardDetailItem: {
    flex: 1,
  },
  cardDetailLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  cardDetailValue: {
    fontSize: 25,
    color: '#FFF',
    fontFamily: 'monospace',
  },
  frozenOverlay: {
    width: 210,
    height: 334,
    resizeMode: 'cover',
  },
  cardOverlay: {
    width: 210,
    height: 334,
    opacity: 0.7,
    resizeMode: 'cover',
  },
  eyeButton: {
    padding: 8,
  },
  cardNumberLines: {
    flexDirection: 'column',
    gap: 4,
  },
});
