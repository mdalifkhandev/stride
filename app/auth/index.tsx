import { BrandMark } from "@/components/auth/login/BrandMark";
import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "@/components/accessibility/TextScaleContext";
import { AppButton } from "@/components/ui/AppButton";
import { AppScreen } from "@/components/ui/AppScreen";
import { colors, spacing, textStyles } from "@/theme";
import { Href, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const loginRoute = "/screens/auth/login" as Href;
const signupRoute = "/screens/auth/signup" as Href;

export default function AuthIndex() {
  useTextScale();

  return (
    <AppScreen>
      <ScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: "center",
              gap: spacing[4],
              paddingTop: spacing[12],
            }}
          >
            <Text
              style={[
                textStyles.h2,
                {
                  fontSize: scaleTextSize(18),
                  lineHeight: scaleLineHeight(28),
                  color: colors.text.action,
                  textAlign: "center",
                  fontWeight: "700",
                },
              ]}
            >
              Welcome to Stride
            </Text>
            <Text
              style={[
                textStyles.bodySmall,
                {
                  fontSize: scaleTextSize(16),
                  lineHeight: scaleLineHeight(24),
                  color: colors.text.secondary,
                  textAlign: "center",
                },
              ]}
            >
              Stay ahead of decline with Stride!
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center", minHeight: 280 }}>
            <BrandMark />
          </View>

          <View
            style={{
              gap: spacing[16],
              paddingBottom: spacing[8],
              marginTop: spacing[20],
            }}
          >
            <AppButton
              label="Sign in"
              fullRadius
              onPress={() => router.push(loginRoute)}
            />
            <AppButton
              label="Create account"
              variant="secondary"
              fullRadius
              onPress={() => router.push(signupRoute)}
            />
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
}
