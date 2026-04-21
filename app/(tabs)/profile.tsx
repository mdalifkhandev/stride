import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const avatarImage = require("../../assets/images/caregiver-first-screen.png");

const settingsItems = [
  { id: "personal", title: "Personal Information" },
  { id: "question", title: "Personalize Question" },
  { id: "caregiver", title: "Caregiver Settings" },
  { id: "subscription", title: "Subscription Management", badge: "Silver" },
  { id: "privacy", title: "Security & Privacy" },
];

function SettingRow({
  title,
  badge,
}: {
  title: string;
  badge?: string;
}) {
  return (
    <Pressable className="mb-4 flex-row items-center justify-between rounded-2xl bg-white px-4 py-5 shadow-sm">
      <View className="flex-row items-center">
        <Text className="font-['Inter-Medium'] text-[17px] text-[#252B36]">
          {title}
        </Text>
        {badge ? (
          <View className="ml-2 rounded-full bg-[#E5F0FF] px-2 py-0.5">
            <Text className="font-['Inter-SemiBold'] text-[10px] text-[#2B6FD6]">
              {badge}
            </Text>
          </View>
        ) : null}
      </View>

      <Ionicons name="arrow-forward" size={18} color="#252B36" />
    </Pressable>
  );
}

export default function ProfileScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#F5F7FB]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 pt-3">
          <View className="relative mb-5 flex-row items-center justify-center py-3">
            <Pressable className="absolute left-0 h-10 w-10 items-center justify-center">
              <Ionicons name="chevron-back" size={22} color="#292D32" />
            </Pressable>
            <Text className="font-['Inter-SemiBold'] text-[22px] text-[#252B36]">
              Profile
            </Text>
          </View>

          <View className="items-center rounded-[8px] bg-[#FBF0E1] px-5 pb-7 pt-6">
            <View className="relative">
              <View className="h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] border-[#F59E27] bg-[#FFF7ED]">
                <Image
                  source={avatarImage}
                  className="h-[82px] w-[82px] rounded-full"
                  resizeMode="cover"
                />
              </View>

              <View className="absolute bottom-0 left-1/2 h-8 w-8 -translate-x-4 items-center justify-center rounded-full border-2 border-[#FBF0E1] bg-[#FFC55A]">
                <Ionicons name="diamond" size={16} color="#FFF" />
              </View>
            </View>

            <View className="mt-4 rounded-full bg-[#FFC44D] px-4 py-1.5">
              <Text className="font-['Inter-Bold'] text-[18px] text-white">
                Prime
              </Text>
            </View>

            <Text className="mt-4 font-['Inter-SemiBold'] text-[19px] text-[#2C2D30]">
              Mahmudur Rahman
            </Text>
            <Text className="mt-2 text-center font-['Inter-Regular'] text-[16px] leading-7 text-[#6F6C68]">
              You&apos;re in your prime,{`\n`}thriving like never before!
            </Text>
          </View>

          <View className="mt-5 rounded-[10px] border border-[#F8B54B] bg-[#FFF8EC] px-4 py-5">
            <View className="flex-row items-start justify-between">
              <View>
                <Text className="font-['Inter-Bold'] text-[16px] text-[#3B362F]">
                  Consistency Elite
                </Text>
              </View>
              <Text className="font-['Inter-Bold'] text-[14px] text-[#2B6FD6]">
                Stride
              </Text>
            </View>

            <View className="mt-6 flex-row items-center justify-between">
              <View className="pr-4">
                <Text className="font-['Inter-Medium'] text-[17px] text-[#2C2D30]">
                  Congratulation!
                </Text>
                <Text className="mt-2 font-['Inter-Regular'] text-[15px] italic leading-6 text-[#6F6C68]">
                  Awarded for{" "}
                  <Text className="font-['Inter-Bold'] text-[#2B6FD6]">60 Days</Text> of{"\n"}
                  Consistent Activity.
                </Text>
              </View>

              <View className="items-center justify-center">
                <MaterialCommunityIcons
                  name="trophy-award"
                  size={70}
                  color="#F4B228"
                />
              </View>
            </View>
          </View>

          <View className="mb-4 mt-5 flex-row items-center">
            <Text className="mr-3 font-['Inter-SemiBold'] text-[17px] text-[#666A72]">
              Settings
            </Text>
            <View className="h-px flex-1 bg-[#D4D8DE]" />
          </View>

          {settingsItems.map((item) => (
            <SettingRow key={item.id} title={item.title} badge={item.badge} />
          ))}

          <Pressable className="mt-2 self-start rounded-xl bg-[#FDECEC] px-4 py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="logout-variant"
                size={20}
                color="#2B2B2B"
              />
              <Text className="ml-2 font-['Inter-Medium'] text-[17px] text-[#2B2B2B]">
                Log Out
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
