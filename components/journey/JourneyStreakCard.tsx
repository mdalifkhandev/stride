import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

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
            fontFamily: "Inter-Bold",
            fontSize: scaleTextSize(18),
            lineHeight: scaleLineHeight(27),
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
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(60),
              lineHeight: scaleLineHeight(64),
            }}
          >
            {activityDays}
          </Text>
          <View style={{ marginLeft: 6, marginBottom: 10 }}>
            <Text
              style={{
                color: "#0052AD",
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(20),
                lineHeight: scaleLineHeight(24),
              }}
            >
              days
            </Text>
            <Text
              style={{
                color: "#0052AD",
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(16),
                lineHeight: scaleLineHeight(20),
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
                  fontFamily: "Inter-SemiBold",
                  fontSize: scaleTextSize(12),
                  lineHeight: scaleLineHeight(18),
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
