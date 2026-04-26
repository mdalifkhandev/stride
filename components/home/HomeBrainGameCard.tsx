import { typography } from "@/theme";
import { ReactNode } from "react";

import { Pressable, Text, View } from "react-native";



type HomeBrainGameCardProps = {
  title: string;
  icon: ReactNode;
  onPress?: () => void;
};

export function HomeBrainGameCard({
  title,
  icon,
  onPress,
}: HomeBrainGameCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={{
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        padding: 12,
        shadowColor: "#0B3B7A",
        shadowOpacity: 0.06,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <View
          style={{
            width: 96,
            height: 96,
            borderRadius: 18,
            backgroundColor: "#0052AD",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </View>
        <Text
          style={{
            flex: 1,
            color: "#0052AD",
            ...typography.headline.h3,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}


