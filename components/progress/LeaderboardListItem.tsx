import type { ReactNode } from "react";
import { Image, type ImageSourcePropType, Text, View } from "react-native";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

type LeaderboardListItemProps = {
  name: string;
  points: number;
  avatarSource: ImageSourcePropType;
  backgroundColor: string;
  badge?: ReactNode;
};

export function LeaderboardListItem({
  name,
  points,
  avatarSource,
  backgroundColor,
  badge,
}: LeaderboardListItemProps) {
  return (
    <View
      className="flex-row items-center rounded-[22px] px-5 py-5 shadow-sm"
      style={{ backgroundColor }}
    >
      <View className="relative">
        <Image
          source={avatarSource}
          className="h-[62px] w-[62px] rounded-full"
          resizeMode="cover"
        />
        {badge ? (
          <View
            className="absolute -bottom-2 left-1/2"
            style={{ transform: [{ translateX: -14 }] }}
          >
            {badge}
          </View>
        ) : null}
      </View>

      <Text
        style={{
          marginLeft: 24,
          flex: 1,
          fontFamily: "Inter-Bold",
          fontSize: scaleTextSize(18),
          lineHeight: scaleLineHeight(27),
          color: "#252B36",
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          fontFamily: "Inter-Bold",
          fontSize: scaleTextSize(18),
          lineHeight: scaleLineHeight(27),
          color: "#252B36",
        }}
      >
        {points}{" "}
        <Text
          style={{
            fontFamily: "Inter-Medium",
            fontSize: scaleTextSize(18),
            lineHeight: scaleLineHeight(27),
            color: "#252B36",
          }}
        >
          Points
        </Text>
      </Text>
    </View>
  );
}
