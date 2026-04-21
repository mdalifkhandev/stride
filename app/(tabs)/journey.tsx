import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JourneyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FCFDFF]">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="font-['Inter-Bold'] text-[24px] text-[#23314A]">
          Journey
        </Text>
        <Text className="mt-3 text-center font-['Inter-Regular'] text-[16px] text-[#667085]">
          Your activity journey screen will go here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
