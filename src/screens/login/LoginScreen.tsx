import React, { useEffect, useMemo, useState } from "react";
import { View, ImageBackground, Keyboard } from "react-native";
import { useTheme } from "@react-navigation/native";
import InteractiveTextInput from 'react-native-text-input-interactive';

/**
 * ? Local Imports
 */
import createStyles from "./LoginScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { localStrings } from "shared/localization";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import authService from "@services/authService/auth.service";
import { useDispatch } from "react-redux";
import { updateToken } from "store/authSlice/authSlice";


interface LoginScreenProps { }

const DetailScreen: React.FC<LoginScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useDispatch();
  const onLogin = async () => {
    try {
      Keyboard.dismiss()
      const res = await authService.login({ email, password })
      dispatch(updateToken(res.token))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode={'stretch'} // or cover
        style={styles.container} // must be passed from the parent, the number may vary depending upon your screen size
        source={require('../../assets/launch_screen.jpg')}
      >

        <Text h1 color={colors.white} style={styles.titleTextStyle} >
          {localStrings.login}
        </Text>
        <InteractiveTextInput placeholder={localStrings.account.email}
          keyboardType="email-address"
          IconComponent={<Icon name="eye-outline" type={IconType.Ionicons} />}
          textInputStyle={{
            fontFamily: 'Staatliches-Regular',
            marginTop: 20
          }}
          onChangeText={(text: string) => { setEmail(text) }} />
        <InteractiveTextInput placeholder={localStrings.account.password}
          secureTextEntry
          IconComponent={<Icon name="eye-outline" type={IconType.Ionicons} />}
          textInputStyle={{
            fontFamily: 'Staatliches-Regular',
            marginTop: 20
          }}
          onChangeText={(text: string) => { setPassword(text) }} />
        <RNBounceable
          style={styles.buttonStyle}
          // disabled
          onPress={onLogin}
        >
          <Text color={colors.white}>{localStrings.login}</Text>
        </RNBounceable>
      </ImageBackground>
    </View>
  );
};

export default DetailScreen;
