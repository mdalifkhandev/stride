import type { TextStyle, ViewStyle } from "react-native";

import { appColors } from "./tokens/appColors";
import { semanticColors } from "./tokens/semanticColors";
import { appTypography } from "./tokens/appTypography";
import { appBorderRadius, appBorderWidth, appSpacing } from "./tokens/appSpacing";

const buildTextTheme = (isLight: boolean) => {
  const baseColor = isLight ? appColors.gray500 : appColors.gray50;
  const mutedColor = isLight ? appColors.gray300 : appColors.gray200;

  return {
    displayLarge: { ...appTypography.headlineH1, color: baseColor } as TextStyle,
    displayMedium: { ...appTypography.headlineH2, color: baseColor } as TextStyle,
    displaySmall: { ...appTypography.headlineH3, color: baseColor } as TextStyle,
    headlineLarge: { ...appTypography.headlineH1, color: baseColor } as TextStyle,
    headlineMedium: { ...appTypography.headlineH2, color: baseColor } as TextStyle,
    headlineSmall: { ...appTypography.headlineH3, color: baseColor } as TextStyle,
    titleLarge: { ...appTypography.titleT2, color: baseColor } as TextStyle,
    titleMedium: { ...appTypography.titleSmall, color: baseColor } as TextStyle,
    titleSmall: { ...appTypography.labelSSM, color: baseColor } as TextStyle,
    bodyLarge: { ...appTypography.bodyLarge, color: baseColor } as TextStyle,
    bodyMedium: { ...appTypography.bodySmall, color: baseColor } as TextStyle,
    bodySmall: { ...appTypography.bodyXSM, color: mutedColor } as TextStyle,
    labelLarge: { ...appTypography.buttonSmall, color: baseColor } as TextStyle,
    labelMedium: { ...appTypography.captionLarge, color: baseColor } as TextStyle,
    labelSmall: { ...appTypography.captionSmall, color: mutedColor } as TextStyle,
  } as const;
};

