import { typography } from "@/theme";
import { Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

type ProgressGaugeCardProps = {
  score: number;
  maxScore: number;
};

export function ProgressGaugeCard({ score, maxScore }: ProgressGaugeCardProps) {
  const percent = Math.max(0, Math.min(score / maxScore, 1));
  const radius = 74;
  const circumference = Math.PI * radius;
  const dashOffset = circumference * (1 - percent);

  return (
    <View className="rounded-[20px] border border-[#B9BEC7] bg-white px-5 pb-4 pt-4 shadow-sm">
      <View className="items-center">
        <View className="relative h-[142px] w-[240px] items-center justify-end">
          <Svg width={240} height={142} viewBox="0 0 240 142">
            <Path
              d="M30 120 A90 90 0 0 1 210 120"
              stroke="#E7F0FB"
              strokeWidth={34}
              strokeLinecap="round"
              fill="none"
            />
            <Path
              d="M30 120 A90 90 0 0 1 210 120"
              stroke="#145CB4"
              strokeWidth={34}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={dashOffset}
            />
            <Circle cx="188" cy="48" r="26" fill="#EEF5FD" />
            <Path
              d="M170 72 L206 24"
              stroke="#D5E6FA"
              strokeWidth={6}
              strokeLinecap="round"
            />
            <Path
              d="M178 78 L214 30"
              stroke="#D5E6FA"
              strokeWidth={6}
              strokeLinecap="round"
            />
            <Path
              d="M186 84 L222 36"
              stroke="#D5E6FA"
              strokeWidth={6}
              strokeLinecap="round"
            />
          </Svg>

          <View className="absolute bottom-[10px] items-center">
            <Text
              style={{
                ...typography.title.t2,
                color: "#145CB4",
              }}
            >
              <Text
                style={{ ...typography.headline.h2, fontFamily: "Inter-Bold" }}
              >
                {score}
              </Text>
              <Text style={{ ...typography.title.t2, color: "#6E6E6E" }}>
                {" "}
                pt
              </Text>
            </Text>
          </View>
        </View>

        <View className="mt-2 rounded-full bg-[#E7F0FB] px-5 py-3">
          <Text
            style={{
              ...typography.label.ssm,
              color: "#4A4F57",
            }}
          >
            Only{" "}
            <Text style={{ fontFamily: "Inter-Bold", color: "#24262B" }}>
              {maxScore - score}pt
            </Text>{" "}
            to your next stage!
          </Text>
        </View>
      </View>
    </View>
  );
}
