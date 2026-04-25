import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  scaleLineHeight,
  scaleTextSize,
} from "../../../components/accessibility/TextScaleContext";

const exerciseImage = require("../../../assets/images/home-feture-image.jpg");

export default function StageS1Screen() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F2F4F8" }}
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 4,
          paddingBottom: 24,
        }}
      >
        <View
          style={{
            minHeight: 44,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{ width: 40, height: 40, justifyContent: "center" }}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={26}
              color="#111827"
            />
          </Pressable>

          <Text
            style={{
              flex: 1,
              color: "#111827",
              fontFamily: "Inter-Medium",
              fontSize: scaleTextSize(16),
              lineHeight: scaleLineHeight(24),
            }}
          >
            Level 1
          </Text>

          <Pressable accessibilityRole="button">
            <Text
              style={{
                color: "#005CC8",
                fontFamily: "Inter-Medium",
                fontSize: scaleTextSize(16),
                lineHeight: scaleLineHeight(24),
              }}
            >
              Skip
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            marginTop: 10,
            borderRadius: 14,
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 14,
            paddingVertical: 12,
          }}
        >
          <Text
            style={{
              color: "#0052AD",
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(30 / 1.6),
              lineHeight: scaleLineHeight(24),
            }}
          >
            Stride-2
          </Text>

          <View
            style={{
              marginTop: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 14,
                borderRadius: 999,
                backgroundColor: "#D9E5F3",
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: "40%",
                  height: "100%",
                  backgroundColor: "#0052AD",
                  borderRadius: 999,
                }}
              />
            </View>
            <Text
              style={{
                color: "#0052AD",
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(21),
                lineHeight: scaleLineHeight(24),
              }}
            >
              40%
            </Text>
          </View>
        </View>

        <Text
          style={{
            marginTop: 26,
            color: "#24262B",
            fontFamily: "Inter-Medium",
            fontSize: scaleTextSize(34),
            lineHeight: scaleLineHeight(42),
          }}
        >
          Soccer leg push
        </Text>
        <Text
          style={{
            marginTop: 2,
            color: "#24262B",
            fontFamily: "Inter-Bold",
            fontSize: scaleTextSize(23),
            lineHeight: scaleLineHeight(30),
          }}
        >
          Lift Right leg up
        </Text>

        <View
          style={{
            marginTop: 24,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#A8B0BA",
            backgroundColor: "#ECEFF3",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            height: 450,
          }}
        >
          <Image
            source={exerciseImage}
            resizeMode="contain"
            style={{
              width: "90%",
              height: "96%",
            }}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            gap: 16,
          }}
        >
          <Pressable
            style={{
              flex: 1,
              height: 48,
              borderRadius: 9,
              borderWidth: 1.2,
              borderColor: "#0052AD",
              backgroundColor: "#F7FAFF",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 8,
            }}
            accessibilityRole="button"
          >
            <MaterialCommunityIcons name="restore" size={20} color="#0052AD" />
            <Text
              style={{
                color: "#0052AD",
                fontFamily: "Inter-Medium",
                fontSize: scaleTextSize(17),
                lineHeight: scaleLineHeight(24),
              }}
            >
              Start Again
            </Text>
          </Pressable>

          <Pressable
            style={{
              flex: 1,
              height: 48,
              borderRadius: 9,
              borderWidth: 1.2,
              borderColor: "#0052AD",
              backgroundColor: "#F7FAFF",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 8,
            }}
            accessibilityRole="button"
            onPress={() => router.push("/screens/journey/stage-s1-complete")}
          >
            <MaterialCommunityIcons name="pause" size={18} color="#0052AD" />
            <Text
              style={{
                color: "#0052AD",
                fontFamily: "Inter-Medium",
                fontSize: scaleTextSize(17),
                lineHeight: scaleLineHeight(24),
              }}
            >
              Pause Exercise
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
