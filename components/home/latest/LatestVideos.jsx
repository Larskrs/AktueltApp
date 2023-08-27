import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import useFetch from '../../../hook/useFetch';
import MediaCard from '../../common/cards/mediaCard/MediaCard';

import styles from './LatestVideos.style'

const About = () => {

  const { data, isLoading, error, refresh} = useFetch(
    `/media/series`, {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nyeste Utgaver</Text>
      {!isLoading && <FlatList 
        renderItem={({item}) => renderItem(item)}
        data={data}
        contentContainerStyle={styles.contentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={true}
      /> }
    </View>
  )
}

const renderItem = (item) => {

  const router = useRouter();
  return (
      <MediaCard
        source={item?.posters?.[0]}
        placeholderText={item.title}
      />
  );
}

export default About