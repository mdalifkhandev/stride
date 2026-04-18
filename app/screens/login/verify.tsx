import { useState } from "react";

import { StyleSheet, View } from "react-native";

import { AuthLogoHeader } from "../../../components/auth/AuthLogoHeader";
import { AuthBackButton, AuthScaffold } from "../../../components/auth/AuthScaffold";
import { VerificationCode } from "../../../components/auth/VerificationCode";
import { AppButton } from "../../../components/ui/AppButton";
import { spacing } from "../../../theme/theme";

export default function AuthVerifyScreen() {
  const [code, setCode] = useState(["", "", "", ""]);

  return (
    <AuthScaffold
      topSlot={<AuthBackButton />}
      contentAlignment="top"
      header={
        <AuthLogoHeader
          compact
          title="Verify code"
          subtitle="We sent OTP code to your email example@gmail.com. Enter the code below to verify."
        />
      }
      footer={<AppButton label="Next" />}>
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
