import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import { AuthEmailHeader } from "../../../../components/auth/login/AuthEmailHeader";
import { AuthInputField } from "../../../../components/auth/login/AuthInputField";
import {
  AuthBackButton,
  AuthScaffold,
} from "../../../../components/auth/login/AuthScaffold";
import { AppButton } from "../../../../components/ui/AppButton";
import { spacing } from "../../../../trast/theme";

export default function AuthEmailScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={spacing[0]}
    >
      <AuthScaffold
        topSlot={<AuthBackButton />}
        contentAlignment="top"
        header={
          <AuthEmailHeader
            title="Sign In with Email"
            subtitle="We'll send a verification code to your email address."
          />
        }
      >
        <View style={{ gap: spacing[20], marginTop: spacing[16] }}>
          <AuthInputField
            label="Email"
            placeholder="example@gmail.com"
            keyboardType="email-address"
          />
          <AppButton
            label="Next"
            onPress={() => router.push("/screens/auth/login/verify")}
          />
        </View>
      </AuthScaffold>
    </KeyboardAvoidingView>
  );
}
