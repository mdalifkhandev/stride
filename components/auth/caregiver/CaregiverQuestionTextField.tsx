import { Text, TextInput, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../accessibility/TextScaleContext";
import { SignupField } from "../signup/SignupField";
import { caregiverQuestionStyles, colors } from "../../../theme";

type CaregiverQuestionTextFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  multiline?: boolean;
};

export function CaregiverQuestionTextField({
  label,
  placeholder,
  value,
  onChangeText,
  multiline = false,
}: CaregiverQuestionTextFieldProps) {
  useTextScale();

  if (!multiline) {
    return (
      <SignupField
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    );
  }

  return (
    <View style={caregiverQuestionStyles.textFieldGroup}>
      {label ? (
        <Text
          style={[
            caregiverQuestionStyles.textFieldLabel,
            {
              color: colors.text.primary,
              fontSize: scaleTextSize(20),
              lineHeight: scaleLineHeight(32),
            },
          ]}
        >
          {label}
        </Text>
      ) : null}
      <View
        style={[
          caregiverQuestionStyles.textField,
          caregiverQuestionStyles.textFieldMultiline,
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.secondary}
          multiline
          style={[
            caregiverQuestionStyles.textFieldInput,
            {
              textAlignVertical: "top",
              fontSize: scaleTextSize(14),
              lineHeight: scaleLineHeight(21),
            },
          ]}
        />
      </View>
    </View>
  );
}
