import { useState } from "react";

import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthInputField } from "../../../components/auth/AuthInputField";
import { AuthLogoHeader } from "../../../components/auth/AuthLogoHeader";
import { AuthBackButton, AuthScaffold } from "../../../components/auth/AuthScaffold";
import { AppButton } from "../../../components/ui/AppButton";
import { spacing } from "../../../theme/theme";

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
          onPress={() => router.push("/screens/login/phone-verify")}
        />
      }>
      <View style={styles.form}>
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

const styles = StyleSheet.create({
  form: {
    gap: spacing[16],
    marginTop: spacing[8],
  },
});
