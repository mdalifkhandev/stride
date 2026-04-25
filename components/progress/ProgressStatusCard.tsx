import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

const bars = [
  { day: "Sun", value: 0.42 },
  { day: "Mon", value: 0.5 },
  { day: "Tus", value: 0.34 },
  { day: "Wed", value: 0.4 },
  { day: "Thru", value: 0.47 },
  { day: "Fri", value: 0.48 },
  { day: "Sat", value: 0.48 },
];

export function ProgressStatusCard() {
  return (
    <View className="rounded-[20px] border border-[#B9BEC7] bg-white px-4 py-4 shadow-sm">
      <View className="flex-row items-center justify-between">
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: scaleTextSize(18),
            lineHeight: scaleLineHeight(27),
            color: "#252B36",
          }}
        >
          Status
        </Text>
        <View className="flex-row items-center gap-1">
          <Text
            style={{
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(16),
              lineHeight: scaleLineHeight(24),
              color: "#2B6FD6",
            }}
          >
            Day
          </Text>
          <Ionicons name="chevron-down" size={18} color="#2B6FD6" />
        </View>
      </View>

      <View className="mt-6 flex-row items-end justify-between">
        {bars.map((bar) => (
          <View key={bar.day} className="items-center">
            <View className="h-[180px] w-5 rounded-full bg-[#DDEBFB]">
              <View
                className="absolute bottom-0 w-5 rounded-full bg-[#145CB4]"
                style={{ height: `${bar.value * 100}%` }}
              />
            </View>
            <Text
              style={{
                marginTop: 8,
                fontFamily: "Inter-Medium",
                fontSize: scaleTextSize(14),
                lineHeight: scaleLineHeight(21),
                color: "#6E6E6E",
              }}
            >
              {bar.day}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
