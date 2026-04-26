import { typography } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Svg, { Line, Path } from "react-native-svg";


export function ProgressPerformanceCard() {
  return (
    <View className="rounded-[20px] border border-[#B9BEC7] bg-white px-4 py-4 shadow-sm">
      <View className="flex-row items-center justify-between">
        <Text
          style={{
            ...typography.title.t2,
            color: "#252B36",
          }}
        >
          Performance
        </Text>
        <View className="flex-row items-center gap-1">
          <Text
            style={{
              ...typography.body.large,
              color: "#2B6FD6",
            }}
          >
            Weekly
          </Text>
          <Ionicons name="chevron-down" size={18} color="#2B6FD6" />
        </View>
      </View>

      <View className="mt-4">
        <Svg width="100%" height="190" viewBox="0 0 320 190">
          {[30, 70, 110, 150].map((y) => (
            <Line
              key={y}
              x1="40"
              y1={y}
              x2="308"
              y2={y}
              stroke="#C9CED8"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
          ))}

          <Path
            d="M52 160 C76 132, 92 112, 122 108 C154 104, 180 102, 210 94 C240 86, 260 38, 304 26"
            fill="none"
            stroke="#145CB4"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <Path
            d="M52 166 C74 150, 98 126, 128 120 C160 116, 190 114, 220 108 C250 102, 276 68, 304 58"
            fill="none"
            stroke="#4A9B4D"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </Svg>

        <View className="mt-2 flex-row justify-between px-4">
          {["Sat", "Sun", "Mon", "Tus", "Wed", "Thr", "Fri"].map((day) => (
            <Text
              key={day}
              style={{
                ...typography.body.small,
                color: "#6E6E6E",
              }}
            >
              {day}
            </Text>
          ))}
        </View>

        <View className="mt-4 flex-row items-center justify-center gap-5">
          <View className="flex-row items-center gap-2">
            <View className="h-3 w-3 rounded-full bg-[#145CB4]" />
            <Text
              style={{
                ...typography.body.small,
                color: "#6E6E6E",
              }}
            >
              Game
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="h-3 w-3 rounded-full bg-[#4A9B4D]" />
            <Text
              style={{
                ...typography.body.small,
                color: "#6E6E6E",
              }}
            >
              Game
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}


