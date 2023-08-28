import { Platform, StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({

    container: {
        height: 160, // 40 inches * 4
        width: 160, // 27 inches * 4
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.xSmall,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
        zIndex: 2,
    },
    placeholder_title: {
        color: COLORS.lightWhite,
        fontSize: SIZES.large,
        textAlign: "center",
        position: "absolute",
        zIndex: 1,
    }
  
});

export default styles;
