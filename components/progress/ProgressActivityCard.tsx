import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function ProgressActivityCard() {
  return (
    <View className="rounded-[20px] border border-[#B9BEC7] bg-white px-4 py-4 shadow-sm">
      <View className="flex-row items-center justify-between">
        <Text className="font-['Inter-Bold'] text-[18px] text-[#252B36]">
          Activity
        </Text>
        <View className="flex-row items-center gap-1">
          <Text className="font-['Inter-Bold'] text-[16px] text-[#2B6FD6]">
            January
          </Text>
          <Ionicons name="chevron-down" size={18} color="#2B6FD6" />
        </View>
      </View>

      <View className="mt-4 h-px bg-[#D4D8DE]" />

      <View className="mt-4 flex-row gap-3">
        <View className="flex-1 rounded-[18px] bg-[#E8F4E7] px-4 py-4">
          <View className="flex-row items-start justify-between">
            <Text className="font-['Inter-Bold'] text-[18px] leading-[30px] text-[#252B36]">
              Exercise{"\n"}240
            </Text>
            <MaterialCommunityIcons
              name="chart-bar"
              size={26}
              color="#145CB4"
            />
          </View>
        </View>

        <View className="flex-1 rounded-[18px] bg-[#FFF2DD] px-4 py-4">
          <View className="flex-row items-start justify-between">
            <Text className="font-['Inter-Bold'] text-[18px] leading-[30px] text-[#252B36]">
              Game{"\n"}10
            </Text>
            <MaterialCommunityIcons
              name="chart-bar"
              size={26}
              color="#145CB4"
            />
          </View>
        </View>
      </View>

      <View className="mt-4 rounded-[18px] bg-[#DCEBFF] px-4 py-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-['Inter-Bold'] text-[18px] text-[#252B36]">
            Progress
          </Text>
          <Text className="font-['Inter-Bold'] text-[18px] text-[#145CB4]">
            10%
          </Text>
        </View>

        <View className="mt-4 h-4 rounded-full bg-white">
          <View className="h-4 w-[18%] rounded-full bg-[#145CB4]" />
        </View>

        <Text className="mt-3 text-center font-['Inter-Medium'] text-[16px] text-[#4F555F]">
          keep going! You’re Improving.
        </Text>
      </View>
    </View>
  );
}
