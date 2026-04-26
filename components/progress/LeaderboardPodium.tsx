import { typography } from "@/theme";
import type { ImageSourcePropType } from "react-native";
import { Image, Text, View } from "react-native";


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
  const blockHeight = item.rank === 1 ? 146 : item.rank === 2 ? 108 : 84;
  const blockWidth = item.rank === 1 ? 118 : 106;
  const columnWidth = item.rank === 1 ? 124 : 110;
  const avatarFrameSize = item.rank === 1 ? 90 : 84;
  const avatarSize = item.rank === 1 ? 82 : 76;
  const topOffset = item.rank === 1 ? 0 : item.rank === 2 ? 30 : 42;

  return (
    <View
      style={{ width: columnWidth, alignItems: "center", marginTop: topOffset }}
    >
      <View className="relative">
        <View
          className="items-center justify-center overflow-hidden rounded-full border-[4px] bg-white"
          style={{
            width: avatarFrameSize,
            height: avatarFrameSize,
            borderColor: item.accentColor,
            shadowColor: item.accentColor,
            shadowOpacity: item.rank === 1 ? 0.24 : 0.16,
            shadowRadius: item.rank === 1 ? 10 : 8,
            shadowOffset: { width: 0, height: 4 },
            elevation: 5,
          }}
        >
          <Image
            source={item.avatarSource}
            style={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: 999,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          className="absolute"
          style={{
            bottom: -15,
            left: "50%",
            transform: [{ translateX: item.rank === 1 ? -19 : -18 }],
          }}
        >
          <Badge
            width={item.rank === 1 ? 38 : 36}
            height={item.rank === 1 ? 39 : 37}
          />
        </View>
      </View>

      <View
        className="mt-5 rounded-full py-2"
        style={{
          backgroundColor: item.chipBackground,
          paddingHorizontal: item.rank === 1 ? 18 : 16,
        }}
      >
        <Text
          style={{
            ...typography.body.large,
            color: item.chipText,
          }}
        >
          {item.tier}
        </Text>
      </View>

      <View
        className="mt-4 items-center justify-center rounded-[8px]"
        style={{
          width: blockWidth,
          height: blockHeight,
          backgroundColor: item.blockBackground,
        }}
      >
        <Text
          style={{
            ...typography.headline.h2,
            color: "#0B4A98",
          }}
        >
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
      <Text
        style={{
          ...typography.title.t2,
          color: "#252B36",
        }}
      >
        🏆 Weekly Leaderboard
      </Text>
      <Text
        style={{
          marginTop: 20,
          ...typography.body.large, // nearest to 17
          color: "#6E6E6E",
        }}
      >
        You&apos;re building healthy habits! See{"\n"}how you rank this week
      </Text>

      <View
        style={{
          marginTop: 36,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: 2,
        }}
      >
        <PodiumColumn item={items[1]} />
        <PodiumColumn item={items[0]} />
        <PodiumColumn item={items[2]} />
      </View>
    </View>
  );
}

