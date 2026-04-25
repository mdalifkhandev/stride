import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  Path,
  Rect,
  Text as SvgText,
} from "react-native-svg";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../components/accessibility/TextScaleContext";

type StageNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  status: StageStatus;
  showStart: boolean;
};

type StageStatus = "active" | "locked";

type StagePosition = {
  x: number;
  y: number;
};

type JourneyProgress = {
  level: number;
  stage: number;
};

const stageSize = 118;
const activeStageSize = 132;
const otterStageDots = Array.from({ length: 10 }, (_, index) => index);

const currentJourney: JourneyProgress = {
  level: 1,
  stage: 1,
};

const levelOnePositions: StagePosition[] = [
  { x: 195, y: 124 },
  { x: 195, y: 282 },
  { x: 150, y: 440 },
  { x: 240, y: 598 },
  { x: 150, y: 756 },
];

const levelTwoPositions: StagePosition[] = [
  { x: 195, y: 112 },
  { x: 195, y: 270 },
  { x: 150, y: 428 },
  { x: 240, y: 586 },
  { x: 150, y: 744 },
];

function getStageStatus({
  level,
  stage,
  progress,
}: {
  level: number;
  stage: number;
  progress: JourneyProgress;
}): StageStatus {
  if (level === progress.level && stage === progress.stage) {
    return "active";
  }

  return "locked";
}

function createStageLevel({
  level,
  positions,
  progress,
}: {
  level: number;
  positions: StagePosition[];
  progress: JourneyProgress;
}): StageNode[] {
  return positions.map((position, index) => {
    const stage = index + 1;

    return {
      id: `level-${level}-s${stage}`,
      label: `S-${stage}`,
      x: position.x,
      y: position.y,
      status: getStageStatus({ level, stage, progress }),
      showStart: level === progress.level && stage === progress.stage,
    };
  });
}

function LevelDivider({ label }: { label: string }) {
  return (
    <View style={{ paddingHorizontal: 22 }}>
      <Svg width="100%" height={38} viewBox="0 0 390 38">
        <Line
          x1={0}
          y1={18}
          x2={144}
          y2={18}
          stroke="#8D8D8D"
          strokeWidth={1.5}
        />
        <SvgText
          x={195}
          y={25}
          fill="#0065C8"
          fontFamily="Inter-Bold"
          fontSize={scaleTextSize(20)}
          textAnchor="middle"
        >
          {label}
        </SvgText>
        <Line
          x1={246}
          y1={18}
          x2={390}
          y2={18}
          stroke="#8D8D8D"
          strokeWidth={1.5}
        />
      </Svg>
    </View>
  );
}

function StageLock({ x, y }: { x: number; y: number }) {
  return (
    <G transform={`translate(${x - 12} ${y - 24})`}>
      <Path
        d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
        fill="#BABABA"
        stroke="#989898"
        strokeWidth={2}
      />
      <Path
        d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
        fill="#BABABA"
      />
      <Path
        d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9H7.5Z"
        stroke="#989898"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9961 15.5H12.0051"
        stroke="#989898"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  );
}

function StageCircle({ stage }: { stage: StageNode }) {
  const isActive = stage.status === "active";
  const size = isActive ? activeStageSize : stageSize;
  const radius = size / 2;
  const outerRadius = isActive ? radius - 5 : radius - 6;
  const gapRadius = radius - 12;
  const bandRadius = radius - 20;
  const middleRadius = isActive ? radius - 31 : 42;
  const fill = isActive ? "#E1EFFE" : "#E9E9E9";
  const ring = isActive ? "#0052AD" : "#9D9D9D";
  const textColor = isActive ? "#0052AD" : "#969696";
  const textSize = isActive ? 35 : 27;

  return (
    <G>
      {stage.showStart ? (
        <G>
          <Rect
            x={stage.x - 24}
            y={stage.y - radius - 39}
            width={48}
            height={26}
            rx={2}
            fill="#FFFFFF"
            stroke="#0058B9"
            strokeWidth={2}
          />
          <Path
            d={`M${stage.x - 8} ${stage.y - radius - 13}L${stage.x} ${stage.y - radius - 5}L${stage.x + 8} ${stage.y - radius - 13}`}
            fill="#FFFFFF"
            stroke="#0058B9"
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <SvgText
            x={stage.x}
            y={stage.y - radius - 21}
            fill="#0058B9"
            fontFamily="Inter-Regular"
            fontSize={scaleTextSize(15)}
            textAnchor="middle"
          >
            Start
          </SvgText>
          <Line
            x1={stage.x}
            y1={stage.y - radius - 4}
            x2={stage.x}
            y2={stage.y - radius + 18}
            stroke="#0058B9"
            strokeWidth={2}
            strokeDasharray="7 7"
          />
        </G>
      ) : null}

      <Circle cx={stage.x} cy={stage.y} r={radius} fill="#FFFFFF" />
      {isActive ? (
        <>
          <Circle cx={stage.x} cy={stage.y} r={outerRadius} fill={ring} />
          <Circle cx={stage.x} cy={stage.y} r={gapRadius} fill="#FFFFFF" />
          <Circle cx={stage.x} cy={stage.y} r={bandRadius} fill={fill} />
        </>
      ) : (
        <Circle
          cx={stage.x}
          cy={stage.y}
          r={outerRadius}
          fill={fill}
          stroke={ring}
          strokeWidth={10}
        />
      )}
      <Circle
        cx={stage.x}
        cy={stage.y}
        r={middleRadius}
        fill="#FFFFFF"
        opacity={isActive ? 1 : 0.74}
      />

      {!isActive ? <StageLock x={stage.x} y={stage.y - radius + 28} /> : null}

      <SvgText
        x={stage.x}
        y={stage.y + (isActive ? 13 : 10)}
        fill={textColor}
        fontFamily="Inter-Bold"
        fontSize={scaleTextSize(textSize)}
        textAnchor="middle"
      >
        {stage.label}
      </SvgText>
    </G>
  );
}

