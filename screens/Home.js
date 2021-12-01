import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import HighlightMovies from '../components/HighlightMovies';
import Movies from '../components/Movies/Movies';
import {COLORS, SIZES} from '../constants/theme';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* <Header /> */}
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <HighlightMovies />
        <Movies titleCaption={'Continue Watching'} />
        <Movies titleCaption={'Newly Added'} />
        <Movies titleCaption={'Popular Shows'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
