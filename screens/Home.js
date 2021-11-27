import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import HighlightMovies from '../components/HighlightMovies';
import {COLORS, SIZES} from '../constants/theme';

const Home = () => {
  // const scrollDots = () => {
  //   const dotPosition = Animated.divide(translateX, SIZES.width);

  //   return (
  //     <View
  //       style={{
  //         marginTop: SIZES.padding,
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}>
  //       {data.map((item, index) => {
  //         const opacity = dotPosition.interpolate({
  //           inputRange: [index - 1, index, index + 1],
  //           outputRange: [0.3, 1, 0.3],
  //           extrapolate: CLAMP,
  //         });

  //         const dotWidth = dotPosition.interpolate({
  //           inputRange: [index - 1, index, index + 1],
  //           outputRange: [6, 20, 6],
  //           extrapolate: CLAMP,
  //         });

  //         const dotColor = dotPosition.interpolate({
  //           inputRange: [index - 1, index, index + 1],
  //           outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
  //           extrapolate: CLAMP,
  //         });

  //         return (
  //           <Animated.View
  //             key={index}
  //             opacity={opacity}
  //             style={{
  //               borderRadius: SIZES.radius,
  //               marginHorizontal: 3,
  //               width: dotWidth,
  //               height: 6,
  //               backgroundColor: dotColor,
  //             }}></Animated.View>
  //         );
  //       })}
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* <Header /> */}
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <HighlightMovies />
        {/* {scrollDots()} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