function StageMap({
  stages,
  height,
}: {
  stages: StageNode[];
  height: number;
}) {
  return (
    <View style={{ width: "100%", aspectRatio: 390 / height }}>
      <Svg width="100%" height="100%" viewBox={`0 0 390 ${height}`}>
        <Defs />
        {stages.slice(0, -1).map((stage, index) => {
          const next = stages[index + 1];
          return (
            <Line
              key={`${stage.id}-line`}
              x1={stage.x}
              y1={
                stage.y +
                (stage.status === "active" ? activeStageSize / 2 : stageSize / 2)
              }
              x2={next.x}
              y2={next.y - stageSize / 2}
              stroke="#5B5B5B"
              strokeWidth={3}
            />
          );
        })}

        {stages.map((stage) => (
          <StageCircle key={stage.id} stage={stage} />
        ))}
      </Svg>
    </View>
  );
}

function OtterStageIcon({
  width = 39,
  height = 32,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 39 32" fill="none">
      <Path
        d="M35.0742 1.09325C35.3166 1.25482 35.5589 1.4164 35.8086 1.58286C36.38 1.72721 36.9521 1.82971 37.5318 1.93477C37.6902 1.98021 37.8487 2.02566 38.0119 2.07248C38.35 2.74875 38.3034 3.28361 38.2567 4.03092C38.0951 4.1925 37.9335 4.35407 37.7671 4.52054C37.6979 5.20969 37.6529 5.88001 37.6294 6.57079C37.6146 6.94504 37.599 7.31927 37.5825 7.69345C37.5737 7.94261 37.5737 7.94261 37.5648 8.19681C37.5201 8.70635 37.4032 9.16647 37.2775 9.66146C37.2461 10.2426 37.2215 10.8241 37.201 11.4057C36.937 16.4473 35.3804 20.7239 32.1365 24.5946C31.9986 24.7755 31.8607 24.9563 31.7186 25.1426C28.678 28.9838 23.4158 31.1198 18.6722 31.694C13.3249 32.0135 8.18437 30.898 4.02782 27.3363C1.56719 24.8536 0.0111494 21.928 0 18.4104C0.00189342 18.2094 0.00378684 18.0084 0.00573764 17.8013C0.00384422 17.5965 0.0019508 17.3917 0 17.1806C0.000631142 16.9828 0.00126228 16.7849 0.00191255 16.5811C0.0024648 16.4038 0.00301704 16.2265 0.00358603 16.0439C0.076034 15.464 0.269872 15.0629 0.556551 14.5576C0.798909 14.6384 1.04127 14.7192 1.29097 14.8024C1.50834 15.2447 1.50834 15.2447 1.68591 15.8199C1.78694 16.1334 1.78694 16.1334 1.89001 16.4532C1.95993 16.6759 2.02985 16.8986 2.10189 17.128C3.06962 20.0313 4.23938 22.3823 7.00662 23.9386C8.53415 24.631 9.91351 24.7082 11.5728 24.5946C11.5728 24.3523 11.5728 24.1099 11.5728 23.8602C11.3153 23.7794 11.0578 23.6986 10.7925 23.6154C9.43283 23.0248 8.93357 21.902 8.39704 20.5812C7.92175 19.1774 7.68166 17.7507 7.90073 16.2712C8.39034 15.7816 8.39034 15.7816 9.09416 15.7204C9.86236 15.7819 10.2017 15.861 10.8384 16.2712C11.2018 16.801 11.2018 16.801 11.5116 17.4035C11.6164 17.6035 11.7212 17.8036 11.8291 18.0097C11.9061 18.1631 11.9831 18.3165 12.0624 18.4745C12.2341 18.2473 12.4058 18.0201 12.5826 17.786C13.2435 17.0116 13.7659 16.595 14.7553 16.2712C15.2044 16.2836 15.6533 16.305 16.1017 16.3324C18.0478 16.4009 19.4844 15.5062 21.1203 14.5576C20.888 14.4869 20.6557 14.4162 20.4164 14.3434C19.6514 14.068 19.6514 14.068 19.1618 13.5784C19.0547 12.7674 19.0547 12.7674 19.1618 11.8647C19.6937 11.2208 20.128 10.7696 20.8755 10.3959C21.7652 10.3279 22.655 10.2864 23.5463 10.2438C23.7959 10.2132 24.0456 10.1826 24.3027 10.1511C24.7626 9.23142 24.6757 8.13533 24.7311 7.1216C24.7479 6.88682 24.7646 6.65203 24.7818 6.41013C24.7941 6.18355 24.8064 5.95697 24.8191 5.72353C24.8379 5.41283 24.8379 5.41283 24.8571 5.09585C24.7773 4.38728 24.4956 4.08998 24.0579 3.54131C24.1169 2.71623 24.2019 2.41815 24.7923 1.82767C25.1862 1.78223 25.1862 1.78223 25.588 1.73587C26.6237 1.56325 27.1248 1.20048 27.9748 0.603639C30.2841 -0.496008 32.8561 0.0507719 35.0742 1.09325Z"
        fill="#83CDCE"
      />
    </Svg>
  );
}

