import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Button, ScrollView } from 'react-native'
import useFetch from '../../../hook/useFetch';
import { EpisodeCard, MusicCard, SoundPlayer } from '../../';
import Slider from "react-native-slider"
import styles from './episodes.style'
import { ResizeMode, Video } from 'expo-av';
import Animated from 'react-native-reanimated';

let thumbnail = ""

const Episodes = ({id}) => {
  this.state = { 
    isFetching: false,
  }

  
  const renderItem = (item, posterSource, type, index) => {
    
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
          setCurrentIndex(index)
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
      const [currentIndex, setCurrentIndex] = useState(null)
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
            <Text>Du lytter på {currentIndex}</Text>
            {current && (<>
            <Text>Du lytter på {current.title}</Text>
            <Slider 
              value={songProgress}
              thumbStyle={{backgroundColor: "white", display: "flex", height: 32, width: 6}}
              minimumTrackTintColor="#fff"
              maximumTrackTintColor="rgba(0, 0, 0, .25)"
              thumbTintColor="rgba(0, 196, 239, 1)"
            />

            {current && <Video
                ref={music}
                style={[styles.video]}
                source={{
                  uri: current.file,
                }}
                shouldPlay={true}
                onLoad={() => {
                  console.log("Started loading video source");
                  status.isPlaying ? music.current.pauseAsync() : music.current.playAsync();
                  // music.current.presentFullscreenPlayer()
                }}
                
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                
                onPlaybackStatusUpdate={async status => {setStatus(() => status); 
                let _progress = status.positionMillis/status.durationMillis
                // console.log(_progress)
                if(isNaN(_progress)){
                  setSongProgress(0)
                 }else{
                  setSongProgress(_progress)
                 }
                 if (status.didJustFinish) {
                  console.log("Song ended.")
                    setSongProgress(0)
                    setCurrent(null)
                    setCurrentIndex(currentIndex + 1)
                    setCurrent(data[currentIndex])
                    console.log({file: current.file})
                    console.log({source: music.current.source})
                    
                 }
                }
              }
                /> }
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
        renderItem={(item) => renderItem(item.item, data.posters[0], data.type, item.index)}
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