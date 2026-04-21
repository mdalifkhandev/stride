import { useState } from "react";

import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import { AuthInputField } from "../../../../components/auth/login/AuthInputField";
import { AuthPhoneHeader } from "../../../../components/auth/login/AuthPhoneHeader";
import {
  AuthBackButton,
  AuthScaffold,
} from "../../../../components/auth/login/AuthScaffold";
import { AppButton } from "../../../../components/ui/AppButton";
import { spacing } from "../../../../trast/theme";

export default function AuthPhoneScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

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
          <AuthPhoneHeader
            title="Sign In with Phone Number"
            subtitle="We'll send a verification code to your email address."
          />
        }
      >
        <View style={{ gap: spacing[20], marginTop: spacing[16] }}>
          <AuthInputField
            label="Phone Number"
            placeholder="Type your phone number"
            keyboardType="numeric"
            value={phone}
            onChangeText={setPhone}
          />
          <AppButton
            label="Next"
            disabled={phone.trim().length < 7}
            onPress={() => router.push("/screens/auth/login/phone-verify")}
          />
        </View>
      </AuthScaffold>
    </KeyboardAvoidingView>
  );
}
