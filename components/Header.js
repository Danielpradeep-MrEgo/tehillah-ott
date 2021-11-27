import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appTheme, FONTS} from '../constants/theme';
import {star} from '../constants/icons';

const Header = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Image source={star} style={{width: 25, height: 25}} />
      <Text style={[FONTS.body1, {color: 'white'}]}>Tehillah</Text>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/4a/9a/d4/4a9ad4ba6cac12904226abe29a421947.jpg',
        }}
        style={{width: 50, height: 40, borderRadius: 40}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
