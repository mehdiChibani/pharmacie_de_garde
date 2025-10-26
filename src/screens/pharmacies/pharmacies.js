import React from 'react';
import { Text, View, ScrollView, Dimensions, StyleSheet } from 'react-native';

import styles from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const screenWidth = Dimensions.get('window').width;
import HomePremiumCarousel from './components/home-premium-carousel';
import CitiesAnnouces from './components/cities-annouces';
import { scale } from '../../styles/scaling';
import Categories from './components/categories';
import AnnouncesList from './components/announces-list';

export default props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>pharmacies</Text>
    </ScrollView>
  );
};
