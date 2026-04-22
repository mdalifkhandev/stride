import { Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

type HomeSectionHeaderProps = {
  title: string;
  subtitle: string;
};

export function HomeSectionHeader({
  title,
  subtitle,
}: HomeSectionHeaderProps) {
  return (
    <View>
      <Text
        style={{
          marginTop: 28,
          color: "#0052AD",
          fontFamily: "Inter-Bold",
          fontSize: scaleTextSize(18),
          lineHeight: scaleLineHeight(27),
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          marginTop: 2,
          color: "#6B7280",
          fontFamily: "Inter-Regular",
          fontSize: scaleTextSize(16),
          lineHeight: scaleLineHeight(24),
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}
