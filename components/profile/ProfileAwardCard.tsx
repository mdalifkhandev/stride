import { Text, View } from "react-native";
import { useTextScale } from "../accessibility/TextScaleContext";

type AwardBadgeComponent = React.ComponentType<{
  width?: number;
  height?: number;
}>;

type ProfileAwardCardProps = {
  awardBadge?: AwardBadgeComponent;
  awardBadgeWidth?: number;
  awardBadgeHeight?: number;
  awardTitle: string;
  awardBackground: string;
  awardBorder: string;
  awardAccent: string;
  activityDays: number;
};

export function ProfileAwardCard({
  awardBadge,
  awardBadgeWidth = 44,
  awardBadgeHeight = 70,
  awardTitle,
  awardBackground,
  awardBorder,
  awardAccent,
  activityDays,
}: ProfileAwardCardProps) {
  const { textScale } = useTextScale();
  const AwardBadge = awardBadge;

  return (
    <View
      className="mt-5 rounded-[8px] border px-3 pb-3 pt-3"
      style={{
        borderColor: awardBorder,
        backgroundColor: awardBackground,
      }}
    >
      <View className="flex-row items-start justify-between">
        <View>
          <Text
            style={{
              fontSize: 18 * textScale,
              lineHeight: 34 * textScale,
            }}
            className="font-['Inter-Bold'] text-[#24262B]"
          >
            {awardTitle}
          </Text>
        </View>
        <Text
          style={{
            color: awardAccent,
            fontSize: 18 * textScale,
            lineHeight: 30 * textScale,
          }}
          className="font-['Inter-Bold']"
        >
          Stride
        </Text>
      </View>

      <View className="mt-2 h-px bg-[#EFD8A9]" />

      <View className="mt-4 flex-row items-center">
        <View className="w-[75%] pr-2">
          <Text
            style={{
              fontSize: 20 * textScale,
              lineHeight: 34 * textScale,
            }}
            className="font-['Inter-Medium'] text-[#24262B]"
          >
            Congratulation!
          </Text>
          <Text
            style={{
              fontSize: 16 * textScale,
              lineHeight: 40 * textScale,
            }}
            className="mt-2 font-['Inter-Regular'] italic text-[#6F6C68]"
          >
            Awarded for{" "}
            <Text
              style={{
                color: awardAccent,
                fontSize: 18 * textScale,
              }}
              className="font-['Inter-Bold'] not-italic"
            >
              {activityDays} Days
            </Text>{" "}
            of{"\n"}
            Consistent Activity.
          </Text>
        </View>

        {AwardBadge ? (
          <View className="ml-auto w-[72px] items-end">
            <AwardBadge width={65} height={92} />
          </View>
        ) : null}
      </View>
    </View>
  );
}
