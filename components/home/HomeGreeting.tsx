import { Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../accessibility/TextScaleContext";

type HomeGreetingProps = {
  message: string;
};

export function HomeGreeting({ message }: HomeGreetingProps) {
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
          marginTop: 4,
          color: "#4C5663",
          fontFamily: "Inter-Regular",
          fontSize: scaleTextSize(16),
          lineHeight: scaleLineHeight(24),
        }}
      >
        {message}
      </Text>
      <Text
        style={{
          marginTop: 22,
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
