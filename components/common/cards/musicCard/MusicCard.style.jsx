import { Platform, StyleSheet } from "react-native";

import { ASPECTS, COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({

    container: {
        width: "auto",
        // backgroundColor: 'rgba(0, 0, 0, 0.125)',
        padding: SIZES.xSmall,
        borderRadius: SIZES.xSmall,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        columnGap: SIZES.small,
        flex: 1,
    },
    image: {
        backgroundColor: '#0553',
        zIndex: 2,
        height: 75,
        aspectRatio: 16/9,
        borderRadius: SIZES.xSmall,
    },
    video: {
        backgroundColor: '#0553',
        zIndex: 2,
        width: 125,
        aspectRatio: 16/9,
        borderRadius: SIZES.xSmall,
        
    },
    placeholder_title: {
        color: COLORS.lightWhite,
        fontSize: SIZES.medium,
        zIndex: 1,
        width: 200,
        fontWeight: "700"
    },
    playButton: {
        backgroundColor: COLORS.white,
        padding: SIZES.small,
        width: 75,
        borderRadius: SIZES.small,
    }
  
});

export default styles;
