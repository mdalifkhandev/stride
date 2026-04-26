import type { PropsWithChildren } from "react";

import { Text, View } from "react-native";


import { caregiverQuestionStyles, colors, typography } from "../../../theme";

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
      {title ? (
        <Text
          style={[
            caregiverQuestionStyles.title,
            {
              color: colors.text.primary,
              ...typography.headline.h2,
            },
          ]}
        >
          {title}
        </Text>
      ) : null}
      <Text
        style={[
          caregiverQuestionStyles.prompt,
          {
            color: colors.text.primary,
            ...typography.headline.h3,
          },
        ]}
      >
        {prompt}
      </Text>
      {children}
    </View>
  );
}

