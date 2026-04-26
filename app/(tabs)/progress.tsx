import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LeaderboardListItem } from "../../components/progress/LeaderboardListItem";
import { LeaderboardPodium } from "../../components/progress/LeaderboardPodium";
import { ProfileAwardCard } from "../../components/profile/ProfileAwardCard";
import { ProfileHeroCard } from "../../components/profile/ProfileHeroCard";
import { useProfileMilestone } from "../../components/profile/ProfileMilestoneContext";
import { ProgressActivityCard } from "../../components/progress/ProgressActivityCard";
import { ProgressGaugeCard } from "../../components/progress/ProgressGaugeCard";
import { ProgressMetricCard } from "../../components/progress/ProgressMetricCard";
import { ProgressPerformanceCard } from "../../components/progress/ProgressPerformanceCard";
import { ProgressStatusCard } from "../../components/progress/ProgressStatusCard";
import { ProgressTabs } from "../../components/progress/ProgressTabs";

const avatarImage = {
  uri: "https://i.pravatar.cc/300?img=12",
};
const secondAvatar = { uri: "https://i.pravatar.cc/300?img=32" };
const thirdAvatar = { uri: "https://i.pravatar.cc/300?img=56" };
const fourthAvatar = { uri: "https://i.pravatar.cc/300?img=70" };
const fifthAvatar = { uri: "https://i.pravatar.cc/300?img=64" };

export default function ProgressScreen() {
  const [activeTab, setActiveTab] = useState<"progress" | "leaderboard">("progress");
  const { activityDays, milestone } = useProfileMilestone();

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FB]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 pb-6 pt-5">
          <ProgressTabs activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "progress" ? (
            <>
              <View className="mt-6">
                <ProgressGaugeCard score={700} maxScore={1500} />
              </View>

              <View className="mt-4 flex-row gap-4">
                <ProgressMetricCard
                  title="Mobility"
                  value="450/500"
                  icon="walk"
                />
                <ProgressMetricCard
                  title="Balance"
                  value="450/500"
                  icon="balance"
                />
              </View>

              <View className="mt-4">
                <ProgressMetricCard
                  title="Cognition"
                  value="450/500"
                  icon="brain"
                  fullWidth
                />
              </View>

              <View className="mt-6">
                <ProgressActivityCard />
              </View>

              <View className="mt-6">
                <ProgressStatusCard />
              </View>

              <View className="mt-6">
                <ProgressPerformanceCard />
              </View>

              <View className="mt-6">
                <ProfileHeroCard
                  avatarSource={avatarImage}
                  badge={milestone.badge}
                  showMilestone={activityDays >= 30}
                  tier={milestone.tier}
                  headline="Keep Going, You’re Doing Great!"
                  heroBackground={milestone.heroBackground}
                  heroBorder={milestone.heroBorder}
                  heroAvatarBackground={milestone.heroAvatarBackground}
                  heroChipBackground={milestone.heroChipBackground}
                  heroChipBorder={milestone.heroChipBorder}
                  heroChipText={milestone.heroChipText}
                  heroSubtitle={milestone.heroSubtitle}
                />
              </View>

              {activityDays >= 30 ? (
                <ProfileAwardCard
                  awardBadge={milestone.awardBadge}
                  awardTitle={milestone.awardTitle}
                  awardBackground={milestone.awardBackground}
                  awardBorder={milestone.awardBorder}
                  awardAccent={milestone.awardAccent}
                  activityDays={activityDays}
                />
              ) : null}
            </>
          ) : (
            <>
              <LeaderboardPodium
                items={[
                  {
                    rank: 1,
                    tier: "Prime",
                    badge: milestone.badge,
                    avatarSource: avatarImage,
                    accentColor: "#F59E27",
                    chipBackground: "#FFC44D",
                    chipText: "#FFFFFF",
                    blockBackground: "#FFE4BD",
                  },
                  {
                    rank: 2,
                    tier: "Peak",
                    badge: milestone.badge,
                    avatarSource: secondAvatar,
                    accentColor: "#69B0FF",
                    chipBackground: "#4B96E8",
                    chipText: "#FFFFFF",
                    blockBackground: "#BFDDFD",
                  },
                  {
                    rank: 3,
                    tier: "Strong",
                    badge: milestone.badge,
                    avatarSource: thirdAvatar,
                    accentColor: "#9CB6C4",
                    chipBackground: "#9CB8C7",
                    chipText: "#FFFFFF",
                    blockBackground: "#D6E1EA",
                  },
                ]}
              />

              <View className="mt-8 gap-5">
                <LeaderboardListItem
                  name="Sam"
                  points={5324}
                  avatarSource={avatarImage}
                  backgroundColor="#FFE4BD"
                  badge={<milestone.badge width={28} height={29} />}
                />
                <LeaderboardListItem
                  name="Jihad Kakku"
                  points={345}
                  avatarSource={secondAvatar}
                  backgroundColor="#BFDDFD"
                  badge={<milestone.badge width={28} height={29} />}
                />
                <LeaderboardListItem
                  name="Rokay bhai"
                  points={254}
                  avatarSource={thirdAvatar}
                  backgroundColor="#D6E1EA"
                  badge={<milestone.badge width={28} height={29} />}
                />
                <LeaderboardListItem
                  name="Rokay bhai"
                  points={125}
                  avatarSource={fourthAvatar}
                  backgroundColor="#FFFFFF"
                />
                <LeaderboardListItem
                  name="Ekjon Manush"
                  points={125}
                  avatarSource={fifthAvatar}
                  backgroundColor="#FFFFFF"
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
