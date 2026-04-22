import { useState } from "react";

import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import { AuthPhoneVerifyHeader } from "../../../../components/auth/login/AuthPhoneVerifyHeader";
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
  const homeRoute = "/(tabs)/home" as const;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <AuthScaffold
        topSlot={<AuthBackButton />}
        contentAlignment="top"
        header={
          <AuthPhoneVerifyHeader
            title="Check your phone"
            phone="+1 *********5924"
          />
        }
      >
        <View style={{ gap: spacing[24], marginTop: spacing[16] }}>
          <VerificationCode code={code} onChange={setCode} />
          <AppButton
            label="Next"
            disabled={!isComplete}
            onPress={() => router.replace(homeRoute)}
          />
        </View>
      </AuthScaffold>
    </KeyboardAvoidingView>
  );
}
