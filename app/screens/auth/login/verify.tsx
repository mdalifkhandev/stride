import { useState } from "react";

import { KeyboardAvoidingView, Platform, View } from "react-native";

import { AuthVerifyHeader } from "../../../../components/auth/login/AuthVerifyHeader";
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={spacing[8]}
    >
      <AuthScaffold
        topSlot={<AuthBackButton />}
        contentAlignment="top"
        header={
          <AuthVerifyHeader
            title="Verify code"
            email="example@gmail.com."
          />
        }
      >
        <View style={{ gap: spacing[16], marginTop: spacing[16] }}>
          <VerificationCode code={code} onChange={setCode} />
          <AppButton label="Next" />
        </View>
      </AuthScaffold>
    </KeyboardAvoidingView>
  );
}
