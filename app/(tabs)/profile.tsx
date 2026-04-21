import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileAwardCard } from "../../components/profile/ProfileAwardCard";
import { ProfileHeroCard } from "../../components/profile/ProfileHeroCard";
import {
  dayOptions,
  useProfileMilestone,
} from "../../components/profile/ProfileMilestoneContext";
import { ProfileMilestoneSelector } from "../../components/profile/ProfileMilestoneSelector";
import { ProfileSettingRow } from "../../components/profile/ProfileSettingRow";

const avatarImage = {
  uri: "https://i.pravatar.cc/300?img=12",
};

const settingsItems = [
  { id: "personal", title: "Personal Information" },
  { id: "question", title: "Personalize Question" },
  { id: "caregiver", title: "Caregiver Settings" },
  { id: "privacy", title: "Security & Privacy" },
];

export default function ProfileScreen() {
  const router = useRouter();
  const { activityDays, setActivityDays, milestone } = useProfileMilestone();
  const settingsWithSubscription = [
    ...settingsItems.slice(0, 3).map((item) => ({
      ...item,
      badge: undefined,
      badgeBackground: undefined,
      badgeBorder: undefined,
      badgeText: undefined,
    })),
    {
      id: "subscription",
      title: "Subscription Management",
      badge: milestone.subscriptionBadge ?? "Silver",
      badgeBackground: milestone.subscriptionBadgeBackground ?? "#E5F0FF",
      badgeBorder: milestone.subscriptionBadgeBorder ?? "#B9D4FF",
      badgeText: milestone.subscriptionBadgeText ?? "#2B6FD6",
    },
    {
      ...settingsItems[3],
      badge: undefined,
      badgeBackground: undefined,
      badgeBorder: undefined,
      badgeText: undefined,
    },
  ];

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#F5F7FB]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 pt-3">
          <View className="relative mb-5 flex-row items-center justify-center py-3">
            <Pressable className="absolute left-0 h-10 w-10 items-center justify-center">
              <Ionicons name="chevron-back" size={22} color="#292D32" />
            </Pressable>
            <Text className="font-['Inter-SemiBold'] text-[22px] text-[#252B36]">
              Profile
            </Text>
          </View>

          <ProfileHeroCard
            avatarSource={avatarImage}
            badge={milestone.badge}
            showMilestone={activityDays >= 30}
            tier={milestone.tier}
            headline={milestone.headline}
            heroBackground={milestone.heroBackground}
            heroBorder={milestone.heroBorder}
            heroAvatarBackground={milestone.heroAvatarBackground}
            heroChipBackground={milestone.heroChipBackground}
            heroChipBorder={milestone.heroChipBorder}
            heroChipText={milestone.heroChipText}
            heroSubtitle={milestone.heroSubtitle}
          />

          {activityDays >= 30 ? (
            <ProfileAwardCard
              awardBadge={milestone.awardBadge}
              awardBadgeWidth={44}
              awardBadgeHeight={70}
              awardTitle={milestone.awardTitle}
              awardBackground={milestone.awardBackground}
              awardBorder={milestone.awardBorder}
              awardAccent={milestone.awardAccent}
              activityDays={activityDays}
            />
          ) : null}

          <View className="mb-4 mt-5 flex-row items-center">
            <Text className="mr-3 font-['Inter-SemiBold'] text-[17px] text-[#666A72]">
              Settings
            </Text>
            <View className="h-px flex-1 bg-[#D4D8DE]" />
          </View>

          {settingsWithSubscription.map((item) => (
            <ProfileSettingRow
              key={item.id}
              title={item.title}
              badge={item.badge}
              badgeBackground={item.badgeBackground}
              badgeBorder={item.badgeBorder}
              badgeText={item.badgeText}
              onPress={
                item.id === "personal"
                  ? () => router.push("/screens/profile/personal-info")
                  : item.id === "question"
                    ? () => router.push("/screens/profile/personalize-question")
                    : item.id === "caregiver"
                      ? () => router.push("/screens/profile/caregiver-settings")
                    : undefined
              }
            />
          ))}

          <Pressable className="mt-2 self-start rounded-xl bg-[#FDECEC] px-4 py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="logout-variant"
                size={20}
                color="#2B2B2B"
              />
              <Text className="ml-2 font-['Inter-Medium'] text-[17px] text-[#2B2B2B]">
                Log Out
              </Text>
            </View>
          </Pressable>

          <ProfileMilestoneSelector
            dayOptions={dayOptions}
            activityDays={activityDays}
            selectorBackground={milestone.selectorBackground}
            selectorBorder={milestone.selectorBorder}
            selectorActiveBackground={milestone.selectorActiveBackground}
            selectorActiveText={milestone.selectorActiveText}
            selectorText={milestone.selectorText}
            onSelect={(days) => setActivityDays(days as (typeof dayOptions)[number])}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
