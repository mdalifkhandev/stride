import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AppButton } from "../../../components/ui/AppButton";
import { AppScreen } from "../../../components/ui/AppScreen";
import { SignupProgressHeader } from "../../../components/signup/SignupProgressHeader";
import { ScrollMeasurePicker } from "../../../components/signup/ScrollMeasurePicker";
import { UnitToggle } from "../../../components/signup/UnitToggle";
import { colors, spacing, textStyles } from "../../../theme/theme";

const WEIGHT_OPTIONS = [
  "060",
  "061",
  "062",
  "063",
  "064",
  "065",
  "066",
  "067",
  "068",
  "069",
  "070",
  "071",
  "072",
  "073",
  "074",
  "075",
  "076",
  "077",
  "078",
  "079",
  "080",
  "081",
  "082",
  "083",
  "084",
  "085",
  "086",
  "087",
  "088",
  "089",
  "090",
] as const;

const WEIGHT_DECIMALS = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
] as const;

export default function SignupWeightScreen() {
  const router = useRouter();
  const [unit, setUnit] = useState<"Pounds" | "Kg">("Kg");
  const [selectedLeftIndex, setSelectedLeftIndex] = useState(20);
  const [selectedRightIndex, setSelectedRightIndex] = useState(0);

  return (
    <AppScreen>
      <SignupProgressHeader progress={20} />

      <View style={styles.content}>
        <Text style={styles.title}>What&apos;s your Weight?</Text>
        <UnitToggle options={["Pounds", "Kg"] as const} value={unit} onChange={setUnit} />

        <ScrollMeasurePicker
          leftValues={WEIGHT_OPTIONS}
          rightValues={WEIGHT_DECIMALS}
          selectedLeftIndex={selectedLeftIndex}
          selectedRightIndex={selectedRightIndex}
          onChangeLeft={setSelectedLeftIndex}
          onChangeRight={setSelectedRightIndex}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonWrap}>
          <AppButton label="Previous" variant="secondary" onPress={() => router.back()} />
        </View>
        <View style={styles.buttonWrap}>
          <AppButton label="Done" onPress={() => router.push("/screens/signup/success")} />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[24],
  },
  title: {
    ...textStyles.titleT2,
    color: colors.text.primary,
    fontWeight: "700",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    gap: spacing[16],
  },
  buttonWrap: {
    flex: 1,
  },
});
