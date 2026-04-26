import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

import StarIcon from "../../../assets/images/star.svg";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../../../components/accessibility/TextScaleContext";

const confetti = [
  { left: "16%", top: 42, rotate: "24deg" },
  { left: "28%", top: 68, rotate: "-8deg" },
  { left: "40%", top: 46, rotate: "32deg" },
  { left: "62%", top: 72, rotate: "-20deg" },
  { left: "76%", top: 54, rotate: "10deg" },
  { left: "88%", top: 80, rotate: "-12deg" },
  { left: "18%", top: 138, rotate: "42deg" },
  { left: "34%", top: 122, rotate: "-18deg" },
  { left: "54%", top: 146, rotate: "8deg" },
  { left: "70%", top: 132, rotate: "28deg" },
  { left: "84%", top: 120, rotate: "-36deg" },
];

function OtterStageIcon({ width = 96, height = 80 }: { width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 39 32" fill="none">
      <Path
        d="M35.0742 1.09325C35.3166 1.25482 35.5589 1.4164 35.8086 1.58286C36.38 1.72721 36.9521 1.82971 37.5318 1.93477C37.6902 1.98021 37.8487 2.02566 38.0119 2.07248C38.35 2.74875 38.3034 3.28361 38.2567 4.03092C38.0951 4.1925 37.9335 4.35407 37.7671 4.52054C37.6979 5.20969 37.6529 5.88001 37.6294 6.57079C37.6146 6.94504 37.599 7.31927 37.5825 7.69345C37.5737 7.94261 37.5737 7.94261 37.5648 8.19681C37.5201 8.70635 37.4032 9.16647 37.2775 9.66146C37.2461 10.2426 37.2215 10.8241 37.201 11.4057C36.937 16.4473 35.3804 20.7239 32.1365 24.5946C31.9986 24.7755 31.8607 24.9563 31.7186 25.1426C28.678 28.9838 23.4158 31.1198 18.6722 31.694C13.3249 32.0135 8.18437 30.898 4.02782 27.3363C1.56719 24.8536 0.0111494 21.928 0 18.4104C0.00189342 18.2094 0.00378684 18.0084 0.00573764 17.8013C0.00384422 17.5965 0.0019508 17.3917 0 17.1806C0.000631142 16.9828 0.00126228 16.7849 0.00191255 16.5811C0.0024648 16.4038 0.00301704 16.2265 0.00358603 16.0439C0.076034 15.464 0.269872 15.0629 0.556551 14.5576C0.798909 14.6384 1.04127 14.7192 1.29097 14.8024C1.50834 15.2447 1.50834 15.2447 1.68591 15.8199C1.78694 16.1334 1.78694 16.1334 1.89001 16.4532C1.95993 16.6759 2.02985 16.8986 2.10189 17.128C3.06962 20.0313 4.23938 22.3823 7.00662 23.9386C8.53415 24.631 9.91351 24.7082 11.5728 24.5946C11.5728 24.3523 11.5728 24.1099 11.5728 23.8602C11.3153 23.7794 11.0578 23.6986 10.7925 23.6154C9.43283 23.0248 8.93357 21.902 8.39704 20.5812C7.92175 19.1774 7.68166 17.7507 7.90073 16.2712C8.39034 15.7816 8.39034 15.7816 9.09416 15.7204C9.86236 15.7819 10.2017 15.861 10.8384 16.2712C11.2018 16.801 11.2018 16.801 11.5116 17.4035C11.6164 17.6035 11.7212 17.8036 11.8291 18.0097C11.9061 18.1631 11.9831 18.3165 12.0624 18.4745C12.2341 18.2473 12.4058 18.0201 12.5826 17.786C13.2435 17.0116 13.7659 16.595 14.7553 16.2712C15.2044 16.2836 15.6533 16.305 16.1017 16.3324C18.0478 16.4009 19.4844 15.5062 21.1203 14.5576C20.888 14.4869 20.6557 14.4162 20.4164 14.3434C19.6514 14.068 19.6514 14.068 19.1618 13.5784C19.0547 12.7674 19.0547 12.7674 19.1618 11.8647C19.6937 11.2208 20.128 10.7696 20.8755 10.3959C21.7652 10.3279 22.655 10.2864 23.5463 10.2438C23.7959 10.2132 24.0456 10.1826 24.3027 10.1511C24.7626 9.23142 24.6757 8.13533 24.7311 7.1216C24.7479 6.88682 24.7646 6.65203 24.7818 6.41013C24.7941 6.18355 24.8064 5.95697 24.8191 5.72353C24.8379 5.41283 24.8379 5.41283 24.8571 5.09585C24.7773 4.38728 24.4956 4.08998 24.0579 3.54131C24.1169 2.71623 24.2019 2.41815 24.7923 1.82767C25.1862 1.78223 25.1862 1.78223 25.588 1.73587C26.6237 1.56325 27.1248 1.20048 27.9748 0.603639C30.2841 -0.496008 32.8561 0.0507719 35.0742 1.09325Z"
        fill="#83CDCE"
      />
    </Svg>
  );
}

type MetricRowProps = {
  title: string;
  icon: "walk" | "balance" | "brain";
};

