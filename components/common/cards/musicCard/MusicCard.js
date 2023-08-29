
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from "react-native"
import { Video, ResizeMode } from 'expo-av';
import styles from './MusicCard.style.jsx'
import { COLORS } from '../../../../constants';
import * as Progress from "react-native-progress"

const MediaCard = ({
    id=0,
    title="",
    onPress=null,
    videoSource="",
    posterSource="",
    type="video",
    
}) => {

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  

    const [views,setViews] = useState()
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
              style={[styles.video, {display: (type == 'album' ? "none" : "flex")}]}
              source={{
                uri: videoSource,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              posterSource={posterSource}
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            {type == "album" && <Image 
              style={[styles.image, {aspectRatio: 1/1}]}
              source={{uri: posterSource}}
            /> }
            <View>

              <Text style={styles.placeholder_title}>
                  {title} {"\n"} {views}
              </Text>
              
            </View>

        </TouchableOpacity>
    );
}

export default MediaCard