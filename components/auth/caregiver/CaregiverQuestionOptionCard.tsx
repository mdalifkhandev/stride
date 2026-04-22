import { Pressable, Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../accessibility/TextScaleContext";
import { caregiverQuestionStyles, colors } from "../../../trast/theme";
import type { CaregiverQuestionOption } from "./types";

type CaregiverQuestionOptionCardProps = {
  option: CaregiverQuestionOption;
  selected: boolean;
  selectionType: "single" | "multi";
  onPress: () => void;
};

export function CaregiverQuestionOptionCard({
  option,
  selected,
  selectionType,
  onPress,
}: CaregiverQuestionOptionCardProps) {
  useTextScale();

  return (
    <Pressable
      onPress={onPress}
      style={[
        caregiverQuestionStyles.optionCard,
        selected && caregiverQuestionStyles.optionCardSelected,
      ]}
    >
      <View
        style={[
          selectionType === "single"
            ? caregiverQuestionStyles.radio
            : caregiverQuestionStyles.checkbox,
          selected &&
            (selectionType === "single"
              ? caregiverQuestionStyles.radioSelected
              : caregiverQuestionStyles.checkboxSelected),
        ]}
      >
        {selected ? (
          selectionType === "single" ? (
            <View style={caregiverQuestionStyles.indicatorDot} />
          ) : (
            <Text style={caregiverQuestionStyles.indicatorCheck}>✓</Text>
          )
        ) : null}
      </View>

      <View style={caregiverQuestionStyles.optionContent}>
        <Text
          style={[
            caregiverQuestionStyles.optionLabel,
            {
              color: colors.text.primary,
              fontSize: scaleTextSize(16),
              lineHeight: scaleLineHeight(30),
            },
          ]}
        >
          {option.label}
        </Text>
        {option.description ? (
          <Text
            style={[
              caregiverQuestionStyles.optionDescription,
              {
                color: colors.text.secondary,
                fontSize: scaleTextSize(14),
                lineHeight: scaleLineHeight(30),
              },
            ]}
          >
            {option.description}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}
