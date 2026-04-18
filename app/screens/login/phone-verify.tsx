import { useState } from "react";

import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthLogoHeader } from "../../../components/auth/AuthLogoHeader";
import { AuthBackButton, AuthScaffold } from "../../../components/auth/AuthScaffold";
import { VerificationCode } from "../../../components/auth/VerificationCode";
import { AppButton } from "../../../components/ui/AppButton";
import { spacing } from "../../../theme/theme";

export default function AuthPhoneVerifyScreen() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const isComplete = code.every((item) => item.length === 1);

  return (
    <AuthScaffold
      topSlot={<AuthBackButton />}
      contentAlignment="top"
      header={
        <AuthLogoHeader
          compact
          title="Check your phone"
          subtitle="Enter the 4-digit verification code sent to +1 ******5924"
        />
      }
      footer={
        <AppButton
          label="Next"
          disabled={!isComplete}
          onPress={() => router.push("/screens/login/use-case")}
        />
      }>
      <View style={styles.stack}>
        <VerificationCode code={code} onChange={setCode} />
      </View>
    </AuthScaffold>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: spacing[16],
    marginTop: spacing[32],
  },
});
