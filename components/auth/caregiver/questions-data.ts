import type { CaregiverQuestionScreen } from "./types";

export const caregiverQuestionScreens: CaregiverQuestionScreen[] = [
  {
    kind: "single",
    title: "Health & Activity",
    prompt: "How active are you right now?",
    options: [
      { label: "Rarely or Never" },
      { label: "1-2 times per week" },
      { label: "3+ times per week" },
    ],
  },
  {
    kind: "single",
    title: "Health & Activity",
    prompt: "Which Describes You Best?",
    options: [
      { label: "I mostly sit during the day" },
      { label: "I walk or move around regularly" },
      { label: "I exercise or do physical activities often" },
    ],
  },
  {
    kind: "multi",
    title: "Health & Activity",
    prompt: "Health conditions (select all that apply)",
    options: [
      { label: "Diabetes" },
      { label: "Heart Disease" },
      { label: "High Blood Pressure" },
      { label: "Osteoporosis" },
      { label: "Arthritis" },
      { label: "Parkinson's Disease" },
      { label: "Stroke" },
      { label: "Dementia" },
      { label: "None of the above" },
    ],
  },
  {
    kind: "multi",
    title: "Health & Activity",
    prompt: "Pain or discomfort areas (select all that apply)",
    options: [
      { label: "Knees" },
      { label: "Hips" },
      { label: "Back" },
      { label: "Shoulders" },
      { label: "Neck" },
      { label: "Balance Problems" },
      { label: "History of Falls" },
      { label: "No pain or discomfort" },
    ],
  },
  {
    kind: "multi",
    title: "Preferences & Goals",
    prompt: "Types of exercise you enjoy (select all that apply)",
    options: [
      { label: "Walking" },
      { label: "Stretching" },
      { label: "Tai Chi" },
      { label: "Strengthening" },
      { label: "Cardio" },
      { label: "Balance" },
      { label: "Dancing" },
      { label: "Seated Workouts" },
    ],
  },
  {
    kind: "multi",
    title: "Preferences & Goals",
    prompt: "Equipment available at home (select all that apply)",
    options: [
      { label: "Sturdy Chair" },
      { label: "Resistance Bands" },
      { label: "Light Weights (1-5 lbs)" },
      { label: "Strengthening" },
      { label: "Step or Stairs" },
      { label: "None - I prefer no equipment workouts" },
    ],
  },
  {
    kind: "multi",
    title: "Preferences & Goals",
    prompt: "Mobility aids used (select all that apply)",
    options: [
      { label: "Wheelchair" },
      { label: "Walker" },
      { label: "Cane or Walking Stick" },
      { label: "None - No mobility aids needed" },
    ],
  },
  {
    kind: "single",
    title: "Preferences & Goals",
    prompt: "Main wellness goals (select all that apply)",
    options: [
      {
        label: "Joint Mobility",
        description: "Improve flexibility and range of motion",
      },
      {
        label: "Balance",
        description: "Improve stability and prevent falls",
      },
      {
        label: "Cognition",
        description: "Improve mental sharpness and coordination",
      },
    ],
  },
  {
    kind: "text",
    title: "Preferences & Goals",
    fields: [
      {
        label: "Favorite hobbies or interests.",
        placeholder: "Type here..",
      },
      {
        label: "What are you looking forward to in the next 2-4 weeks?",
        placeholder: "Type here..",
      },
      {
        label: "What are you looking forward to in the next 2-6 months?",
        placeholder: "Type here..",
      },
    ],
  },
  {
    kind: "mixed",
    title: "Preferences & Goals",
    groups: [
      {
        prompt: "Preferred energy level for workouts.",
        options: [
          {
            label: "Low - I prefer gentle movements",
          },
          {
            label: "Moderate - I can handle some challenge",
          },
          {
            label: "High - I want to push myself",
          },
        ],
      },
      {
        prompt: "Preferred time of day to exercise",
        options: [
          { label: "Morning" },
          { label: "Afternoon" },
          { label: "Evening" },
        ],
      },
    ],
  },
  {
    kind: "mixed",
    title: "Preferences & Goals",
    groups: [
      {
        prompt: "What else should we know about you?",
        options: [
          { label: "Hip replacement" },
          { label: "Recent fall" },
          { label: "Knee pain" },
          { label: "Balance issues" },
          { label: "Recovery from injury" },
          { label: "Other" },
        ],
      },
    ],
  },
];
