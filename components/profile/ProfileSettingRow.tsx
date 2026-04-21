import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type ProfileSettingRowProps = {
  title: string;
  badge?: string;
  badgeBackground?: string;
  badgeBorder?: string;
  badgeText?: string;
};

export function ProfileSettingRow({
  title,
  badge,
  badgeBackground,
  badgeBorder,
  badgeText,
}: ProfileSettingRowProps) {
  return (
    <Pressable className="mb-4 flex-row items-center justify-between rounded-2xl bg-white px-4 py-5 shadow-sm">
      <View className="flex-row items-center">
        <Text className="font-['Inter-Medium'] text-[17px] text-[#252B36]">
          {title}
        </Text>
        {badge ? (
          <View
            className="ml-2 rounded-full border px-2 py-0.5"
            style={{
              backgroundColor: badgeBackground ?? "#E5F0FF",
              borderColor: badgeBorder ?? "#B9D4FF",
            }}
          >
            <Text
              className="font-['Inter-SemiBold'] text-[10px]"
              style={{ color: badgeText ?? "#2B6FD6" }}
            >
              {badge}
            </Text>
          </View>
        ) : null}
      </View>

      <Ionicons name="arrow-forward" size={18} color="#252B36" />
    </Pressable>
  );
}
