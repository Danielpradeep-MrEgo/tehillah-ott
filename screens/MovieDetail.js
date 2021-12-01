import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {left_arrow, upload} from '../constants/icons';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from './../components/Movies/ProgressBar';

const MovieDetail = ({route}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    let {selectedMovie} = route?.params;
    setSelectedMovie(selectedMovie);
  }, []);

  const MovieDetailsHeader = () => {
    return (
      <ImageBackground
        source={{uri: selectedMovie?.picture}}
        resizeMode="cover"
        style={{
          width: '100%',
          height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
        }}
        resizeMode="cover">
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Platform.OS === 'ios' ? 40 : 20,
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                height: 45,
                borderRadius: 20,
                backgroundColor: COLORS.transparentBlack,
              }}
              onPress={() => navigation.goBack()}>
              <Image
                source={left_arrow}
                style={{width: 18, height: 18, tintColor: COLORS.white}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                height: 45,
                borderRadius: 20,
                backgroundColor: COLORS.transparentBlack,
              }}
              onPress={() => console.log('share')}>
              <Image
                source={upload}
                style={{width: 20, height: 20, tintColor: COLORS.white}}
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['transparent', '#000']}
              style={{
                width: '100%',
                height: 150,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  marginTop: SIZES.base,
                  color: COLORS.white,
                  ...FONTS.h1,
                  fontWeight: 'bold',
                }}>
                {selectedMovie?.caption}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{flex: 1, backgroundColor: COLORS.black}}
      style={{backgroundColor: COLORS.black}}>
      {MovieDetailsHeader()}

      <View style={{margin: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              flex: 1,
              color: COLORS.white,
              ...FONTS.h4,
              fontWeight: '700',
            }}>
            {selectedMovie?.caption}
          </Text>
          <Text
            style={{
              color: COLORS.lightGray,
              ...FONTS.body4,
              fontWeight: '700',
            }}>
            {selectedMovie?.duration}
          </Text>
        </View>

        <ProgressBar
          containerStyle={{marginTop: SIZES.radius}}
          barStyle={{height: 3}}
          barPercentage={selectedMovie?.overallProgress}
        />

        <TouchableOpacity
          style={{
            marginVertical: 30,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: Platform.OS === 'ios' ? SIZES.padding * 2 : 0,
            borderRadius: 15,
            backgroundColor: COLORS.primary,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>
            {selectedMovie?.overallProgress == '0%'
              ? 'WATCH NOW'
              : 'CONTINUE WATCHING'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
