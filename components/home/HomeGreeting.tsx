import { Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../accessibility/TextScaleContext";

export function HomeGreeting() {
  const { textScale } = useTextScale();

  return (
    <View>
      <Text
        style={{
          color: "#1E2430",
          fontFamily: "Inter-Bold",
          fontSize: scaleTextSize(20),
          lineHeight: scaleLineHeight(30),
        }}
      >
        Hi, Sam!
      </Text>
      <Text
        style={{
          marginTop: 18,
          color: "#0052AD",
          fontFamily: "Inter-Bold",
          fontSize: 16 * textScale,
          lineHeight: 24 * textScale,
        }}
      >
        Prevent Decline, Take Your Strides!
      </Text>
    </View>
  );
}
