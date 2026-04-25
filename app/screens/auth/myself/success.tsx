import { useEffect, useRef } from "react";

import { Href, useRouter } from "expo-router";
import { Animated, Easing, ScrollView, Text } from "react-native";

import { SignupSuccessMark } from "../../../../components/auth/signup/SignupSuccessMark";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../../theme";

export default function SignupSuccessScreen() {
  const router = useRouter();
  const homeRoute = "/(tabs)/home" as Href;
  const heroOpacity = useRef(new Animated.Value(0)).current;
  const heroScale = useRef(new Animated.Value(0.92)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonTranslateY = useRef(new Animated.Value(14)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(heroOpacity, {
        toValue: 1,
        duration: 360,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(heroScale, {
        toValue: 1,
        friction: 7,
        tension: 70,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 240,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(buttonTranslateY, {
          toValue: 0,
          duration: 240,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [buttonOpacity, buttonTranslateY, heroOpacity, heroScale]);

  return (
    <AppScreen>
      <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.View
          style={[
            {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: spacing[56],
              opacity: heroOpacity,
              transform: [{ scale: heroScale }],
            },
          ]}
        >
          <SignupSuccessMark />
          <Text
            style={[
              textStyles.titleT2,
              {
                color: colors.text.primary,
                textAlign: "center",
                fontWeight: "500",
              },
            ]}
          >
            Account Created Successfully!
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            paddingBottom: spacing[8],
            opacity: buttonOpacity,
            transform: [{ translateY: buttonTranslateY }],
          }}
        >
          <AppButton label="Done" onPress={() => router.replace(homeRoute)} />
        </Animated.View>
      </ScrollView>
    </AppScreen>
  );
}
