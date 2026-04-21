import { BrandMark } from "@/components/auth/login/BrandMark";
import { AppButton } from "@/components/ui/AppButton";
import { AppScreen } from "@/components/ui/AppScreen";
import { colors, spacing, textStyles } from "@/trast/theme";
import { Href, router } from "expo-router";
import { Text, View } from "react-native";

const loginRoute = "/screens/auth/login" as Href;
const signupRoute = "/screens/auth/signup" as Href;

export default function AuthIndex() {
  return (
    <AppScreen>
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
                fontSize: 18,
                lineHeight: 28,
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
                fontSize: 16,
                lineHeight: 24,
                color: colors.text.secondary,
                textAlign: "center",
              },
            ]}
          >
            Stay ahead of decline with Stride!
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <BrandMark />
        </View>

        <View style={{ gap: spacing[16], paddingBottom: spacing[8] }}>
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
    </AppScreen>
  );
}
