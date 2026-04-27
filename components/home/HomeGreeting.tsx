import { textStyles, typography } from "@/theme";
import { Text, View } from "react-native";

export function HomeGreeting() {
  return (
    <View>
      <Text
        style={{
          ...textStyles.h1,
          color: "#1E2430",
        }}
      >
        Hi, Sam!
      </Text>
      <Text
        style={{
          ...typography.label.xl,
          marginTop: 18,
          color: "#0052AD",
          fontWeight: "700",
        }}
      >
        Prevent Decline, Take Your Strides!
      </Text>
    </View>
  );
}
