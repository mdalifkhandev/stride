import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

type ProgressMetricCardProps = {
  title: string;
  value: string;
  icon: "walk" | "balance" | "brain";
  fullWidth?: boolean;
};

export function ProgressMetricCard({
  title,
  value,
  icon,
  fullWidth = false,
}: ProgressMetricCardProps) {
  const Icon =
    icon === "balance"
      ? MaterialCommunityIcons
      : icon === "brain"
        ? MaterialCommunityIcons
        : Ionicons;

  const iconName =
    icon === "balance"
      ? "scale-balance"
      : icon === "brain"
        ? "brain"
        : "walk";

  return (
    <View
      className={`rounded-[18px] border border-[#B9BEC7] bg-white px-4 py-4 shadow-sm ${
        fullWidth ? "w-full" : "flex-1"
      }`}
    >
      <View className="flex-row items-center gap-2">
        <Icon name={iconName as never} size={18} color="#2B6FD6" />
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: scaleTextSize(18),
            lineHeight: scaleLineHeight(27),
            color: "#252B36",
          }}
        >
          {title}
        </Text>
      </View>

      <Text
        style={{
          marginTop: 12,
          fontFamily: "Inter-Bold",
          fontSize: scaleTextSize(16),
          lineHeight: scaleLineHeight(24),
          color: "#252B36",
        }}
      >
        {value}
      </Text>
    </View>
  );
}
