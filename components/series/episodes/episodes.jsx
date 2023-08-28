import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react'
import { View, Text, FlatList, SafeAreaView, Button, ScrollView } from 'react-native'
import useFetch from '../../../hook/useFetch';
import { EpisodeCard } from '../../';

import styles from './episodes.style'

let thumbnail = ""

const Episodes = ({id}) => {
  this.state = { 
    isFetching: false,
}


  const { data, isLoading, error, refetch} = useFetch(
    `/media/series/${id}`, {});

    thumbnail = data.thumbnails?.[0]

    const episodes = data?.episodes

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.type == "album" ? "Sanger" : "Episoder"}</Text>
      {/* {!isLoading && <FlatList 
        renderItem={({item}) => renderItem(item, data.posters[0], data.type)}
        data={data.episodes}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        onRefresh={() => refetch()}
        refreshing={this.state.isFetching}
        bounces={false}
        ListFooterComponent={<View style={{height: 200}}/>}
      /> } */}

    {!isLoading && <FlatList 
        renderItem={({item}) => renderItem(item, data.posters[0], data.type)}
        data={data.episodes}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={true}
        ScrollEnabled={false}
        
      /> }  

    </View>
  )
}
const renderItem = (item, posterSource, type) => {

  const router = useRouter();
  return (
      <EpisodeCard
        videoSource={item.file}
        posterSource={posterSource}
        type={type}
        title={item.title}
        onPress={() => {}}
      />
  );
}


export default Episodes