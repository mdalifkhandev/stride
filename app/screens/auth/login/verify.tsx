import { useState } from "react";

import { Href, useRouter } from "expo-router";
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
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const isComplete = code.every((item) => item.length === 1);
  const homeRoute = "/(tabs)/home" as Href;

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
