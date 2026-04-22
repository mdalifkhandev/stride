import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

import FeatureTopLeftIcon from "../../assets/images/home-image-top-left.svg";
import LevelIcon from "../../assets/images/home-lavel-icon.svg";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

const featuredImage = require("../../assets/images/home-feture-image.jpg");

type HomeFeatureCardProps = {
  onPress: () => void;
};

export function HomeFeatureCard({ onPress }: HomeFeatureCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: 18,
        borderRadius: 22,
        backgroundColor: "#FFFFFF",
        padding: 12,
        shadowColor: "#0B3B7A",
        shadowOpacity: 0.08,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 4,
      }}
    >
      <View style={{ overflow: "hidden", borderRadius: 18 }}>
        <Image
          source={featuredImage}
          style={{ width: "100%", height: 340 }}
          resizeMode="cover"
          blurRadius={4}
        />

        <View
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: "#8ac1fe80",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#ffffff70",
            borderWidth: 1,
          }}
        >
          <FeatureTopLeftIcon width={20} height={20} />
        </View>

        <View
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            borderRadius: 999,
            backgroundColor: "#8ac1fe40",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderColor: "#ffffff70",
            borderWidth: 1,
          }}
        >
          <LevelIcon width={16} height={16} />
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter-SemiBold",
              fontSize: scaleTextSize(13),
              lineHeight: scaleLineHeight(18),
            }}
          >
            2 Level
          </Text>
        </View>

        <LinearGradient
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 16,
          }}
          colors={["rgba(0, 29, 61, 0.54)", "rgba(102, 102, 102, 0)"]}
          locations={[0.5723, 0.8968]}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(18),
              lineHeight: scaleLineHeight(27),
            }}
          >
            Push Up
          </Text>
          <Text
            style={{
              marginTop: 4,
              color: "#EEF4FF",
              fontFamily: "Inter-Regular",
              fontSize: scaleTextSize(15),
              lineHeight: scaleLineHeight(21),
            }}
          >
            Let&apos;s Begin Stride - 2
          </Text>
        </LinearGradient>
      </View>

      <Pressable
        onPress={onPress}
        style={{
          marginTop: 14,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          borderWidth: 1.2,
          borderColor: "#0052AD",
          backgroundColor: "#FFFFFF",
          paddingVertical: 15,
        }}
      >
        <Text
          style={{
            color: "#0052AD",
            fontFamily: "Inter-Bold",
            fontSize: scaleTextSize(16),
            lineHeight: scaleLineHeight(24),
            letterSpacing: 0.4,
          }}
        >
          TAKE YOUR STRIDE!
        </Text>
      </Pressable>
    </Pressable>
  );
}
