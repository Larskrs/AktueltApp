import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  Image,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import styles from "./News.style";

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
    
    
    const data = [
        {title: "Desperados, Banditos & Litagos - Kommer Desember 2023", thumbnail: "https://i.gyazo.com/8a452238e47a596ad2558bb71369bac1.gif"},
        {title: "Papparau - Ny Episode", thumbnail: "http://aktuelt.tv/_next/image?url=https%3A%2F%2Fgyazo.com%2Ff12284bee733a43ccbda32243e30363e.jpg&w=3840&q=75"},
        
    ]

    const renderItem = (item) => {
        return (
            <View style={styles.item(screenDimensions.width)}>
                <Image
                    source={{uri: item.thumbnail}}
                    style={styles.imageContainer}
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }

    return (
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
                hasParallaxImages={true}
                loop={true}
                autoplay={true}
                autoplayInterval={5000}
                autoplayDelay={5000}
                automaticallyAdjustContentInsets={true}
                indicatorStyle={"white"}
                fadingEdgeLength={0.5}
                enableMomentum={true}
                snapToAlignment={"center"}
                scrollEnabled={true}
            />
        </View>
    )
}

export default News;