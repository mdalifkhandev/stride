import { typography } from "@/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";



type JourneyTimelineCardProps = {
  activityDays: number;
};

const steps = [
  { day: 30, icon: "medal-outline" },
  { day: 60, icon: "star-outline" },
  { day: 90, icon: "trophy-outline" },
] as const;

export function JourneyTimelineCard({
  activityDays,
}: JourneyTimelineCardProps) {
  const highestReached = activityDays >= 90 ? 90 : activityDays >= 60 ? 60 : activityDays >= 30 ? 30 : 0;
  const nextTarget = highestReached === 0 ? 30 : highestReached === 30 ? 60 : highestReached === 60 ? 90 : 90;

  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 18,
        paddingTop: 20,
        paddingBottom: 16,
        shadowColor: "#0B3B7A",
        shadowOpacity: 0.05,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
        elevation: 2,
      }}
    >
      <Text
        style={{
          color: "#666A72",
          ...typography.title.t2,
        }}
      >
        Your Journey
      </Text>

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {steps.map((step, index) => {
          const isReached = step.day <= highestReached;
          const isCurrent = step.day === nextTarget && highestReached < 90;
          const isInactive = !isReached && !isCurrent;

          const backgroundColor = isReached ? "#0052AD" : "#FFFFFF";
          const borderColor = isReached || isCurrent ? "#0052AD" : "#D6DCE6";
          const iconColor = isReached ? "#FFFFFF" : isCurrent ? "#0052AD" : "#A7AFBC";
          const textColor = isInactive ? "#A7AFBC" : "#0052AD";

          return (
            <View
              key={step.day}
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 999,
                  borderWidth: 2,
                  borderColor,
                  backgroundColor,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name={step.icon}
                  size={22}
                  color={iconColor}
                />
              </View>

              <Text
                style={{
                  marginTop: 8,
                  color: textColor,
                  ...typography.body.small,
                }}
              >
                {step.day} days
              </Text>

              {index < steps.length - 1 ? (
                <View
                  style={{
                    position: "absolute",
                    top: 22,
                    left: "63%",
                    right: "-37%",
                    height: 3,
                    borderRadius: 999,
                    backgroundColor:
                      step.day < nextTarget || highestReached >= step.day + 30
                        ? "#0052AD"
                        : "#E2E8F0",
                  }}
                />
              ) : null}
            </View>
          );
        })}
      </View>
    </View>
  );
}


