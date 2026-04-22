import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AwardedThirtyDays from "../../../assets/images/awaeded30days.svg";
import AwardedSixtyDays from "../../../assets/images/awaeded60days.svg";
import AwardedNinetyDays from "../../../assets/images/awaeded90days.svg";
import { JourneyMilestoneCard } from "../../../components/journey/JourneyMilestoneCard";
import { JourneyStreakCard } from "../../../components/journey/JourneyStreakCard";
import { JourneyTimelineCard } from "../../../components/journey/JourneyTimelineCard";
import { useProfileMilestone } from "../../../components/profile/ProfileMilestoneContext";

export default function JourneyScreen() {
  const { activityDays, milestone } = useProfileMilestone();

  const currentMilestoneDay =
    activityDays >= 90 ? 90 : activityDays >= 60 ? 60 : activityDays >= 30 ? 30 : 30;

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FB]">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 28, paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
      >
        <JourneyTimelineCard activityDays={activityDays} />

        <View style={{ marginTop: 24 }}>
          <JourneyStreakCard
            activityDays={activityDays}
            awardBadge={milestone.awardBadge}
          />
        </View>

        <View style={{ marginTop: 24, gap: 18 }}>
          <JourneyMilestoneCard
            title="Habit Builder"
            day={30}
            awardBadge={AwardedThirtyDays}
            reached={currentMilestoneDay === 30}
            highlighted={currentMilestoneDay === 30}
            quote="16 more days, Robert. Every morning you choose to move is proof of something most people never find in themselves."
          />
          <JourneyMilestoneCard
            title="Discipline Keeper"
            day={60}
            awardBadge={AwardedSixtyDays}
            reached={currentMilestoneDay === 60}
            highlighted={currentMilestoneDay === 60}
            quote="16 more days, Robert. Every morning you choose to move is proof of something most people never find in themselves."
          />
          <JourneyMilestoneCard
            title="Consistency Elite"
            day={90}
            awardBadge={AwardedNinetyDays}
            reached={currentMilestoneDay === 90}
            highlighted={currentMilestoneDay === 90}
            quote="Very few people reach 90 days. When you do, you'll know something about yourself that most people never discover."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
