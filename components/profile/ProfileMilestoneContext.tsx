import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import ThirtyDaysBadge from "../../assets/images/Badge30days.svg";
import SixtyDaysBadge from "../../assets/images/Badge60days.svg";
import NinetyDaysBadge from "../../assets/images/Badge90days.svg";
import AwardedThirtyDays from "../../assets/images/awaeded30days.svg";
import AwardedSixtyDays from "../../assets/images/awaeded60days.svg";
import AwardedNinetyDays from "../../assets/images/awaeded90days.svg";

export const dayOptions = [20, 30, 60, 90] as const;
export type MilestoneDay = (typeof dayOptions)[number];

type BadgeComponent = React.ComponentType<{ width?: number; height?: number }>;

export type MilestoneTheme = {
  badge: BadgeComponent;
  awardBadge: BadgeComponent;
  tier: string;
  headline: string;
  heroBackground: string;
  heroBorder: string;
  heroAvatarBackground: string;
  heroChipBackground: string;
  heroChipBorder: string;
  heroChipText: string;
  heroSubtitle: string;
  awardTitle: string;
  awardBackground: string;
  awardBorder: string;
  awardAccent: string;
  subscriptionBadge?: string;
  subscriptionBadgeBackground?: string;
  subscriptionBadgeBorder?: string;
  subscriptionBadgeText?: string;
  selectorBackground: string;
  selectorBorder: string;
  selectorActiveBackground: string;
  selectorActiveText: string;
  selectorText: string;
};

type ProfileMilestoneContextValue = {
  activityDays: MilestoneDay;
  setActivityDays: (days: MilestoneDay) => void;
  milestone: MilestoneTheme;
};

function getMilestoneTheme(days: number): MilestoneTheme {
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
    };
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
    };
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
  };
}

const ProfileMilestoneContext = createContext<ProfileMilestoneContextValue | null>(
  null,
);

export function ProfileMilestoneProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activityDays, setActivityDays] = useState<MilestoneDay>(90);

  const value = useMemo(
    () => ({
      activityDays,
      setActivityDays,
      milestone: getMilestoneTheme(activityDays),
    }),
    [activityDays],
  );

  return (
    <ProfileMilestoneContext.Provider value={value}>
      {children}
    </ProfileMilestoneContext.Provider>
  );
}

export function useProfileMilestone() {
  const context = useContext(ProfileMilestoneContext);

  if (!context) {
    throw new Error("useProfileMilestone must be used within ProfileMilestoneProvider");
  }

  return context;
}