const buildTheme = (isLight: boolean) => ({
  brightness: isLight ? "light" : "dark",
  colorScheme: {
    primary: appColors.blue500,
    onPrimary: appColors.gray0,
    primaryContainer: appColors.blue50,
    onPrimaryContainer: appColors.blue700,
    secondary: appColors.bongchon500,
    onSecondary: appColors.gray0,
    secondaryContainer: appColors.bongchon50,
    onSecondaryContainer: appColors.bongchon800,
    error: appColors.red100,
    onError: appColors.gray0,
    errorContainer: appColors.red50,
    onErrorContainer: appColors.red500,
    surface: isLight ? appColors.gray0 : appColors.gray900,
    onSurface: isLight ? appColors.gray500 : appColors.gray50,
    surfaceContainerHighest: isLight ? appColors.gray50 : appColors.gray800,
    outline: isLight ? appColors.gray200 : appColors.gray400,
    outlineVariant: isLight ? appColors.gray100 : appColors.gray600,
  },
  scaffold: {
    backgroundColor: isLight ? appColors.extraColor1 : appColors.gray950,
  } as ViewStyle,
  appBar: {
    backgroundColor: isLight ? appColors.gray0 : appColors.gray900,
    foregroundColor: isLight ? appColors.gray500 : appColors.gray50,
    shadowColor: "transparent",
    surfaceTintColor: "transparent",
    titleTextStyle: {
      ...appTypography.titleT2,
      color: isLight ? appColors.gray500 : appColors.gray50,
    } as TextStyle,
  },
  textTheme: buildTextTheme(isLight),
  elevatedButton: {
    backgroundColor: appColors.blue500,
    foregroundColor: appColors.gray0,
    disabledBackgroundColor: appColors.gray50,
    disabledForegroundColor: appColors.gray200,
    textStyle: appTypography.buttonSmall,
    paddingHorizontal: appSpacing.s24,
    paddingVertical: appSpacing.s12,
    borderRadius: appBorderRadius.buttonRadius,
    elevation: 0,
  },
  outlinedButton: {
    foregroundColor: appColors.blue500,
    disabledForegroundColor: appColors.gray200,
    textStyle: appTypography.buttonSmall,
    paddingHorizontal: appSpacing.s24,
    paddingVertical: appSpacing.s12,
    borderRadius: appBorderRadius.buttonRadius,
    borderColor: appColors.blue500,
    borderWidth: appBorderWidth.w1,
  },
  textButton: {
    foregroundColor: appColors.blue500,
    textStyle: appTypography.buttonSmall,
    paddingHorizontal: appSpacing.s16,
    paddingVertical: appSpacing.s8,
    borderRadius: appBorderRadius.buttonRadius,
  },
  input: {
    filled: true,
    fillColor: isLight ? appColors.gray0 : appColors.gray800,
    hintStyle: {
      ...appTypography.placeholderSmall,
      color: appColors.gray200,
    } as TextStyle,
    contentPaddingHorizontal: appSpacing.s16,
    contentPaddingVertical: appSpacing.s12,
    borderRadius: appBorderRadius.inputRadius,
    borderWidth: appBorderWidth.w1,
    enabledBorderColor: appColors.gray100,
    focusedBorderColor: appColors.blue200,
    focusedBorderWidth: appBorderWidth.w2,
    errorBorderColor: appColors.red100,
    disabledBorderColor: appColors.gray50,
  },
  card: {
    color: isLight ? appColors.gray0 : appColors.gray800,
    surfaceTintColor: "transparent",
    elevation: 0,
    borderRadius: appBorderRadius.cardRadius,
    borderColor: appColors.gray50,
    borderWidth: appBorderWidth.w1,
    margin: 0,
  },
  divider: {
    color: appColors.gray50,
    thickness: appBorderWidth.w1,
    space: 0,
  },
  chip: {
    backgroundColor: isLight ? appColors.gray50 : appColors.gray800,
    selectedColor: appColors.blue50,
    labelStyle: {
      ...appTypography.captionLarge,
      color: isLight ? appColors.gray400 : appColors.gray100,
    } as TextStyle,
    borderColor: isLight ? appColors.gray100 : appColors.gray600,
    borderWidth: appBorderWidth.w1,
    paddingHorizontal: appSpacing.s12,
    paddingVertical: appSpacing.s4,
    borderRadius: appBorderRadius.rFull,
  },
  bottomNavigationBar: {
    backgroundColor: isLight ? appColors.gray0 : appColors.gray900,
    selectedItemColor: appColors.blue500,
    unselectedItemColor: appColors.gray200,
    selectedLabelStyle: appTypography.captionSmallBold,
    unselectedLabelStyle: appTypography.captionSmall,
    elevation: 0,
  },
  snackBar: {
    backgroundColor: isLight ? appColors.gray500 : appColors.gray100,
    contentTextStyle: {
      ...appTypography.bodySmall,
      color: isLight ? appColors.gray0 : appColors.gray900,
    } as TextStyle,
    borderRadius: appBorderRadius.cardRadius,
  },
  switch: {
    thumbColorSelected: appColors.gray0,
    thumbColorDefault: appColors.gray200,
    trackColorSelected: appColors.blue500,
    trackColorDefault: appColors.gray100,
  },
  checkbox: {
    fillColorSelected: appColors.blue500,
    fillColorDefault: "transparent",
    checkColor: appColors.gray0,
    sideColor: appColors.gray200,
    sideWidth: appBorderWidth.w15,
    borderRadius: appBorderRadius.r4,
  },
  radio: {
    fillColorSelected: appColors.blue500,
    fillColorDefault: appColors.gray200,
  },
  semanticColors,
});

export const appTheme = {
  light: buildTheme(true),
  dark: buildTheme(false),
} as const;

