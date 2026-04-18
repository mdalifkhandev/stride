import { BrandMark } from "@/components/auth/BrandMark";
import { AppButton } from "@/components/ui/AppButton";
import { AppScreen } from "@/components/ui/AppScreen";
import { colors, spacing, textStyles } from "@/theme/theme";
import { Href, router } from "expo-router";
import { Text, View } from "react-native";

const loginRoute = "/screens/login" as Href;
const signupRoute = "/screens/signup" as Href;

export default function AuthIndex() {
  return (
    <AppScreen>
      <View
        style={{
          alignItems: "center",
          gap: spacing[4],
          paddingTop: spacing[16],
        }}
      >
        <Text
          style={[
            textStyles.h2,
            {
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
            { color: colors.text.secondary, textAlign: "center" },
          ]}
        >
          Stay ahead of decline with Stride!
        </Text>
      </View>

      <BrandMark />

      <View style={{ gap: spacing[16], paddingBottom: spacing[8] }}>
        <AppButton label="Sign in" onPress={() => router.push(loginRoute)} />
        <AppButton
          label="Create account"
          variant="secondary"
          onPress={() => router.push(signupRoute)}
        />
      </View>
    </AppScreen>
  );
}