function JourneyHeader() {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 8, paddingBottom: 18 }}>
      <View
        style={{
          borderRadius: 28,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 16,
          paddingTop: 22,
          paddingBottom: 24,
          shadowColor: "#101828",
          shadowOpacity: 0.13,
          shadowRadius: 22,
          shadowOffset: { width: 0, height: 12 },
          elevation: 6,
        }}
      >
        <View
          style={{
            minHeight: 58,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              backgroundColor: "#E4F2FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={22}
              color="#22242A"
            />
          </View>

          <View
            style={{
              flex: 1,
              minWidth: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginLeft: 10,
            }}
          >
            <OtterStageIcon width={32} height={31} />
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                color: "#202124",
                fontFamily: "Inter-Regular",
                fontSize: scaleTextSize(20),
                lineHeight: scaleLineHeight(38),
              }}
            >
              Otter Stages
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            minHeight: 170,
            borderRadius: 24,
            backgroundColor: "#E4F2FF",
            paddingHorizontal: 18,
            paddingTop: 30,
            paddingBottom: 22,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
            }}
          >
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                flex: 1,
                color: "#202124",
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(18),
                lineHeight: scaleLineHeight(39),
              }}
            >
              At Level 1
            </Text>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                flex: 0.8,
                color: "#202124",
                fontFamily: "Inter-Regular",
                fontSize: scaleTextSize(18),
                lineHeight: scaleLineHeight(39),
                textAlign: "right",
              }}
            >
              10 Left
            </Text>
          </View>

          <View
            style={{
              marginTop: 34,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {otterStageDots.map((dot) => (
              <View
                key={dot}
                style={{
                  width: "8.8%",
                  aspectRatio: 1,
                  borderRadius: 999,
                  backgroundColor: "#FFFFFF",
                }}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default function JourneyTabScreen() {
  const { textScale } = useTextScale();
  const levelOneStages = createStageLevel({
    level: 1,
    positions: levelOnePositions,
    progress: currentJourney,
  });
  const levelTwoStages = createStageLevel({
    level: 2,
    positions: levelTwoPositions,
    progress: currentJourney,
  });

  return (
    <SafeAreaView
      key={textScale}
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 6,
          paddingBottom: 26,
        }}
      >
        <JourneyHeader />
        <LevelDivider label="Level 1" />
        <StageMap stages={levelOneStages} height={830} />

        <View style={{ marginTop: 22 }}>
          <LevelDivider label="Level 2" />
        </View>
        <StageMap stages={levelTwoStages} height={820} />
      </ScrollView>
    </SafeAreaView>
  );
}
