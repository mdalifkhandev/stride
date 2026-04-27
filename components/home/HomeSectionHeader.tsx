import { typography } from "@/theme";
import { Text, View } from "react-native";

type HomeSectionHeaderProps = {
  title: string;
  subtitle: string;
};

export function HomeSectionHeader({ title, subtitle }: HomeSectionHeaderProps) {
  return (
    <View>
      <Text
        style={{
          marginTop: 28,
          color: "#0052AD",
          ...typography.label.xl,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          marginTop: 2,
          color: "#6B7280",
          ...typography.caption.xl,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
}
