import { Text, View } from "react-native";

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
          <Text className="font-['Inter-Bold'] text-[18px] leading-[34px] text-[#24262B]">
            {awardTitle}
          </Text>
        </View>
        <Text
          className="font-['Inter-Bold'] text-[18px] leading-[30px]"
          style={{ color: awardAccent }}
        >
          Stride
        </Text>
      </View>

      <View className="mt-2 h-px bg-[#EFD8A9]" />

      <View className="mt-4 flex-row items-center">
        <View className="w-[75%] pr-2">
          <Text className="font-['Inter-Medium'] text-[20px] leading-[34px] text-[#24262B]">
            Congratulation!
          </Text>
          <Text className="mt-2 font-['Inter-Regular'] text-[16px] italic leading-[40px] text-[#6F6C68]">
            Awarded for{" "}
            <Text
              className="font-['Inter-Bold'] text-[18px] not-italic"
              style={{ color: awardAccent }}
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
