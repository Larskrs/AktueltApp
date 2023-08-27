import React, {useRef, useState, useEffect} from 'react';
// import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
  FlatList,
  ScrollView,
  Dimensions,
  Animated as _Animated,
} from 'react-native';
import styles from "./News.style";
import useFetch from '../../../hook/useFetch';
import useInfiniteFetch from '../../../hook/useInfiniteFetch';
import { useRouter } from 'expo-router';
import { Image } from "expo-image"
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { SIZES } from '../../../constants';

const News = () => {
    const { height, width } = useWindowDimensions();

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollX = useRef(new _Animated.Value(0)).current;
    const slidesRef = useRef(null);

      const { data, isLoading, error, refresh} = useFetch(
        `/media/articles?limit=3&order=new`, {});

        const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
      

      const viewableItemsChanged = useRef(({ viewableItems }) => {
        // console.log(viewableItems[0].index, "Is viewable index")
        // setActiveIndex(viewableItems?.[0]?.index);
      }).current;
      const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

      // Auto Scroll
      
      // Infinite Scroll

      useEffect(() => {

        // if activeIndex === last index -> Jump back to first index
        // else 

        let interval = setInterval(() => {
          if (activeIndex === data.length -1) {
            slidesRef.current.scrollToIndex({
              index: 0,
              animation: true
            })
            return;
          } 
            slidesRef.current.scrollToIndex({
              index: activeIndex + 1,
              animation: true
            })
          
        }, 8000)
        return () => clearInterval(interval)
      })

      // useEffect(() => {

      //   // if activeIndex === last index -> Jump back to first index
      //   // else 

      //   let interval = setInterval(() => {
      //     if (activeIndex === data.length -1) {
      //       slidesRef.current.scrollToIndex({
      //         index: 0,
      //         animation: true
      //       })
      //     } else {
      //       slidesRef.current.scrollToIndex({
      //         index: activeIndex + 1,
      //         animation: true
      //       })
      //     }
      //   }, 2000)
      //   return () => clearInterval(interval)
      // })

      const getItemLayout = (data, index) => ({
        length: width,
        offset: (width - (SIZES.medium*2)) * index,
        index: index,
      })
    

      const renderItem = (item, index) => {

        const router = useRouter();


        return (
            <View style={[styles.item(width)]} onPress={() => {router.push("/series/" + item.id)}}>
                <Image
                    source={item?.thumbnail}
                    style={styles.imageContainer}
                    focusable={false}
                />
                <View style={styles.info({position: item.display.position, maxWidth: item.display?.maxWidth})}>
                  <Text style={styles.title} numberOfLines={2}>
                    { item.headers.title } 
                  </Text>
                  { item.headers.sub_header && <Text style={styles.description} numberOfLines={2}>
                    { item.headers.sub_header } 
                  </Text> }
                </View>
            </View>
        );
    }

    const scrollAnimationHandler = (event) => {
      // _Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
      //   {
      //     useNativeDriver: false,
      //   })
    }
    const handleScroll = (event) => {
      
      // Get scroll position
      const scrollPos = event.nativeEvent.contentOffset.x
      const itemWidth = width - SIZES.medium*2
      const index = scrollPos / itemWidth
      
      if (index % 1 != 0) { // can it be divided by itself? {
        // index is not a whole number, therefore is not a valid index.
        return;
      }

      
      console.log({index})
      setActiveIndex(index)
      if (activeIndex === data.length - 2) {
        
      }

    }

    return (
        <View>
            <View style={styles.container}>
                <FlatList
                contentContainerStyle={styles.newsWrapper}
                layout={'default'}
                data={data}
                renderItem={({item, index}) => renderItem(item, index)}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                getItemLayout={getItemLayout}
                bounces={false}
                keyExtractor={(item, index) => index}
                onScroll={(event) => {handleScroll(event); scrollAnimationHandler(event)}}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                ref={slidesRef}
                disableIntervalMomentum
                decelerationRate={0}
                />
                
        </View>
        </View>
    )
}

export default News;