import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react'
import { View, Text, FlatList, SafeAreaView, Button } from 'react-native'
import useFetch from '../../../hook/useFetch';
import { EpisodeCard } from '../../';

import styles from './episodes.style'

let thumbnail = ""

const Episodes = ({id}) => {

  const { data, isLoading, error, refetch} = useFetch(
    `/media/series/${id}`, {});

    thumbnail = data.thumbnails?.[0]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Episoder</Text>
      <Button 
        title={"Refresh Episodes"}
        onPress={() => {
            refetch();
        }}
      />
      {!isLoading && <FlatList 
        renderItem={({item}) => renderItem(item)}
        data={data.episodes}
        contentContainerStyle={styles.contentContainer}
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
      <EpisodeCard
        videoSource={item.file}
        title={item.title}
        onPress={() => {}}
      />
  );
}

export default Episodes