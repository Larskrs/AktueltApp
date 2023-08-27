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
    fontSize: SIZES.large,
    color: COLORS.white,
    margin: 0,
    padding: SIZES.small,
  },
  contentContainer: {
    columnGap: 8,
  }
  
});

export default styles;
