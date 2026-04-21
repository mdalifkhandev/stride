import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThirtyDaysBadge from "../../assets/images/Badge30days.svg";
import SixtyDaysBadge from "../../assets/images/Badge60days.svg";
import NinetyDaysBadge from "../../assets/images/Badge90days.svg";
import AwardedThirtyDays from "../../assets/images/awaeded30days.svg";
import AwardedSixtyDays from "../../assets/images/awaeded60days.svg";
import AwardedNinetyDays from "../../assets/images/awaeded90days.svg";
import { ProfileAwardCard } from "../../components/profile/ProfileAwardCard";
import { ProfileHeroCard } from "../../components/profile/ProfileHeroCard";
import { ProfileMilestoneSelector } from "../../components/profile/ProfileMilestoneSelector";
import { ProfileSettingRow } from "../../components/profile/ProfileSettingRow";

const avatarImage = {
  uri: "https://i.pravatar.cc/300?img=12",
};
const dayOptions = [20, 30, 60, 90] as const;

const settingsItems = [
  { id: "personal", title: "Personal Information" },
  { id: "question", title: "Personalize Question" },
  { id: "caregiver", title: "Caregiver Settings" },
  { id: "privacy", title: "Security & Privacy" },
];

function getMilestoneTheme(days: number) {
  if (days >= 90) {
    return {
      badge: NinetyDaysBadge,
      awardBadge: AwardedNinetyDays,
      tier: "Peak",
      headline: "You’re reaching your peak now!",
      heroBackground: "#E8F3FF",
      heroBorder: "#69B0FF",
      heroAvatarBackground: "#F3F8FF",
      heroChipBackground: "#4B96E8",
      heroChipBorder: "#84BEFF",
      heroChipText: "#FFFFFF",
      heroSubtitle: "#5F6772",
      awardTitle: "Discipline Keeper",
      awardBackground: "#FFF6E8",
      awardBorder: "#FFAF2A",
      awardAccent: "#2B6FD6",
      selectorBackground: "#EAF3FF",
      selectorBorder: "#8EBBFF",
      selectorActiveBackground: "#2B6FD6",
      selectorActiveText: "#FFFFFF",
      selectorText: "#2B6FD6",
    } as const;
  }

  if (days >= 60) {
    return {
      badge: SixtyDaysBadge,
      awardBadge: AwardedSixtyDays,
      tier: "Prime",
      headline: "You’re in your prime,\nthriving like never before!",
      heroBackground: "#FBF0E1",
      heroBorder: "#F59E27",
      heroAvatarBackground: "#FFF7ED",
      heroChipBackground: "#FFC44D",
      heroChipBorder: "#FFD98B",
      heroChipText: "#FFFFFF",
      heroSubtitle: "#6F6C68",
      awardTitle: "Consistency Elite",
      awardBackground: "#FFF8EC",
      awardBorder: "#F8B54B",
      awardAccent: "#2B6FD6",
      selectorBackground: "#FFF5E5",
      selectorBorder: "#F7C97A",
      selectorActiveBackground: "#F4B228",
      selectorActiveText: "#FFFFFF",
      selectorText: "#A26600",
    } as const;
  }

  return {
    badge: ThirtyDaysBadge,
    awardBadge: AwardedThirtyDays,
    tier: "Strong",
    headline: "You’re getting stronger every day!",
    heroBackground: "#EEF4FA",
    heroBorder: "#9CB6C4",
    heroAvatarBackground: "#FFFFFF",
    heroChipBackground: "#9CB8C7",
    heroChipBorder: "#C8D8E2",
    heroChipText: "#FFFFFF",
    heroSubtitle: "#6C727A",
    awardTitle: "Habit Builder",
    awardBackground: "#FFF8EC",
    awardBorder: "#FFAF2A",
    awardAccent: "#2B6FD6",
    subscriptionBadge: "Basic",
    subscriptionBadgeBackground: "#EEF9F0",
    subscriptionBadgeBorder: "#76BE7F",
    subscriptionBadgeText: "#2F8C3E",
    selectorBackground: "#F1F5F9",
    selectorBorder: "#C8D8E2",
    selectorActiveBackground: "#9CB8C7",
    selectorActiveText: "#FFFFFF",
    selectorText: "#587489",
  } as const;
}

export default function ProfileScreen() {
  const [activityDays, setActivityDays] =
    useState<(typeof dayOptions)[number]>(90);
  const milestone = getMilestoneTheme(activityDays);
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
            onSelect={(days) =>
              setActivityDays(days as (typeof dayOptions)[number])
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
