import React, { useMemo, useEffect } from "react";
import { View, FlatList, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
import MockData from "./mock/MockData";
import CardItem from "./components/card-item/CardItem";
/**
 * ? Shared Imports
 */
import { SCREENS } from "@shared-constants";
import Text from "@shared-components/text-wrapper/TextWrapper";
import fonts from "@fonts";
import { ICardItem } from "@services/models";
import authService from "@services/authService/auth.service";

const profileURI =
  // eslint-disable-next-line max-len
  "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/81189650_2527288754179805_7713548052849491968_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uJt1wsUAjZEAX-eUHt_&_nc_ht=scontent-cdg2-1.xx&oh=00_AfAbPTGfKCbGUK-VXrthCwXrON0Zc2wC1xP0NhIdr3vJGA&oe=6443970C";

interface HomeScreenProps { }

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = (data: ICardItem) => {
    NavigationService.push(SCREENS.DETAIL, { data });
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const MenuButton = () => (
    <RNBounceable>
      <Icon name="menu" type={IconType.Ionicons} color={colors.iconBlack} size={30} />
    </RNBounceable>
  );

  const Header = () => (
    <View style={styles.header}>
      <MenuButton />
      <Image
        resizeMode="cover"
        source={{ uri: profileURI }}
        style={styles.profilePicImageStyle}
      />
    </View>
  );

  const getInfo = async () => {
    try {
      const res = await authService.getUserInfo()
      console.log(1212, res);
      // await AsyncStorage.clear();
      // console.log(await getJwtToken());

    } catch (error) {
      console.log(1231231, error);

    }
  }
  useEffect(() => { getInfo() }, [])

  const List = () => (
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={MockData}
        renderItem={({ item }) => (
          <CardItem data={item} onPress={handleItemPress} />
        )}
      />
    </View>
  );

  const Welcome = () => (
    <>
      <Text h1 bold color={colors.text}>
        Long Đàm
      </Text>
      <Text
        fontFamily={fonts.montserrat.lightItalic}
        color={colors.placeholder}
      >
        Welcome Back
      </Text>
    </>
  );

  const Content = () => (
    <View style={styles.contentContainer}>
      <Welcome />
      <List />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
    </SafeAreaView>
  );
};

export default HomeScreen;
