import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./CardItem.style";
import { ICardItem } from "@services/models";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { localStrings } from "shared/localization";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
  onPress: (data: ICardItem) => void;
}

const CardItem: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { name, description, image, age, gender } = data;

  const Heart = () => (
    <Icon style={styles.iconContainer} name="heart-o" type={IconType.FontAwesome} color={theme.primary} />
  );
  const Chat = () => (
    <Icon name="chatbox-ellipses-outline" type={IconType.Ionicons} color={theme.primary} />
  );

  const Header = () => (
    <View style={styles.headerStyle}>
      <Image
        resizeMode="cover"
        source={{ uri: image }}
        style={styles.avatarImageStyle}
      />
      <View style={styles.headerTextContainerStyle}>
        <Text h4 bold color={colors.text} style={styles.headerTextNameStyle}>
          {name}
        </Text>
        <Text color={colors.text} >
          {localStrings.user.age}: {' '}
          <Text bold color={colors.text} >
            {age}
          </Text>{'    '}
          {gender === 'male' ? <Icon name="male" type={IconType.Ionicons} size={16} color="#ED72A6" /> : <Icon name="female" type={IconType.Ionicons} size={16} color="#01C9F3" />}

        </Text>
        <Text h5 color={colors.placeholder} ellipsizeMode='tail' numberOfLines={3} style={styles.headerTextDescriptionStyle}>
          {description}
        </Text>
        <View style={styles.contentContainer}>
          <Heart />
          <Chat />
        </View>
      </View>
    </View>
  );




  // const Fork = () => (
  //   <View style={styles.forkContainer}>
  //     <Icon name="code-fork" type={IconType.FontAwesome} color={colors.text} />
  //     <Text style={styles.valueTextStyle}>{fork}</Text>
  //   </View>
  // );

  return (
    <RNBounceable style={[styles.container, style]} onPress={() => onPress(data)}>
      <Header />
    </RNBounceable>
  );
};

export default CardItem;
