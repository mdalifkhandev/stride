import { useRouter } from "expo-router";
import { View } from "react-native";

import { AuthInputField } from "../../../../components/auth/login/AuthInputField";
import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import {
  AuthBackButton,
  AuthScaffold,
} from "../../../../components/auth/login/AuthScaffold";
import { AppButton } from "../../../../components/ui/AppButton";
import { spacing } from "../../../../trast/theme";

export default function AuthEmailScreen() {
  const router = useRouter();

  return (
    <AuthScaffold
      topSlot={<AuthBackButton />}
      contentAlignment="top"
      header={
        <AuthLogoHeader
          compact
          title="Sign In with Email"
          subtitle="We'll send a verification code to your email address."
        />
      }
      footer={
        <AppButton
          label="Next"
          onPress={() => router.push("/screens/auth/login/verify")}
        />
      }
    >
      <View style={{ gap: spacing[16], marginTop: spacing[8] }}>
        <AuthInputField
          label="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
        />
      </View>
    </AuthScaffold>
  );
}
