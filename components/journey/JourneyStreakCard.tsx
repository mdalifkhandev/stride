import { typography } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";



type AwardBadgeComponent = React.ComponentType<{ width?: number; height?: number }>;

type JourneyStreakCardProps = {
  activityDays: number;
  awardBadge: AwardBadgeComponent;
};

const weekLabels = ["Sun", "Mon", "Tus", "Wed", "Fri", "Sat", "Sun"] as const;

export function JourneyStreakCard({
  activityDays,
  awardBadge: AwardBadge,
}: JourneyStreakCardProps) {
  const activeCount = activityDays >= 90 ? 7 : activityDays >= 60 ? 6 : activityDays >= 30 ? 6 : 3;

  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 14,
        shadowColor: "#0B3B7A",
        shadowOpacity: 0.06,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            backgroundColor: "#FFF2E7",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="flame" size={16} color="#FF7A00" />
        </View>
        <Text
          style={{
            marginLeft: 10,
            color: "#24262B",
            ...typography.title.t2,
            letterSpacing: 0.8,
            textTransform: "uppercase",
          }}
        >
          Current Streak
        </Text>
      </View>

      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text
            style={{
              color: "#0052AD",
              ...typography.headline.h1, // nearest to 60
            }}
          >
            {activityDays}
          </Text>
          <View style={{ marginLeft: 6, marginBottom: 10 }}>
            <Text
              style={{
                color: "#0052AD",
                ...typography.headline.h3,
              }}
            >
              days
            </Text>
            <Text
              style={{
                color: "#0052AD",
                ...typography.body.large,
              }}
            >
              in a row!
            </Text>
          </View>
        </View>

        <AwardBadge width={92} height={108} />
      </View>

      <View
        style={{
          marginTop: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {weekLabels.map((label, index) => {
          const active = index < activeCount;
          return (
            <View key={`${label}-${index}`} style={{ alignItems: "center" }}>
              <View
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  borderWidth: 1.5,
                  borderColor: "#FF7A00",
                  backgroundColor: active ? "#FFFFFF" : "#FFF8F1",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name={active ? "flame" : "remove"}
                  size={active ? 14 : 16}
                  color="#FF7A00"
                />
              </View>

              <Text
                style={{
                  marginTop: 6,
                  color: "#0052AD",
                  ...typography.caption.small,
                }}
              >
                {label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}


