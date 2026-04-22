import { useState } from "react";

import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { router } from "expo-router";
import { AuthLogoHeader } from "../../../../components/auth/login/AuthLogoHeader";
import {
  AuthBackButton,
  AuthScaffold,
} from "../../../../components/auth/login/AuthScaffold";
import { SignupField } from "../../../../components/auth/signup/SignupField";
import { AppButton } from "../../../../components/ui/AppButton";
import { spacing } from "../../../../trast/theme";

export default function CaregiverDetailsScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
          <AuthLogoHeader
            compact
            title="Personal Caregiver"
            subtitle="Ask a family member or friend to help answer the questions and keep track of your progress."
          />
        }
        footer={
          <AppButton label="Next" onPress={() => router.push("/(tabs)/home")} />
        }
      >
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{
            gap: spacing[16],
            paddingTop: spacing[8],
            paddingBottom: spacing[24],
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <SignupField
            label="Name"
            placeholder="Type your caregiver's name"
            value={name}
            onChangeText={setName}
          />
          <SignupField
            label="Email"
            placeholder="Type your caregiver's email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <SignupField
            label="Phone Number"
            placeholder="Type your caregiver's phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
          />
          <View />
        </ScrollView>
      </AuthScaffold>
    </KeyboardAvoidingView>
  );
}
