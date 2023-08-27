import { Platform, StyleSheet } from "react-native";

import { ASPECTS, COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({

    container: {
        width: "auto",
        // backgroundColor: COLORS.primary,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        columnGap: SIZES.small,
    },
    image: {
        backgroundColor: '#0553',
        zIndex: 2,
        width: 150,
        aspectRatio: 16/9,
        borderRadius: SIZES.xSmall,
    },
    video: {
        backgroundColor: '#0553',
        zIndex: 2,
        width: 150,
        aspectRatio: 16/9,
        borderRadius: SIZES.xSmall,
        display: "none"
    },
    placeholder_title: {
        color: COLORS.lightWhite,
        fontSize: SIZES.medium,
        zIndex: 1,
        width: 150,
    }
  
});

export default styles;
