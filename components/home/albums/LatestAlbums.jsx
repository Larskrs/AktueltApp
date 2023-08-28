import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react'
import { View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native'
import useFetch from '../../../hook/useFetch';
import AlbumCard from '../../common/cards/albumCard/AlbumCard';

import styles from './LatestAlbums.style'

const About = () => {

  const { data, isLoading, error, refresh} = useFetch(
    `/media/series?allowedTypes=album`, {});

  return (
    <>
      <Text style={styles.title}>Nyeste Album</Text>
      {!isLoading && <FlatList 
        renderItem={({item}) => renderItem(item)}
        data={data}
        contentContainerStyle={styles.contentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={true}
      /> }
    </>
  )
}

const renderItem = (item) => {

  const router = useRouter();
  return (
      <AlbumCard
        source={item?.posters?.[0]}
        placeholderText={item.title}
        onPress={() => router.push(`/series/${item.id}`)}
      />
  );
}

export default About