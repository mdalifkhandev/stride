import { typography } from "@/theme";
import { Text, View } from "react-native";



type AwardBadgeComponent = React.ComponentType<{ width?: number; height?: number }>;

type JourneyMilestoneCardProps = {
  title: string;
  day: number;
  awardBadge: AwardBadgeComponent;
  reached: boolean;
  highlighted?: boolean;
  quote?: string;
};

export function JourneyMilestoneCard({
  title,
  day,
  awardBadge: AwardBadge,
  reached,
  highlighted = false,
  quote,
}: JourneyMilestoneCardProps) {
  const backgroundColor = highlighted ? "#FFF8EC" : "#F7F8FA";
  const borderColor = highlighted ? "#FFAF2A" : "#C9CED6";
  const titleColor = highlighted ? "#24262B" : "#8E939B";
  const brandColor = highlighted ? "#2B6FD6" : "#A8C2EA";
  const bodyColor = highlighted ? "#6F6C68" : "#B1B5BC";
  const accentColor = highlighted ? "#2B6FD6" : "#C9D2DE";
  const badgeOpacity = highlighted ? 1 : 0.32;

  return (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor,
        backgroundColor,
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 14,
          borderBottomWidth: 1,
          borderBottomColor: highlighted ? "#EED7B0" : "#D9DEE5",
        }}
      >
        <Text
          style={{
            color: titleColor,
            ...typography.title.t2,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: brandColor,
            ...typography.body.large, // nearest to 17
          }}
        >
          Stride
        </Text>
      </View>

      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, paddingRight: 12 }}>
          {reached ? (
            <>
              <Text
                style={{
                  color: "#24262B",
                  ...typography.title.t2,
                }}
              >
                Congratulation!
              </Text>
              <Text
                style={{
                  marginTop: 6,
                  color: bodyColor,
                  ...typography.body.large,
                  fontStyle: "italic",
                }}
              >
                Awarded for{" "}
                <Text
                  style={{
                    color: accentColor,
                  }}
                >
                  {day} Days
                </Text>{" "}
                of{"\n"}Consistent Activity.
              </Text>
            </>
          ) : (
            <Text
              style={{
                color: bodyColor,
                ...typography.body.large,
                fontStyle: "italic",
              }}
            >
              {'"'}
              {quote}
              {'"'}
            </Text>
          )}
        </View>

        <View style={{ opacity: badgeOpacity }}>
          <AwardBadge width={72} height={92} />
        </View>
      </View>
    </View>
  );
}


