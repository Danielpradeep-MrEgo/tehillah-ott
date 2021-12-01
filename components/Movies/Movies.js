import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import {right_arrow} from '../../constants/icons';
import cards from './Cards';
import {useNavigation} from '@react-navigation/core';
import ProgressBar from './ProgressBar';

const Movies = ({titleCaption}) => {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 24}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 24,
          alignItems: 'center',
        }}>
        <Text style={{flex: 1, color: COLORS.white, ...FONTS.h3}}>
          {titleCaption}
        </Text>

        <Image
          source={right_arrow}
          style={{width: 15, height: 15, tintColor: COLORS.primary}}
        />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: SIZES.padding}}
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('MovieDetails', {selectedMovie: item})
              }>
              <View
                style={{
                  marginLeft: index == 0 ? SIZES.padding : 20,
                  marginRight: index == cards.length - 1 ? SIZES.padding : 0,
                }}>
                <Image
                  source={{uri: item?.picture}}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width / 3,
                    height: SIZES.width / 3 + 60,
                    borderRadius: 20,
                  }}
                />

                <Text
                  style={{
                    marginTop: SIZES.base,
                    color: COLORS.white,
                    ...FONTS.h4,
                    fontWeight: 'bold',
                  }}>
                  {item?.caption}
                </Text>

                <ProgressBar
                  containerStyle={{marginTop: SIZES.radius}}
                  barStyle={{height: 3}}
                  barPercentage={item?.overallProgress}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
