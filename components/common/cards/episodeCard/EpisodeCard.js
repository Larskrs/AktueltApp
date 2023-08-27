
import * as React from 'react';
import { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Image } from "react-native"
import { Video, ResizeMode } from 'expo-av';
import styles from './EpisodeCard.style.jsx'

const MediaCard = ({
    title="",
    videoSource="",
    onPress=() => {},

    
}) => {

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  


    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* <Image
                source={{uri: source}}
                style={styles.image}
                focusable={false}
                contentFit="cover"
                placeholder={blurhash}
                transition={5000}
                placeholderContentFit="cover"
            /> */}

            <Text style={styles.placeholder_title}>
                {title}
            </Text>
            <Video
                
              ref={video}
              style={styles.video}
              source={{
                uri: videoSource,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            <View style={styles.buttons}>
                    <Button
                      title={status.isPlaying ? 'Pause' : 'Play'}
                      onPress={() => {
                          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
                          video.current.presentFullscreenPlayer()
                        }
                      }
                    />
                  </View>
        </TouchableOpacity>
    );
}

export default MediaCard