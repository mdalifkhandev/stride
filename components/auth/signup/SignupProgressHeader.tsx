import { useEffect, useMemo, useRef, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Animated, Easing, Pressable, Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../accessibility/TextScaleContext";
import { colors, progressHeaderStyles } from "../../../trast/theme";

type SignupProgressHeaderProps = {
  progress?: number;
  currentStep?: number;
  totalSteps?: number;
};

export function SignupProgressHeader({
  progress,
  currentStep,
  totalSteps,
}: SignupProgressHeaderProps) {
  useTextScale();
  const router = useRouter();
  const [trackWidth, setTrackWidth] = useState(0);
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const resolvedProgress = useMemo(() => {
    if (typeof progress === "number") {
      return clampProgress(progress);
    }

    if (
      typeof currentStep === "number" &&
      typeof totalSteps === "number" &&
      totalSteps > 0
    ) {
      return clampProgress((currentStep / totalSteps) * 100);
    }

    return 0;
  }, [currentStep, progress, totalSteps]);

  useEffect(() => {
    if (!trackWidth) {
      return;
    }

    Animated.timing(animatedWidth, {
      toValue: (trackWidth * resolvedProgress) / 100,
      duration: 420,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [animatedWidth, resolvedProgress, trackWidth]);

  return (
    <View style={progressHeaderStyles.container}>
      <Pressable
        hitSlop={10}
        onPress={() => router.back()}
        style={progressHeaderStyles.backButton}
      >
        <Ionicons name="chevron-back" size={22} color={colors.text.primary} />
      </Pressable>

      <View
        onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
        style={progressHeaderStyles.track}
      >
        <Animated.View
          style={{
            ...progressHeaderStyles.indicator,
            width: animatedWidth,
          }}
        />
      </View>

      <Text
        style={[
          progressHeaderStyles.percentage,
          {
            fontSize: scaleTextSize(20),
            lineHeight: scaleLineHeight(30),
          },
        ]}
      >
        {resolvedProgress}%
      </Text>
    </View>
  );
}

function clampProgress(progress: number) {
  return Math.max(0, Math.min(100, Math.round(progress)));
}
