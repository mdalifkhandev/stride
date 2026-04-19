import type { PropsWithChildren, ReactNode } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { SignupProgressHeader } from "../signup/SignupProgressHeader";
import { AppButton } from "../../ui/AppButton";
import { AppScreen } from "../../ui/AppScreen";
import { caregiverQuestionStyles, spacing } from "../../../trast/theme";

type CaregiverQuestionLayoutProps = PropsWithChildren<{
  currentStep: number;
  totalSteps: number;
  footerAction: () => void;
  children: ReactNode;
  keyboardAware?: boolean;
}>;

export function CaregiverQuestionLayout({
  currentStep,
  totalSteps,
  footerAction,
  children,
  keyboardAware = false,
}: CaregiverQuestionLayoutProps) {
  const content = (
    <AppScreen>
      <View style={caregiverQuestionStyles.screenBody}>
        <SignupProgressHeader
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        <ScrollView
          style={{ flex: 1, marginTop: spacing[16] }}
          contentContainerStyle={caregiverQuestionStyles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>

        <View style={caregiverQuestionStyles.footer}>
          <AppButton label="Next" onPress={footerAction} />
          <Pressable
            onPress={footerAction}
            style={{ alignItems: "center", paddingVertical: spacing[4] }}
          >
            <Text style={caregiverQuestionStyles.skipText}>Skip</Text>
          </Pressable>
        </View>
      </View>
    </AppScreen>
  );

  if (!keyboardAware) {
    return content;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      {content}
    </KeyboardAvoidingView>
  );
}
