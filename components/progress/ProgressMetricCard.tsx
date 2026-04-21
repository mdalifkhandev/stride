import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

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
        <Text className="font-['Inter-Bold'] text-[18px] text-[#252B36]">
          {title}
        </Text>
      </View>

      <Text className="mt-3 font-['Inter-Bold'] text-[16px] text-[#252B36]">
        {value}
      </Text>
    </View>
  );
}
