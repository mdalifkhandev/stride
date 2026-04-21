import { Ionicons } from "@expo/vector-icons";
import { Image, type ImageSourcePropType, Pressable, View } from "react-native";

type PersonalInfoAvatarProps = {
  source: ImageSourcePropType;
};

export function PersonalInfoAvatar({ source }: PersonalInfoAvatarProps) {
  return (
    <View className="mb-7 mt-2 items-center">
      <View className="relative">
        <View className="h-[122px] w-[122px] overflow-hidden rounded-full border-[2px] border-[#CDC7DE] bg-white shadow-sm">
          <Image source={source} className="h-full w-full" resizeMode="cover" />
        </View>

        <Pressable className="absolute bottom-[6px] right-[-4px] h-10 w-10 items-center justify-center rounded-[12px] border border-[#D1D5DB] bg-[#F5F5F5]">
          <Ionicons name="camera-outline" size={18} color="#8A8A8A" />
        </Pressable>
      </View>
    </View>
  );
}
