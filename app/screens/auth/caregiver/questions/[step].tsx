import { useMemo, useState } from "react";

import { Href, useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import {
  CaregiverQuestionLayout,
  CaregiverQuestionOptionCard,
  CaregiverQuestionSection,
  CaregiverQuestionTextField,
  caregiverQuestionScreens,
} from "../../../../../components/auth/caregiver";
import { caregiverQuestionStyles } from "../../../../../trast/theme";

export default function CaregiverQuestionStepScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ step?: string }>();
  const stepIndex = Math.max(0, Number(params.step ?? "1") - 1);
  const screen = caregiverQuestionScreens[stepIndex];
  const totalSteps = caregiverQuestionScreens.length;

  const [singleSelection, setSingleSelection] = useState<string | null>(
    screen?.kind === "single" && screen.options[0]
      ? screen.options[0].label
      : null,
  );
  const [multiSelection, setMultiSelection] = useState<string[]>([]);
  const [groupSelections, setGroupSelections] = useState<Record<number, string>>(
    {},
  );
  const [textValues, setTextValues] = useState<Record<number, string>>({});
  const [notes, setNotes] = useState("");

  const nextRoute = useMemo(() => {
    if (stepIndex >= totalSteps - 1) {
      return "/screens/auth/myself/success" as Href;
    }

    return `/screens/auth/caregiver/questions/${stepIndex + 2}` as Href;
  }, [stepIndex, totalSteps]);

  if (!screen) {
    return null;
  }

  const goNext = () => {
    router.push(nextRoute);
  };

  const toggleMulti = (label: string) => {
    setMultiSelection((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };

  const setGroupValue = (groupIndex: number, label: string) => {
    setGroupSelections((current) => ({ ...current, [groupIndex]: label }));
  };

  return (
    <CaregiverQuestionLayout
      currentStep={stepIndex + 1}
      totalSteps={totalSteps}
      footerAction={goNext}
      keyboardAware={screen.kind === "text" || screen.kind === "mixed"}
    >
      {"prompt" in screen ? (
        <CaregiverQuestionSection title={screen.title} prompt={screen.prompt}>
          <View style={caregiverQuestionStyles.optionList}>
            {screen.kind === "single"
              ? screen.options.map((option) => (
                  <CaregiverQuestionOptionCard
                    key={option.label}
                    option={option}
                    selected={singleSelection === option.label}
                    selectionType="single"
                    onPress={() => setSingleSelection(option.label)}
                  />
                ))
              : null}

            {screen.kind === "multi"
              ? screen.options.map((option) => (
                  <CaregiverQuestionOptionCard
                    key={option.label}
                    option={option}
                    selected={multiSelection.includes(option.label)}
                    selectionType="multi"
                    onPress={() => toggleMulti(option.label)}
                  />
                ))
              : null}
          </View>
        </CaregiverQuestionSection>
      ) : null}

      {screen.kind === "text"
        ? screen.fields.map((field, index) => (
            <CaregiverQuestionTextField
              key={field.label}
              label={field.label}
              placeholder={field.placeholder}
              value={textValues[index] ?? ""}
              onChangeText={(value) =>
                setTextValues((current) => ({ ...current, [index]: value }))
              }
            />
          ))
        : null}

      {screen.kind === "mixed"
        ? screen.groups.map((group, groupIndex) => (
            <CaregiverQuestionSection
              key={`${group.prompt}-${groupIndex}`}
              title={groupIndex === 0 ? screen.title : undefined}
              prompt={group.prompt}
            >
              <View style={caregiverQuestionStyles.optionList}>
                {group.options.map((option) => (
                  <CaregiverQuestionOptionCard
                    key={option.label}
                    option={option}
                    selected={groupSelections[groupIndex] === option.label}
                    selectionType="single"
                    onPress={() => setGroupValue(groupIndex, option.label)}
                  />
                ))}
              </View>

              {group.prompt === "What else should we know about you?" ? (
                <CaregiverQuestionTextField
                  label=""
                  placeholder="Type here.."
                  value={notes}
                  onChangeText={setNotes}
                  multiline
                />
              ) : null}
            </CaregiverQuestionSection>
          ))
        : null}
    </CaregiverQuestionLayout>
  );
}
