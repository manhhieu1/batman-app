import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./ProfileScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { localStrings } from "shared/localization";
import { useDispatch } from "react-redux";
import { updateToken } from "store/authSlice/authSlice";

interface ProfileScreenProps { }

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch()
  const onLogout = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(updateToken(''))
    } catch (error) {

    }
  }
  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Profile
      </Text>
      <RNBounceable
        style={styles.buttonStyle}
        // disabled
        onPress={onLogout}
      >
        <Text color={colors.white}>{localStrings.logout}</Text>
      </RNBounceable>
    </View>
  );
};

export default ProfileScreen;
