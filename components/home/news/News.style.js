import { StyleSheet } from "react-native";

import { ASPECTS, COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    borderRadius: SIZES.medium,
    maxHeight: 250,
  },
  info: {
    position: "absolute",
    bottom: 100,
    left: 0,
    zIndex: 2,
    padding: SIZES.large,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
  description: {
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    opacity: 1,
  },
  pageTitle: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
  newsContainer: {
    rowGap: SIZES.medium,
    columnGap: SIZES.medium,
    alignItems: "center",
  },
  newsWrapper: {
    backgroundColor: "transparent",
    borderRadius: SIZES.medium,
    overflow: "hidden",
    position: "relative",

  },
  newsSeperator: {
    width: SIZES.xLarge,
    padding: SIZES.large,
  },
  item: (screenWidth) => ({
    width: screenWidth - SIZES.medium*2,
    height: screenWidth - SIZES.medium*2,
  }),
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    maxHeight: 250,
    opacity: 0.8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  
});

export default styles;
