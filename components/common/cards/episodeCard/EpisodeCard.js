
import * as React from 'react';
import { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Image } from "react-native"
import { Video, ResizeMode } from 'expo-av';
import styles from './EpisodeCard.style.jsx'
import { COLORS } from '../../../../constants';

const MediaCard = ({
    title="",
    videoSource="",
    posterSource="",
    onPress=() => {},
    type="video",
    
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

            <Video
                
              ref={video}
              style={[styles.video, {display: (type != 'video' ? "none" : "flex")}]}
              source={{
                uri: videoSource,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              posterSource={posterSource}
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

              <Text style={styles.placeholder_title}>
                  {title}
              </Text>
            <View style={styles.buttons}>
                    <Pressable
                      style={styles.playButton}
                      onPress={() => {
                          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
                          video.current.presentFullscreenPlayer()
                        }
                      }
                    ><Text style={{textAlign: "center", fontWeight: "700"}}>{status.isPlaying ? 'Pause' : 'Play'}</Text></Pressable>
                  </View>
        </TouchableOpacity>
    );
}

export default MediaCard