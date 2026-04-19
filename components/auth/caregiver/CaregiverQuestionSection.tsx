import type { PropsWithChildren } from "react";

import { Text, View } from "react-native";

import { caregiverQuestionStyles } from "../../../trast/theme";

type CaregiverQuestionSectionProps = PropsWithChildren<{
  title?: string;
  prompt: string;
}>;

export function CaregiverQuestionSection({
  title,
  prompt,
  children,
}: CaregiverQuestionSectionProps) {
  return (
    <View style={caregiverQuestionStyles.section}>
      {title ? <Text style={caregiverQuestionStyles.title}>{title}</Text> : null}
      <Text style={caregiverQuestionStyles.prompt}>{prompt}</Text>
      {children}
    </View>
  );
}
