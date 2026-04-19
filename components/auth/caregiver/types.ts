export type CaregiverQuestionOption = {
  label: string;
  description?: string;
};

export type CaregiverQuestionFieldConfig = {
  label: string;
  placeholder: string;
};

export type CaregiverQuestionScreen =
  | {
      kind: "single";
      title: string;
      prompt: string;
      options: CaregiverQuestionOption[];
    }
  | {
      kind: "multi";
      title: string;
      prompt: string;
      options: CaregiverQuestionOption[];
    }
  | {
      kind: "text";
      title: string;
      fields: CaregiverQuestionFieldConfig[];
    }
  | {
      kind: "mixed";
      title: string;
      groups: Array<{
        prompt: string;
        options: CaregiverQuestionOption[];
      }>;
    };
