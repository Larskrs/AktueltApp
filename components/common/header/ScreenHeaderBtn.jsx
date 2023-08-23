import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../../../constants'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ background=COLORS.white, iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, {backgroundColor: background}]} onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
       />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn