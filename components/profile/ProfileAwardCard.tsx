import { Text, View } from "react-native";

type BadgeComponent = React.ComponentType<{ width?: number; height?: number }>;

type ProfileAwardCardProps = {
  badge: BadgeComponent;
  awardTitle: string;
  awardBackground: string;
  awardBorder: string;
  awardAccent: string;
  activityDays: number;
};

export function ProfileAwardCard({
  badge: BadgeAsset,
  awardTitle,
  awardBackground,
  awardBorder,
  awardAccent,
  activityDays,
}: ProfileAwardCardProps) {
  return (
    <View
      className="mt-5 rounded-[10px] border px-4 py-5"
      style={{
        borderColor: awardBorder,
        backgroundColor: awardBackground,
      }}
    >
      <View className="flex-row items-start justify-between">
        <View>
          <Text className="font-['Inter-Bold'] text-[16px] text-[#3B362F]">
            {awardTitle}
          </Text>
        </View>
        <Text
          className="font-['Inter-Bold'] text-[14px]"
          style={{ color: awardAccent }}
        >
          Stride
        </Text>
      </View>

      <View className="mt-6 flex-row items-center justify-between">
        <View className="pr-4">
          <Text className="font-['Inter-Medium'] text-[17px] text-[#2C2D30]">
            Congratulation!
          </Text>
          <Text className="mt-2 font-['Inter-Regular'] text-[15px] italic leading-6 text-[#6F6C68]">
            Awarded for{" "}
            <Text className="font-['Inter-Bold']" style={{ color: awardAccent }}>
              {activityDays} Days
            </Text>{" "}
            of{"\n"}
            Consistent Activity.
          </Text>
        </View>

        <View className="items-center justify-center pl-2">
          <BadgeAsset width={78} height={82} />
        </View>
      </View>
    </View>
  );
}
