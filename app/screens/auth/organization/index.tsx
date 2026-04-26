import { useMemo, useState } from "react";

import { Href, useRouter } from "expo-router";
import { View } from "react-native";

import { CaregiverQuestionLayout, CaregiverQuestionOptionCard, CaregiverQuestionSection } from "../../../../components/auth/caregiver";
import { organizationServiceOptions, organizationServiceTypes } from "../../../../components/auth/organization";
import { caregiverQuestionStyles } from "../../../../theme";

export default function OrganizationIndexScreen() {
  const router = useRouter();
  const [serviceType, setServiceType] = useState<string>(
    organizationServiceTypes[0],
  );
  const [services, setServices] = useState<string[]>([]);

  const nextRoute = "/screens/auth/organization/admin-info" as Href;

  const selectedServices = useMemo(() => new Set(services), [services]);

  const toggleService = (label: string) => {
    setServices((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };

  return (
    <CaregiverQuestionLayout
      currentStep={1}
      totalSteps={3}
      footerAction={() => router.push(nextRoute)}
    >
      <CaregiverQuestionSection
        prompt="How would you best describe your service? (Select one)"
      >
        <View style={caregiverQuestionStyles.optionList}>
          {organizationServiceTypes.map((option) => (
            <CaregiverQuestionOptionCard
              key={option}
              option={{ label: option }}
              selected={serviceType === option}
              selectionType="single"
              onPress={() => setServiceType(option)}
            />
          ))}
        </View>
      </CaregiverQuestionSection>

      <CaregiverQuestionSection
        prompt="What services do you provide? (Select all that apply)"
      >
        <View style={caregiverQuestionStyles.optionList}>
          {organizationServiceOptions.map((option) => (
            <CaregiverQuestionOptionCard
              key={option}
              option={{ label: option }}
              selected={selectedServices.has(option)}
              selectionType="multi"
              onPress={() => toggleService(option)}
            />
          ))}
        </View>
      </CaregiverQuestionSection>
    </CaregiverQuestionLayout>
  );
}
