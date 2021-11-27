import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
// import Animated, {
//   useAnimatedScrollHandler,
//   useSharedValue,
// } from 'react-native-reanimated';
import {play} from '../constants/icons';

// import {newSeason} from '../constants/dummy';
import {COLORS, SIZES, FONTS} from '../constants/theme';

const HighlightMovies = () => {
  // const translateX = useSharedValue(0);
  // const onScroll = useAnimatedScrollHandler({
  //   onScroll: event => {
  //     translateX.value = event.contentOffset.x;
  //   },
  // });

  const translateX = useRef(new Animated.Value(0)).current;
  const data = [
    {
      id: 1,
      thumbnail:
        'https://www.kolpaper.com/wp-content/uploads/2020/05/DJ-Marshmello-Wallpaper-Iphone.jpg',
    },
    {
      id: 2,
      thumbnail:
        'https://1.bp.blogspot.com/-mOzzXFZ4ST4/XkM4ytaOL7I/AAAAAAAAnAo/jZvVMs_hKv4HBVKqHa7eqfkrEecMIAGiwCLcBGAsYHQ/s2560/marshmello-2020-j6-1080x1920.jpg',
    },
    {
      id: 3,
      thumbnail:
        'https://i.pinimg.com/736x/4a/9a/d4/4a9ad4ba6cac12904226abe29a421947.jpg',
    },
    {
      id: 4,
      thumbnail:
        'https://i.pinimg.com/736x/4a/9a/d4/4a9ad4ba6cac12904226abe29a421947.jpg',
    },
  ];

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  const scrollDots = () => {
    const dotPosition = Animated.divide(translateX, SIZES.width);

    return (
      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {data.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 20, 6],
            extrapolate: 'clamp',
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              opacity={opacity}
              style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 3,
                width: dotWidth,
                height: 6,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <Animated.View>
      <AnimatedFlatList
        style={{zIndex: 1}}
        horizontal
        pagingEnabled={true}
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: translateX}}}],
          {useNativeDriver: false},
        )}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback>
              <View
                style={{
                  width: SIZES.width,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ImageBackground
                  source={{uri: item.thumbnail}}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width * 0.85,
                    height: (SIZES.height * 0.85) / 2,
                    justifyContent: 'flex-end',
                  }}
                  imageStyle={{borderRadius: 40}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 60,
                      width: '100%',
                      marginBottom: SIZES.radius,
                      paddingHorizontal: SIZES.radius,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: COLORS.transparentWhite,
                          }}>
                          <Image
                            source={play}
                            resizeMode="contain"
                            style={{
                              width: 15,
                              height: 15,
                              tintColor: COLORS.white,
                            }}
                          />
                        </View>
                      </TouchableOpacity>

                      <Text
                        style={{
                          marginLeft: SIZES.base,
                          color: COLORS.white,
                          ...FONTS.h3,
                        }}>
                        Play Now
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
      {scrollDots()}
    </Animated.View>
  );
};

export default HighlightMovies;

const styles = StyleSheet.create({});
