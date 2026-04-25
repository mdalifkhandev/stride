import { Pressable, Text, View } from "react-native";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

type ProgressTabsProps = {
  activeTab: "progress" | "leaderboard";
  onChange: (tab: "progress" | "leaderboard") => void;
};

export function ProgressTabs({ activeTab, onChange }: ProgressTabsProps) {
  return (
    <View className="rounded-[16px] border border-[#B9BEC7] bg-white p-3">
      <View className="flex-row gap-3">
        {(["progress", "leaderboard"] as const).map((tab) => {
          const selected = activeTab === tab;

          return (
            <Pressable
              key={tab}
              onPress={() => onChange(tab)}
              className={`flex-1 items-center rounded-[10px] py-3 ${
                selected ? "bg-[#145CB4]" : "bg-white"
              }`}
            >
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: scaleTextSize(16),
                  lineHeight: scaleLineHeight(24),
                  color: selected ? "#FFFFFF" : "#6E6E6E",
                }}
              >
                {tab === "progress" ? "Progress" : "Leaderboard"}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
