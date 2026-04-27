import { textStyles, typography } from "@/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type ProgressMetricCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode | "walk" | "balance" | "brain";
  fullWidth?: boolean;
};

export function ProgressMetricCard({
  title,
  value,
  icon,
  fullWidth = false,
}: ProgressMetricCardProps) {
  const iconName =
    icon === "balance" ? "scale-balance" : icon === "brain" ? "brain" : "walk";
  const renderedIcon =
    typeof icon === "string" ? (
      <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5FD]">
        <MaterialCommunityIcons name={iconName} size={20} color="#145CB4" />
      </View>
    ) : (
      icon
    );

  return (
    <View
      className={`rounded-[16px] border border-[#B9BEC7] bg-white px-4 py-4 shadow-sm p-3 ${
        fullWidth ? "w-full" : "flex-1"
      }`}
    >
      <View className="flex-row items-center gap-2">
        {renderedIcon}
        <Text
          style={{
            ...textStyles.labelSmall,
            color: "#252B36",
          }}
        >
          {title}
        </Text>
      </View>

      <Text className="mt-3">
        <Text
          style={{
            ...typography.label.small,
          }}
        >
          {value.split("/")[0] ?? value}
        </Text>

        <Text
          style={{
            ...typography.label.ssm,
          }}
        >
          {value.includes("/") ? `/${value.split("/")[1]}` : ""}
        </Text>
      </Text>
    </View>
  );
}
