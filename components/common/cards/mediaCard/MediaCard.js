

import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native"
import styles from './MediaCard.style.jsx'

const MediaCard = ({
    placeholderText="",
    source=({}),
    onPress=() => {},

    
}) => {

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                source={{uri: source}}
                style={styles.image}
                focusable={false}
                contentFit="cover"
                placeholder={blurhash}
                transition={5000}
                placeholderContentFit="cover"
            />
            <Text style={styles.placeholder_title}>
                {placeholderText}
            </Text>
        </TouchableOpacity>
    );
}

export default MediaCard