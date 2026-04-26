import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type PersonalInfoHeaderProps = {
  title: string;
  onBack?: () => void;
};

export function PersonalInfoHeader({
  title,
  onBack,
}: PersonalInfoHeaderProps) {
  return (
    <View className="relative mb-3 flex-row items-center justify-center py-3">
      <Pressable
        onPress={onBack}
        className="absolute left-0 h-10 w-10 items-center justify-center"
      >
        <Ionicons name="chevron-back" size={22} color="#292D32" />
      </Pressable>
      <Text className=" text-[22px] text-[#252B36]">
        {title}
      </Text>
    </View>
  );
}

