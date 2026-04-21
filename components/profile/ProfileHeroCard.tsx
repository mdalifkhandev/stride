import { Image, type ImageSourcePropType, Text, View } from "react-native";

type BadgeComponent = React.ComponentType<{ width?: number; height?: number }>;

type ProfileHeroCardProps = {
  avatarSource: ImageSourcePropType;
  badge: BadgeComponent;
  tier: string;
  headline: string;
  heroBackground: string;
  heroBorder: string;
  heroAvatarBackground: string;
  heroChipBackground: string;
  heroChipBorder: string;
  heroChipText: string;
  heroSubtitle: string;
};

export function ProfileHeroCard({
  avatarSource,
  badge: BadgeAsset,
  tier,
  headline,
  heroBackground,
  heroBorder,
  heroAvatarBackground,
  heroChipBackground,
  heroChipBorder,
  heroChipText,
  heroSubtitle,
}: ProfileHeroCardProps) {
  return (
    <View
      className="items-center rounded-[8px] px-5 pb-8 pt-9"
      style={{ backgroundColor: heroBackground }}
    >
      <View className="relative">
        <View
          className="h-[102px] w-[102px] items-center justify-center overflow-hidden rounded-full border-[4px] shadow-sm"
          style={{
            borderColor: heroBorder,
            backgroundColor: heroAvatarBackground,
          }}
        >
          <Image
            source={avatarSource}
            className="h-[108px] w-[108px]"
            style={{ transform: [{ translateY: 6 }] }}
            resizeMode="cover"
          />
        </View>

        <View
          className="absolute -bottom-5"
          style={{ left: "50%", transform: [{ translateX: -118 }] }}
        >
          <BadgeAsset width={40} height={41} />
        </View>
      </View>

      <View
        className="mt-7 rounded-full border px-5 py-2"
        style={{
          backgroundColor: heroChipBackground,
          borderColor: heroChipBorder,
        }}
      >
        <Text
          className="font-['Inter-Bold'] text-[18px] leading-6"
          style={{ color: heroChipText }}
        >
          {tier}
        </Text>
      </View>

      <Text className="mt-2.5 font-['Inter-SemiBold'] text-[25px] leading-[34px] text-[#2C2D30]">
        Mahmudur Rahman
      </Text>
      <Text
        className="mt-2 text-center font-['Inter-Regular'] text-[17px] leading-[28px]"
        style={{ color: heroSubtitle }}
      >
        {headline}
      </Text>
    </View>
  );
}
