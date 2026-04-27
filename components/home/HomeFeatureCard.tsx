import { typography } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

import FeatureTopLeftIcon from "../../assets/images/home-image-top-left.svg";
import LevelIcon from "../../assets/images/home-lavel-icon.svg";

const featuredImage = require("../../assets/images/home-feture-image.jpg");

type HomeFeatureCardProps = {
  onPress?: () => void;
};

export function HomeFeatureCard({ onPress }: HomeFeatureCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: 18,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
        padding: 12,
        shadowColor: "#0B3B7A",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
        elevation: 4,
      }}
    >
      <View
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          height: 340,
        }}
      >
        <Image
          source={featuredImage}
          style={{ width: "100%", height: 340 }}
          resizeMode="cover"
        />
        <LinearGradient
          pointerEvents="none"
          colors={["rgba(0, 29, 61, 0.60)", "rgba(102, 102, 102, 0.00)"]}
          locations={[0.0037, 0.5802]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />

        <View
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: "#8ac1fe40",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#ffffff70",
            borderWidth: 1,
          }}
        >
          <FeatureTopLeftIcon width={24} height={24} />
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
          <LevelIcon width={20} height={20} />
          <Text
            style={{
              color: "#FFFFFF",
              ...typography.label.small, // nearest to 13
            }}
          >
            2 Level
          </Text>
        </View>

        <LinearGradient
          pointerEvents="none"
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
              ...typography.label.xl,
            }}
          >
            Push Up
          </Text>
          <Text
            style={{
              marginTop: 4,
              color: "#EEF4FF",
              fontSize: 14,
              lineHeight: 21,
              fontFamily: "Inter-Regular",
              // ...typography.label.ssm, // nearest to 15
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
            ...typography.button.large,
            letterSpacing: 0.4,
          }}
        >
          TAKE YOUR STRIDE!
        </Text>
      </Pressable>
    </Pressable>
  );
}