function MetricRow({ title, icon }: MetricRowProps) {
  const Icon = icon === "walk" ? Ionicons : MaterialCommunityIcons;
  const iconName = icon === "walk" ? "walk" : icon === "balance" ? "scale-balance" : "brain";

  return (
    <View
      style={{
        height: 66,
        borderRadius: 18,
        borderWidth: 1.2,
        borderColor: "#A5A5A5",
        backgroundColor: "#F6F7F8",
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 34,
          height: 34,
          borderRadius: 11,
          backgroundColor: "#DCE7F5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={iconName as never} size={18} color="#0E59B6" />
      </View>

      <Text
        style={{
          marginLeft: 10,
          flex: 1,
          color: "#1E2025",
          fontFamily: "Inter-Bold",
          fontSize: scaleTextSize(22 / 1.6),
          lineHeight: scaleLineHeight(26),
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "#1E2025",
          fontFamily: "Inter-Bold",
          fontSize: scaleTextSize(22 / 1.6),
          lineHeight: scaleLineHeight(26),
        }}
      >
        450
        <Text
          style={{
            color: "#787D84",
            fontFamily: "Inter-Medium",
          }}
        >
          /500
        </Text>
      </Text>
    </View>
  );
}

export default function StageS1CompleteScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    level?: string;
    stage?: string;
    replay?: string;
    completedStage?: string;
    currentLevel?: string;
    currentStage?: string;
  }>();
  const levelNumber = Number.parseInt(params.level ?? "1", 10) || 1;
  const stageNumber = Number.parseInt(params.stage ?? "1", 10) || 1;
  const isReplay = params.replay === "1";
  const currentCompletedStage =
    Number.parseInt(params.completedStage ?? "0", 10) || 0;
  const currentLevel = Number.parseInt(params.currentLevel ?? "1", 10) || 1;
  const currentStage = Number.parseInt(params.currentStage ?? "1", 10) || 1;
  const nextCompletedStage = Math.max(currentCompletedStage, stageNumber);
  const isLevelUp = !isReplay && stageNumber >= 5;
  const nextLevel = levelNumber + 1;

  const getJourneyRoute = () => {
    if (isReplay) {
      return `/(tabs)/journey?completedStage=${currentCompletedStage}&level=${currentLevel}&stage=${currentStage}`;
    }

    if (isLevelUp) {
      return `/screens/journey/level-up?completedStage=5&level=${nextLevel}`;
    }

    const nextStage = Math.min(nextCompletedStage + 1, 5);
    return `/(tabs)/journey?completedStage=${nextCompletedStage}&level=${levelNumber}&stage=${nextStage}`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }} edges={["top"]}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 24,
        }}
      >
        <View style={{ height: 320 }}>
          {confetti.map((item, index) => (
            <View
              key={`confetti-${index}`}
              style={{
                position: "absolute",
                left: item.left,
                top: item.top,
                width: 5,
                height: 14,
                borderRadius: 2,
                backgroundColor: "#D8E4F6",
                transform: [{ rotate: item.rotate }],
              }}
            />
          ))}

          <View style={{ marginTop: 44, alignItems: "center" }}>
            <OtterStageIcon width={104} height={86} />
          </View>

          <View style={{ marginTop: 30, alignItems: "center" }}>
            <View
              style={{
                width: "78%",
                height: 70,
                borderRadius: 18,
                backgroundColor: "#2B63A8",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#204E84",
                shadowOpacity: 0.18,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 5 },
                elevation: 4,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  left: -16,
                  width: 0,
                  height: 0,
                  borderTopWidth: 14,
                  borderBottomWidth: 14,
                  borderRightWidth: 18,
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                  borderRightColor: "#2B63A8",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  right: -16,
                  width: 0,
                  height: 0,
                  borderTopWidth: 14,
                  borderBottomWidth: 14,
                  borderLeftWidth: 18,
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                  borderLeftColor: "#2B63A8",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  borderRadius: 18,
                  backgroundColor: "#4593DD",
                }}
              />

              <Text
                style={{
                  color: "#F0F6FF",
                  fontFamily: "Inter-Medium",
                  fontSize: scaleTextSize(36 / 1.6),
                  lineHeight: scaleLineHeight(28),
                  zIndex: 1,
                }}
              >
                {`Stride ${stageNumber}`}
              </Text>
              <Text
                style={{
                  marginTop: -2,
                  color: "#FFFFFF",
                  fontFamily: "Inter-Bold",
                  fontSize: scaleTextSize(52 / 1.6),
                  lineHeight: scaleLineHeight(34),
                  zIndex: 1,
                }}
              >
                Complete
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 18,
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <StarIcon width={54} height={54} />
            <StarIcon width={54} height={54} />
            <View style={{ opacity: 0.34 }}>
              <StarIcon width={54} height={54} />
            </View>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <MetricRow title="Mobility" icon="walk" />
          <MetricRow title="Balance" icon="balance" />
          <MetricRow title="Cognition" icon="brain" />
        </View>

        {isReplay ? (
          <Text
            style={{
              marginTop: 14,
              color: "#0E59B6",
              fontFamily: "Inter-Medium",
              fontSize: scaleTextSize(14),
              lineHeight: scaleLineHeight(20),
              textAlign: "center",
            }}
          >
            Practice replay complete. No bonus points added.
          </Text>
        ) : null}

        <Pressable
          style={{
            marginTop: "auto",
            height: 68,
            borderRadius: 14,
            backgroundColor: "#0E59B6",
            alignItems: "center",
            justifyContent: "center",
          }}
          accessibilityRole="button"
          onPress={() => router.replace(getJourneyRoute())}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(42 / 1.6),
              lineHeight: scaleLineHeight(38),
            }}
          >
            {isReplay ? "Back to Journey" : "Get Points"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
