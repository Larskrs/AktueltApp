import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    borderRadius: SIZES.medium,
    maxHeight: 250,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    position: "absolute",
    bottom: 100,
    left: 0,
    zIndex: 2,
    padding: SIZES.large,
  },
  newsContainer: {
    rowGap: SIZES.medium,
    columnGap: SIZES.medium,
    alignItems: "center",
  },
  newsWrapper: {
    backgroundColor: "transparent",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    height: 250,
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
