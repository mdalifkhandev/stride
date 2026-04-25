import { Image, Text, View } from "react-native";
import type { ImageSourcePropType } from "react-native";

type BadgeComponent = React.ComponentType<{ width?: number; height?: number }>;

type PodiumItem = {
  rank: 1 | 2 | 3;
  tier: string;
  badge: BadgeComponent;
  avatarSource: ImageSourcePropType;
  accentColor: string;
  chipBackground: string;
  chipText: string;
  blockBackground: string;
};

type LeaderboardPodiumProps = {
  items: [PodiumItem, PodiumItem, PodiumItem];
};

function PodiumColumn({ item }: { item: PodiumItem }) {
  const Badge = item.badge;
  const blockHeight = item.rank === 1 ? 144 : 104;

  return (
    <View className={`items-center ${item.rank === 1 ? "mt-0" : "mt-10"}`}>
      <View className="relative">
        <View
          className="h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-full border-[4px] bg-white shadow-sm"
          style={{ borderColor: item.accentColor }}
        >
          <Image
            source={item.avatarSource}
            className="h-[84px] w-[84px] rounded-full"
            resizeMode="cover"
          />
        </View>
        <View
          className="absolute -bottom-4"
          style={{ left: "50%", transform: [{ translateX: -18 }] }}
        >
          <Badge width={36} height={37} />
        </View>
      </View>

      <View
        className="mt-5 rounded-full px-5 py-2"
        style={{ backgroundColor: item.chipBackground }}
      >
        <Text
          className="font-['Inter-Bold'] text-[18px]"
          style={{ color: item.chipText }}
        >
          {item.tier}
        </Text>
      </View>

      <View
        className="mt-5 w-[112px] items-center justify-center rounded-[10px]"
        style={{ height: blockHeight, backgroundColor: item.blockBackground }}
      >
        <Text className="font-['Inter-Bold'] text-[26px] text-[#0B4A98]">
          {item.rank}
          {item.rank === 1 ? "st" : item.rank === 2 ? "nd" : "rd"}
        </Text>
      </View>
    </View>
  );
}

export function LeaderboardPodium({ items }: LeaderboardPodiumProps) {
  return (
    <View className="mt-7">
      <Text className="font-['Inter-Bold'] text-[17px] text-[#252B36]">
        🏆 Weekly Leaderboard
      </Text>
      <Text className="mt-5 font-['Inter-Bold'] text-[17px] leading-[28px] text-[#6E6E6E]">
        {"You're"} building healthy habits! See{"\n"}how you rank this week
      </Text>

      <View className="mt-8 flex-row items-end justify-between">
        <PodiumColumn item={items[1]} />
        <PodiumColumn item={items[0]} />
        <PodiumColumn item={items[2]} />
      </View>
    </View>
  );
}
