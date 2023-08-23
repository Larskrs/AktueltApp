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
import { useRouter } from 'expo-router';
import { Image } from "expo-image"
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

const News = () => {
    const { height, width } = useWindowDimensions();

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new _Animated.Value(0)).current;
    const slidesRef = useRef(null);

      const { data, isLoading, error, refresh} = useFetch(
        `/media/series`, {});

        const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
      

      const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
      }).current;
      const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

      let index=0;
      useEffect(() => {
        const interval = setInterval(() => {
          index += 1
          if (index > data.length -1) {
            index = 0;
          }
          slidesRef.current.scrollToIndex({index: (index)})
          
        }, 5000);
        return () => clearInterval(interval);
      }, []);
    

      const renderItem = (item, index) => {

        const router = useRouter();


        return (
            <View style={[styles.item(width)]} onPress={() => {router.push("/series/" + item.id)}}>
                <Image
                    source={item?.thumbnails?.[0]}
                    style={styles.imageContainer}
                    focusable={false}
                />
                <View style={styles.info}>
                  <Text style={styles.title} numberOfLines={2}>
                    { item.title } 
                  </Text>
                  { item.description && <Text style={styles.description} numberOfLines={2}>
                    { item.description } 
                  </Text> }
                </View>
            </View>
        );
    }

    return (
        <View>

            {/* <Text style={styles.pageTitle}></Text> */}
            <View style={styles.container}>
                <FlatList
                contentContainerStyle={styles.newsWrapper}
                layout={'default'}
                data={data}
                renderItem={({item, index}) => renderItem(item, index)}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={_Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  {
                    useNativeDriver: false,
                  })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                onScrollToTop={() => index = 0}
                ref={slidesRef}
                disableIntervalMomentum
                decelerationRate={0}
                />
                
        </View>
        </View>
    )
}

export default News;