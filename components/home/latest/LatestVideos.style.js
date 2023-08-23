import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderRadius: SIZES.xSmall,
    width: "100%",
    paddingTop: SIZES.large,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    paddingLeft: SIZES.large,
  },
  contentContainer: {
    columnGap: 8,
  }
  
});

export default styles;
