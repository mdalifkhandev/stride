import { Pressable, Text, View } from "react-native";

import { choiceCardStyles, textStyles } from "../../../trast/theme";

type AuthChoiceCardProps = {
  title: string;
  description?: string;
  selected?: boolean;
  onPress?: () => void;
};

export function AuthChoiceCard({
  title,
  description,
  selected = false,
  onPress,
}: AuthChoiceCardProps) {
  const hasDescription = Boolean(description && description.trim().length > 0);

  return (
    <Pressable
      onPress={onPress}
      style={[
        choiceCardStyles.container,
        !hasDescription && choiceCardStyles.compact,
        selected && choiceCardStyles.selected,
      ]}
    >
      <View
        style={[
          choiceCardStyles.indicator,
          selected && choiceCardStyles.indicatorSelected,
        ]}
      >
        {selected ? <View style={choiceCardStyles.indicatorDot} /> : null}
      </View>
      <View style={choiceCardStyles.content}>
        <Text style={textStyles.labelLarge}>{title}</Text>
        {hasDescription ? (
          <Text style={textStyles.captionXL}>{description}</Text>
        ) : null}
      </View>
    </Pressable>
  );
}
