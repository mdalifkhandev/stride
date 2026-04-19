import { useState } from "react";

import { useRouter } from "expo-router";
import { View } from "react-native";

import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import {
  AuthBackButton,
  AuthScaffold,
} from "../../../../components/auth/login/AuthScaffold";
import { VerificationCode } from "../../../../components/auth/login/VerificationCode";
import { AppButton } from "../../../../components/ui/AppButton";
import { spacing } from "../../../../trast/theme";

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
          onPress={() => router.push("/screens/auth/login/use-case")}
        />
      }
    >
      <View style={{ gap: spacing[16], marginTop: spacing[32] }}>
        <VerificationCode code={code} onChange={setCode} />
      </View>
    </AuthScaffold>
  );
}
