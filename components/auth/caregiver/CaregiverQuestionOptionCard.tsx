import { Pressable, Text, View } from "react-native";


import { caregiverQuestionStyles, colors, typography } from "../../../theme";
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
              ...typography.body.large,
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
                ...typography.body.small,
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

