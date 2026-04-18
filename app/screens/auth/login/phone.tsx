import { useState } from "react";

import { View } from "react-native";
import { useRouter } from "expo-router";

import { AuthInputField } from "../../../../components/auth/login/AuthInputField";
import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import { AuthBackButton, AuthScaffold } from "../../../../components/auth/login/AuthScaffold";
import { AppButton } from "../../../../components/ui/AppButton";
import { spacing } from "../../../../theme/theme";

export default function AuthPhoneScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  return (
    <AuthScaffold
      topSlot={<AuthBackButton />}
      contentAlignment="top"
      header={
        <AuthLogoHeader
          compact
          title="Sign In with Phone Number"
          subtitle="We'll send a verification code to your phone number."
        />
      }
      footer={
        <AppButton
          label="Next"
          disabled={phone.trim().length < 7}
          onPress={() => router.push("/screens/auth/login/phone-verify")}
        />
      }>
      <View style={{ gap: spacing[16], marginTop: spacing[8] }}>
        <AuthInputField
          label="Phone Number"
          placeholder="Enter your phone number"
          keyboardType="numeric"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
    </AuthScaffold>
  );
}
