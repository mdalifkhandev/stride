import { Image, type ImageSourcePropType, Text, View } from "react-native";
import { useTextScale } from "../accessibility/TextScaleContext";

type BadgeComponent = React.ComponentType<{ width?: number; height?: number }>;

type ProfileHeroCardProps = {
  avatarSource: ImageSourcePropType;
  badge: BadgeComponent;
  showMilestone?: boolean;
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
  showMilestone = true,
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
  const { textScale } = useTextScale();

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

        {showMilestone ? (
          <View
            className="absolute -bottom-5"
            style={{ left: "50%", transform: [{ translateX: -118 }] }}
          >
            <BadgeAsset width={40} height={41} />
          </View>
        ) : null}
      </View>

      {showMilestone ? (
        <View
          className="mt-7 rounded-full border px-5 py-2"
          style={{
            backgroundColor: heroChipBackground,
            borderColor: heroChipBorder,
          }}
        >
          <Text
            style={{
              color: heroChipText,
              fontSize: 18 * textScale,
              lineHeight: 24 * textScale,
            }}
            className="font-['Inter-Bold']"
          >
            {tier}
          </Text>
        </View>
      ) : null}

      <Text
        style={{
          fontSize: 32 * textScale,
          lineHeight: 40 * textScale,
        }}
        className={`font-['Inter-SemiBold'] text-[#2C2D30] ${
          showMilestone ? "mt-2.5" : "mt-7"
        }`}
      >
        Mahmudur Rahman
      </Text>
      <Text
        style={{
          color: heroSubtitle,
          fontSize: 17 * textScale,
          lineHeight: 28 * textScale,
        }}
        className="mt-2 text-center font-['Inter-Regular']"
      >
        {headline}
      </Text>
    </View>
  );
}
