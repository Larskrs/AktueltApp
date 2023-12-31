import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderRadius: SIZES.xSmall,
    width: "100%",
    paddingTop: SIZES.large,
    display: "flex",
    flexDirection: "column",
    columnGap: SIZES.xxSmall,
    rowGap: SIZES.xxSmall,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.white,
    margin: 0,
    padding: SIZES.small,
  },
  contentContainer: {
    rowGap: SIZES.xxSmall,
    paddingBottom: 200,
    flexGrow: 1,
  },
  image: {
    width: "auto",
    height: 200,
    backgroundColor: COLORS.white,
  }
  
});

export default styles;
