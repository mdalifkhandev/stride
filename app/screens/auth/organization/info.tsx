import { useState } from "react";

import { Href, useRouter } from "expo-router";

import { CaregiverQuestionLayout, CaregiverQuestionSection } from "../../../../components/auth/caregiver";
import { SignupField } from "../../../../components/auth/signup/SignupField";

export default function OrganizationInfoScreen() {
  const router = useRouter();
  const doneRoute = "/screens/auth/myself/success" as Href;

  const [organizationName, setOrganizationName] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");

  return (
    <CaregiverQuestionLayout
      currentStep={3}
      totalSteps={3}
      footerAction={() => router.push(doneRoute)}
      keyboardAware
    >
      <CaregiverQuestionSection prompt="My Organization Info">
        <SignupField
          label="Organization Name"
          placeholder="Type your organization name"
          value={organizationName}
          onChangeText={setOrganizationName}
        />
        <SignupField
          label="Organization Email"
          placeholder="example@gamil.com"
          value={organizationEmail}
          onChangeText={setOrganizationEmail}
          keyboardType="email-address"
        />
      </CaregiverQuestionSection>
    </CaregiverQuestionLayout>
  );
}
