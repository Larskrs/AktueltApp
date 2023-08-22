import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import styles from "./News.style";
import useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router';
import { Image } from "expo-image"

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const News = () => {
    const carouselRef = useRef(null);

    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
      });

    useEffect(() => {
      const subscription = Dimensions.addEventListener(
        'change',
        ({window, screen}) => {
          setDimensions({window, screen});
        },
      );
      return () => subscription?.remove();
    });
    
    
    // const data = [
    //     {title: "Desperados, Banditos & Litagos - Kommer Desember 2023", thumbnail: "https://i.gyazo.com/8a452238e47a596ad2558bb71369bac1.gif"},
    //     {title: "Papparau - Ny Episode", thumbnail: "http://aktuelt.tv/_next/image?url=https%3A%2F%2Fgyazo.com%2Ff12284bee733a43ccbda32243e30363e.jpg&w=3840&q=75"},
        
    // ]

    const { data, isLoading, error, refresh} = useFetch(
        `/media/series`, {});

        const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
      

    const renderItem = (item) => {

        const router = useRouter();

        return (
            <View style={styles.item(screenDimensions.width)} onPress={() => {router.push("/series/" + item.id)}}>
                <Image
                    source={item?.thumbnails?.[0]}
                    style={styles.imageContainer}
                    focusable={false}

                    
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }

    return (
        <View>

            <Text style={styles.pageTitle}>Videoer</Text>
            <View style={styles.container}>
                <Carousel
                ref={carouselRef}
                layout={'default'}
                data={data}
                sliderWidth={screenDimensions.width}
                sliderHeight={250}
                itemHeight={250}
                itemWidth={screenDimensions.width}
                renderItem={({item}) => renderItem(item)}
                loop={true}
                autoplay={true}
                />
        </View>
        </View>
    )
}

export default News;