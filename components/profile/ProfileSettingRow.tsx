import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useTextScale } from "../accessibility/TextScaleContext";

type ProfileSettingRowProps = {
  title: string;
  badge?: string;
  badgeBackground?: string;
  badgeBorder?: string;
  badgeText?: string;
  onPress?: () => void;
};

export function ProfileSettingRow({
  title,
  badge,
  badgeBackground,
  badgeBorder,
  badgeText,
  onPress,
}: ProfileSettingRowProps) {
  const { textScale } = useTextScale();

  return (
    <Pressable
      onPress={onPress}
      className="mb-4 flex-row items-center justify-between rounded-2xl bg-white px-4 py-5 shadow-sm"
    >
      <View className="flex-row items-center">
        <Text
          style={{ fontSize: 17 * textScale }}
          className="font-['Inter-Medium'] text-[#252B36]"
        >
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
              style={{
                color: badgeText ?? "#2B6FD6",
                fontSize: 10 * textScale,
              }}
              className="font-['Inter-SemiBold']"
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
