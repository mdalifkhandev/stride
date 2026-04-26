import { textStyles } from "@/theme";
import { Text, View } from "react-native";



export function HomeGreeting() {
  return (
    <View>
      <Text
        style={{
          ...textStyles.h3,
          color: "#1E2430",
        }}
      >
        Hi, Sam!
      </Text>
      <Text
        style={{
          ...textStyles.bodyLarge,
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

