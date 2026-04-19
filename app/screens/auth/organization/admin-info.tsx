import { useState } from "react";

import { Href, useRouter } from "expo-router";

import { CaregiverQuestionLayout, CaregiverQuestionSection } from "../../../../components/auth/caregiver";
import {
  OrganizationSelectField,
  organizationGenderOptions,
} from "../../../../components/auth/organization";
import { SignupField } from "../../../../components/auth/signup/SignupField";

export default function OrganizationAdminInfoScreen() {
  const router = useRouter();
  const nextRoute = "/screens/auth/organization/info" as Href;

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [age, setAge] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [gender, setGender] = useState("");

  return (
    <CaregiverQuestionLayout
      currentStep={2}
      totalSteps={3}
      footerAction={() => router.push(nextRoute)}
      keyboardAware
    >
      <CaregiverQuestionSection prompt="Organization Admin Info">
        <SignupField
          label="Admin Name"
          placeholder="Type your admin name"
          value={adminName}
          onChangeText={setAdminName}
        />
        <SignupField
          label="Admin Email"
          placeholder="example@gamil.com"
          value={adminEmail}
          onChangeText={setAdminEmail}
          keyboardType="email-address"
        />
        <SignupField
          label="Age"
          placeholder="Type your age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <SignupField
          label="Admin Role"
          placeholder="ex: executive admin"
          value={adminRole}
          onChangeText={setAdminRole}
        />
        <OrganizationSelectField
          label="Gender"
          placeholder="Select"
          value={gender}
          options={organizationGenderOptions}
          onChange={setGender}
        />
      </CaregiverQuestionSection>
    </CaregiverQuestionLayout>
  );
}
