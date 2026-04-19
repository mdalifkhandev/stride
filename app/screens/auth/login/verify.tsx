import { useState } from "react";

import { View } from "react-native";

import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import {
  AuthBackButton,
  AuthScaffold,
} from "../../../../components/auth/login/AuthScaffold";
import { VerificationCode } from "../../../../components/auth/login/VerificationCode";
import { AppButton } from "../../../../components/ui/AppButton";
import { spacing } from "../../../../trast/theme";

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
      footer={<AppButton label="Next" />}
    >
      <View style={{ gap: spacing[16], marginTop: spacing[32] }}>
        <VerificationCode code={code} onChange={setCode} />
      </View>
    </AuthScaffold>
  );
}
