import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthInputField } from "../../../components/auth/AuthInputField";
import { AuthLogoHeader } from "../../../components/auth/AuthLogoHeader";
import { AuthBackButton, AuthScaffold } from "../../../components/auth/AuthScaffold";
import { AppButton } from "../../../components/ui/AppButton";
import { spacing } from "../../../theme/theme";

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
      footer={<AppButton label="Next" onPress={() => router.push("/screens/login/verify")} />}>
      <View style={styles.form}>
        <AuthInputField
          label="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
        />
      </View>
    </AuthScaffold>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: spacing[16],
    marginTop: spacing[8],
  },
});
