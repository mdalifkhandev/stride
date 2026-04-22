import type { PropsWithChildren, ReactNode } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../accessibility/TextScaleContext";
import { SignupProgressHeader } from "../signup/SignupProgressHeader";
import { AppButton } from "../../ui/AppButton";
import { AppScreen } from "../../ui/AppScreen";
import { caregiverQuestionStyles, colors, spacing } from "../../../trast/theme";

type CaregiverQuestionLayoutProps = PropsWithChildren<{
  currentStep?: number;
  totalSteps?: number;
  progress?: number;
  footerAction: () => void;
  children: ReactNode;
  keyboardAware?: boolean;
}>;

export function CaregiverQuestionLayout({
  currentStep,
  totalSteps,
  progress,
  footerAction,
  children,
  keyboardAware = false,
}: CaregiverQuestionLayoutProps) {
  useTextScale();

  const content = (
    <AppScreen>
      <View style={caregiverQuestionStyles.screenBody}>
        <SignupProgressHeader
          progress={progress}
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
            <Text
              style={[
                caregiverQuestionStyles.skipText,
                {
                  color: colors.text.action,
                  fontSize: scaleTextSize(20),
                  lineHeight: scaleLineHeight(30),
                },
              ]}
            >
              Skip
            </Text>
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
