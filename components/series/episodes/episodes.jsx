import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Button, ScrollView } from 'react-native'
import useFetch from '../../../hook/useFetch';
import { EpisodeCard, MusicCard, SoundPlayer } from '../../';
import * as Progress from "react-native-progress"
import styles from './episodes.style'
import { ResizeMode, Video } from 'expo-av';
import Animated from 'react-native-reanimated';

let thumbnail = ""

const Episodes = ({id}) => {
  this.state = { 
    isFetching: false,
  }

  
  const renderItem = (item, posterSource, type) => {
    
    const router = useRouter();
    
    if (type == "album") {
      return (
      <MusicCard
        musicSource={item.file}
        posterSource={posterSource}
        type={type}
        title={item.title}
        onPress={() => {console.log("Selected", {item});
         if (current == item.id) {
          setCurrent(null)
         } else {
          setCurrent(item)
         }
        }}
        id={item.id}
        />
        )
      }
      
      return (
        <EpisodeCard
        videoSource={item.file}
        posterSource={posterSource}
        type={type}
        title={item.title}
        onPress={() => {}}
        id={item.id}
        />
        );
      }
      
      const [current, setCurrent] = useState(null)
      const [songProgress, setSongProgress] = useState(0)
      const music = useRef(null)
      const [status, setStatus] = React.useState({});
      const { data, isLoading, error, refetch} = useFetch(
        `/media/series/${id}`, {});
        
        thumbnail = data.thumbnails?.[0]
        
        const episodes = data?.episodes

        if (episodes == null) {
          return (<Text>Laster inn side...</Text>)
        }


        return (
          <Animated.View style={styles.container}>
            {current && (<>
            <Text>Du lytter på {current.title}</Text>
            {songProgress != 0 && songProgress != NaN && <Progress.Bar 
              progress={songProgress}
              width={200}
              /> }

            <Video
                ref={music}
                style={[styles.video]}
                source={{
                  uri: current.file,
                }}
                shouldPlay={true}
                onLoad={() => {
                  status.isPlaying ? music.current.pauseAsync() : music.current.playAsync();
                  // music.current.presentFullscreenPlayer()
                }}
                
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => {setStatus(() => status); console.log((status.positionMillis/status.durationMillis).toFixed(2)); 
                setSongProgress((status.positionMillis/status.durationMillis).toFixed(2))}}
                /> 
              </>
              )}
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

    </Animated.View>
  )

  
}



export default Episodes