import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  languageContainer: ViewStyle;
  languageColorStyle: ViewStyle;
  iconContainer: ViewStyle;
  valueTextStyle: TextStyle;
  avatarImageStyle: ImageStyle
  headerStyle: ViewStyle;
  headerTextContainerStyle: TextStyle;
  headerTextNameStyle: TextStyle;
  headerTextDescriptionStyle: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      // padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderRadius: 8,
      width: ScreenWidth * 0.9,
      borderColor: colors.borderColor,
      backgroundColor: colors.dynamicBackground,
      overflow: 'hidden',
      height: 140
    },
    headerStyle: {
      flexDirection: "row",
      width: "100%",
      justifyContent: 'space-between'
    },
    avatarImageStyle: {
      width: "30%",
      height: "100%"
    },
    headerTextContainerStyle: {
      width: "70%",
      paddingTop: 1,
      paddingBottom: 16,
      paddingLeft: 10,
      paddingRight: 10
    },
    headerTextNameStyle: {
      marginBottom: 4
    },
    headerTextDescriptionStyle: {
      marginTop: 4,
      height: 60
    },
    contentContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    languageContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    languageColorStyle: {
      width: 15,
      height: 15,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: colors.borderColor,
      backgroundColor: colors.calpyse,
    },
    iconContainer: {
      marginRight: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    valueTextStyle: {
      marginLeft: 8,
    },
  });
};
