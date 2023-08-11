import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderRadius: SIZES.medium,
    width: "100%",
    paddingTop: SIZES.large,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    paddingLeft: SIZES.large,
  },
  
});

export default styles;
