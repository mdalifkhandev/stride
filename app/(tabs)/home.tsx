import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const featuredImage = require("../../assets/images/caregiver-first-screen.png");

const games = [
  {
    id: "symbol-tap",
    title: "Symbol Tap",
    icon: "apps",
    bg: "#F3FBEF",
    iconColor: "#7AB248",
  },
  {
    id: "order",
    title: "Order",
    icon: "swap-horizontal",
    bg: "#E8F6FF",
    iconColor: "#2B6FD6",
  },
  {
    id: "accuracy",
    title: "Accuracy",
    icon: "radio-button-on",
    bg: "#EEF0FF",
    iconColor: "#6F60E8",
  },
];

function MetricCard({
  title,
  value,
  suffix,
  accent,
  background,
  icon,
}: {
  title: string;
  value: string;
  suffix?: string;
  accent: string;
  background: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View
      style={{ backgroundColor: background }}
      className="flex-1 rounded-3xl px-4 py-3"
    >
      <View className="mb-3 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <View
            style={{ borderColor: accent }}
            className="h-5 w-5 items-center justify-center rounded-full border"
          >
            <Ionicons name={icon} size={11} color={accent} />
          </View>
          <Text
            style={{ color: accent }}
            className="font-['Inter-Bold'] text-[13px] uppercase tracking-[0.8px]"
          >
            {title}
          </Text>
        </View>
      </View>

      <View className="flex-row items-end">
        <Text
          style={{ color: accent }}
          className="font-['Inter-Bold'] text-[28px] leading-8"
        >
          {value}
        </Text>
        {suffix ? (
          <Text
            style={{ color: accent }}
            className="ml-1 pb-1 font-['Inter-SemiBold'] text-base"
          >
            {suffix}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

function GameCard({
  title,
  icon,
  bg,
  iconColor,
}: {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  bg: string;
  iconColor: string;
}) {
  return (
    <Pressable className="w-[31%]">
      <View
        style={{ backgroundColor: bg, shadowColor: iconColor }}
        className="aspect-square items-center justify-center rounded-[24px] border border-white shadow-sm"
      >
        <View
          style={{ backgroundColor: `${iconColor}20` }}
          className="h-14 w-14 items-center justify-center rounded-full"
        >
          <Ionicons name={icon} size={30} color={iconColor} />
        </View>
      </View>
      <Text className="mt-3 text-center font-['Inter-SemiBold'] text-[16px] text-[#2E67B1]">
        {title}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#FCFDFF]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pt-4">
          <Text className="font-['Inter-Bold'] text-[20px] text-[#23314A]">
            Hi, Sam !
          </Text>
          <Text className="mt-1 font-['Inter-Regular'] text-[16px] text-[#576172]">
            It&apos;s a great day to get active, Sam!
          </Text>

          <View className="mt-6 flex-row gap-3">
            <MetricCard
              title="Growth"
              value="48%"
              accent="#4D9A52"
              background="#EAF5E9"
              icon="trending-up"
            />
            <MetricCard
              title="Streak"
              value="90"
              suffix="Days."
              accent="#FF8A1E"
              background="#FFF3E8"
              icon="flame"
            />
          </View>

          <Text className="mt-5 font-['Inter-Bold'] text-[16px] text-[#2F67B7]">
            Prevent Decline, Take Your Strides!
          </Text>

          <View className="mt-4 overflow-hidden rounded-[28px] bg-white p-3 shadow-sm">
            <View className="overflow-hidden rounded-[24px]">
              <Image source={featuredImage} className="h-[305px] w-full" resizeMode="cover" />

              <View className="absolute left-4 right-4 top-4 flex-row items-center justify-between">
                <View className="h-9 w-9 items-center justify-center rounded-full bg-[#567AA0AA]">
                  <Ionicons name="moon" size={18} color="#FFFFFF" />
                </View>
                <View className="flex-row items-center rounded-full bg-[#567AA0AA] px-3 py-2">
                  <MaterialCommunityIcons
                    name="layers-triple-outline"
                    size={15}
                    color="#FFFFFF"
                  />
                  <Text className="ml-1 font-['Inter-SemiBold'] text-[13px] text-white">
                    2 Level
                  </Text>
                </View>
              </View>

              <View className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10">
                <View className="absolute inset-0 bg-[#10213755]" />
                <Text className="font-['Inter-Bold'] text-[18px] text-white">
                  Push Up
                </Text>
                <Text className="mt-1 font-['Inter-Regular'] text-[15px] text-[#EEF4FF]">
                  Let&apos;s Begin Stride - 2
                </Text>
              </View>
            </View>

            <Pressable className="mt-3 items-center rounded-2xl border border-[#9DB8DE] bg-white py-4">
              <Text className="font-['Inter-Bold'] text-[16px] tracking-[0.4px] text-[#2B6FD6]">
                TAKE YOUR STRIDE!
              </Text>
            </Pressable>
          </View>

          <Text className="mt-6 font-['Inter-Bold'] text-[16px] text-[#2F67B7]">
            Play Game
          </Text>

          <View className="mt-4 flex-row justify-between">
            {games.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                icon={game.icon as keyof typeof Ionicons.glyphMap}
                bg={game.bg}
                iconColor={game.iconColor}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
