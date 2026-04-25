import type { PropsWithChildren } from "react";

import { Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../accessibility/TextScaleContext";
import { caregiverQuestionStyles, colors } from "../../../theme";

type CaregiverQuestionSectionProps = PropsWithChildren<{
  title?: string;
  prompt: string;
}>;

export function CaregiverQuestionSection({
  title,
  prompt,
  children,
}: CaregiverQuestionSectionProps) {
  useTextScale();

  return (
    <View style={caregiverQuestionStyles.section}>
      {title ? (
        <Text
          style={[
            caregiverQuestionStyles.title,
            {
              color: colors.text.primary,
              fontSize: scaleTextSize(24),
              lineHeight: scaleLineHeight(36),
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
            fontSize: scaleTextSize(20),
            lineHeight: scaleLineHeight(32),
          },
        ]}
      >
        {prompt}
      </Text>
      {children}
    </View>
  );
}
