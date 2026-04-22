import { StyleSheet, type TextStyle, type ViewStyle } from "react-native";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../components/accessibility/TextScaleContext";

import {
  appBorderRadius,
  appBorderWidth,
  appIconSize,
  appLayout,
  appSpacing,
} from "./tokens/premetive";
import { semanticColors, Typography } from "./tokens/semantic";

export * from "./tokens/premetive";
export * from "./tokens/semantic";

export const colors = {
  surface: {
    primary: semanticColors.surfacePrimary,
    primaryInverted: semanticColors.surfacePrimaryInverted,
    page: semanticColors.surfacePage,
    secondary: semanticColors.surfaceSecondary,
    action: semanticColors.surfaceAction,
    actionLight: semanticColors.surfaceActionLight,
    actionHover: semanticColors.surfaceActionHover,
    actionPressed: semanticColors.surfaceActionPressed,
    actionHoverLight: semanticColors.surfaceActionHoverLight,
    disabled: semanticColors.surfaceDisabled,
    disabledLight: semanticColors.surfaceDisabledLight,
    success: semanticColors.surfaceSuccess,
    errorLight: semanticColors.surfaceErrorLight,
    warningLight: semanticColors.surfaceWarningLight,
    normalLight: semanticColors.surfaceNormalLight,
    error: semanticColors.surfaceError,
    warning: semanticColors.surfaceWarning,
  },
  text: {
    primary: semanticColors.textPrimary,
    secondary: semanticColors.textSecondary,
    onAction: semanticColors.textOnAction,
    action: semanticColors.textAction,
    actionHover: semanticColors.textActionHover,
    actionPressed: semanticColors.textActionPressed,
    disabled: semanticColors.textDisabled,
    onDisabled: semanticColors.textOnDisabled,
    success: semanticColors.textSuccess,
    normal: semanticColors.textNormal,
    error: semanticColors.textError,
    warning: semanticColors.textWarning,
  },
  border: {
    primary: semanticColors.borderPrimary,
    primaryInverted: semanticColors.borderPrimaryInverted,
    secondary: semanticColors.borderSecondary,
    tertiary: semanticColors.borderTertiary,
    action: semanticColors.borderAction,
    actionLight: semanticColors.borderActionLight,
    actionHover: semanticColors.borderActionHover,
    actionPressed: semanticColors.borderActionPressed,
    onDisabled: semanticColors.borderOnDisabled,
    focus: semanticColors.borderFocus,
    success: semanticColors.borderSuccess,
    normal: semanticColors.borderNormal,
    error: semanticColors.borderError,
    warning: semanticColors.borderWarning,
  },
  icon: {
    primary: semanticColors.iconPrimary,
    secondary: semanticColors.iconSecondary,
    tertiary: semanticColors.iconTertiary,
    onAction: semanticColors.iconOnAction,
    action: semanticColors.iconAction,
    actionHover: semanticColors.iconActionHover,
    actionPressed: semanticColors.iconActionPressed,
    onDisabled: semanticColors.iconOnDisabled,
    focus: semanticColors.iconFocus,
    success: semanticColors.iconSuccess,
    normal: semanticColors.iconNormal,
    error: semanticColors.iconError,
    warning: semanticColors.iconWarning,
  },
} as const;

export const spacing = appSpacing;

export const radius = {
  none: appBorderRadius.none,
  xs: appBorderRadius.xs,
  sm: appBorderRadius.sm,
  md: appBorderRadius.md,
  lg: appBorderRadius.lg,
  xl: appBorderRadius.xl,
  xxl: appBorderRadius.xxl,
  xxxl: appBorderRadius.xxxl,
  full: appBorderRadius.full,

  card: appBorderRadius.card,
  button: appBorderRadius.button,
  chip: appBorderRadius.chip,
  input: appBorderRadius.input,
  sheet: appBorderRadius.sheet,
} as const;

export const border = appBorderWidth;
export const iconSize = appIconSize;
export const layout = appLayout;

export const typography = {
  display: {
    small: Typography.displaySmall,
  },
  headline: {
    h1: Typography.H1,
    h2: Typography.H2,
    h3: Typography.H3,
  },
  title: {
    small: Typography.titleSmall,
    t2: Typography.titleT2,
    t3: Typography.titleT3,
  },
  label: {
    ssm: Typography.labelSSM,
    small: Typography.labelSmall,
    large: Typography.labelLarge,
    xl: Typography.labelXL,
  },
  body: {
    xsm: Typography.bodyXSM,
    small: Typography.bodySmall,
    large: Typography.bodyLarge,
  },
  caption: {
    small: Typography.captionSmall,
    large: Typography.captionLarge,
    smallBold: Typography.captionSmallBold,
    xl: Typography.captionXL,
  },
  placeholder: {
    small: Typography.placeholderSmall,
  },
  button: {
    large: Typography.buttonLarge,
    small: Typography.buttonSmall,
    icon: Typography.buttonIcon,
  },
  stateBar: {
    small: Typography.stateBarSmall,
  },
} as const;

function makeScaledTextStyle(
  base: TextStyle,
  color: string,
): TextStyle {
  return {
    ...base,
    color,
    fontSize:
      typeof base.fontSize === "number" ? scaleTextSize(base.fontSize) : undefined,
    lineHeight:
      typeof base.lineHeight === "number"
        ? scaleLineHeight(base.lineHeight)
        : undefined,
    letterSpacing:
      typeof base.letterSpacing === "number"
        ? scaleTextSize(base.letterSpacing)
        : base.letterSpacing,
  };
}

export const textStyles = {
  get h1() {
    return makeScaledTextStyle(typography.headline.h1, colors.text.primary);
  },
  get h2() {
    return makeScaledTextStyle(typography.headline.h2, colors.text.primary);
  },
  get h3() {
    return makeScaledTextStyle(typography.headline.h3, colors.text.primary);
  },
  get titleSmall() {
    return makeScaledTextStyle(typography.title.small, colors.text.primary);
  },
  get titleT2() {
    return makeScaledTextStyle(typography.title.t2, colors.text.primary);
  },
  get titleT3() {
    return makeScaledTextStyle(typography.title.t3, colors.text.primary);
  },
  get bodyLarge() {
    return makeScaledTextStyle(typography.body.large, colors.text.primary);
  },
  get bodySmall() {
    return makeScaledTextStyle(typography.body.small, colors.text.primary);
  },
  get bodyXsm() {
    return makeScaledTextStyle(typography.body.xsm, colors.text.secondary);
  },
  get captionLarge() {
    return makeScaledTextStyle(typography.caption.large, colors.text.secondary);
  },
  get captionXL() {
    return makeScaledTextStyle(typography.caption.xl, colors.text.secondary);
  },
  get captionSmall() {
    return makeScaledTextStyle(typography.caption.small, colors.text.secondary);
  },
  get labelLarge() {
    return makeScaledTextStyle(typography.label.large, colors.text.primary);
  },
  get labelSmall() {
    return makeScaledTextStyle(typography.label.small, colors.text.primary);
  },
  get stateBar() {
    return makeScaledTextStyle(typography.stateBar.small, colors.text.primary);
  },
} as const;

export const buttonStyles = StyleSheet.create({
  primaryLarge: {
    backgroundColor: colors.surface.action,
    paddingVertical: spacing[16],
    paddingHorizontal: spacing[24],
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  primaryLargeText: {
    ...typography.button.large,
    color: colors.text.onAction,
  } as TextStyle,
  primarySmall: {
    backgroundColor: colors.surface.action,
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[20],
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  primarySmallText: {
    ...typography.button.small,
    color: colors.text.onAction,
  } as TextStyle,
  outline: {
    backgroundColor: colors.surface.primary,
    borderWidth: border.thin,
    borderColor: colors.border.action,
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[20],
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  outlineText: {
    ...typography.button.small,
    color: colors.text.action,
  } as TextStyle,
  ghost: {
    backgroundColor: "transparent",
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[16],
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  ghostText: {
    ...typography.button.small,
    color: colors.text.action,
  } as TextStyle,
  disabled: {
    backgroundColor: colors.surface.disabled,
  } as ViewStyle,
  disabledText: {
    color: colors.text.onDisabled,
  } as TextStyle,
} as const);

export const inputStyles = StyleSheet.create({
  container: {
    borderWidth: border.thin,
    borderColor: colors.border.tertiary,
    borderRadius: radius.input,
    paddingVertical: spacing[12],
    paddingHorizontal: spacing[16],
    backgroundColor: colors.surface.primary,
  } as ViewStyle,
  focused: {
    borderColor: colors.border.focus,
    borderWidth: border.base,
  } as ViewStyle,
  error: {
    borderColor: colors.border.error,
    backgroundColor: colors.surface.errorLight,
  } as ViewStyle,
  success: {
    borderColor: colors.border.success,
    backgroundColor: colors.surface.success,
  } as ViewStyle,
  disabled: {
    backgroundColor: colors.surface.disabled,
    borderColor: colors.border.onDisabled,
  } as ViewStyle,
  text: {
    ...typography.body.large,
    color: colors.text.primary,
  } as TextStyle,
  placeholder: {
    ...typography.placeholder.small,
    color: colors.text.secondary,
  } as TextStyle,
  label: {
    ...typography.label.ssm,
    color: colors.text.primary,
    marginBottom: spacing[4],
  } as TextStyle,
  helperText: {
    ...typography.caption.small,
    color: colors.text.secondary,
    marginTop: spacing[4],
  } as TextStyle,
  errorText: {
    ...typography.caption.small,
    color: colors.text.error,
    marginTop: spacing[4],
  } as TextStyle,
} as const);

export const cardStyles = StyleSheet.create({
  base: {
    backgroundColor: colors.surface.primary,
    borderRadius: radius.card,
    padding: spacing[16],
    borderWidth: border.hairline,
    borderColor: colors.border.tertiary,
  } as ViewStyle,
  elevated: {
    backgroundColor: colors.surface.primary,
    borderRadius: radius.card,
    padding: spacing[16],
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  } as ViewStyle,
  flat: {
    backgroundColor: colors.surface.secondary,
    borderRadius: radius.card,
    padding: spacing[16],
  } as ViewStyle,
} as const);

export const choiceCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing[12],
    alignItems: "flex-start",
    borderWidth: border.thin,
    borderColor: colors.border.tertiary,
    borderRadius: radius.md,
    backgroundColor: colors.surface.primary,
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[12],
  } as ViewStyle,
  compact: {
    alignItems: "center",
    minHeight: 74,
  } as ViewStyle,
  selected: {
    borderColor: colors.border.action,
    backgroundColor: colors.surface.actionLight,
  } as ViewStyle,
  indicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: border.mid,
    borderColor: colors.border.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  } as ViewStyle,
  indicatorSelected: {
    borderColor: colors.border.action,
  } as ViewStyle,
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.text.action,
  } as ViewStyle,
  content: {
    flex: 1,
    gap: spacing[4],
  } as ViewStyle,
} as const);

export const progressHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[12],
    minHeight: 28,
  } as ViewStyle,
  backButton: {
    paddingVertical: spacing[4],
    paddingRight: spacing[4],
  } as ViewStyle,
  track: {
    flex: 1,
    height: 16,
    borderRadius: radius.full,
    backgroundColor: colors.surface.actionLight,
    overflow: "hidden",
  } as ViewStyle,
  indicator: {
    height: "100%",
    borderRadius: radius.full,
    backgroundColor: colors.surface.action,
  } as ViewStyle,
  percentage: {
    ...typography.title.t2,
    color: colors.text.action,
    fontWeight: "700",
  } as TextStyle,
} as const);

export const caregiverQuestionStyles = StyleSheet.create({
  screenBody: {
    flex: 1,
  } as ViewStyle,
  content: {
    gap: spacing[20],
    paddingBottom: spacing[24],
  } as ViewStyle,
  footer: {
    gap: spacing[8],
    paddingTop: spacing[8],
  } as ViewStyle,
  title: {
    ...typography.headline.h2,
    color: colors.text.primary,
    fontWeight: "500",
    marginTop: spacing[4],
  } as TextStyle,
  prompt: {
    ...typography.title.t2,
    color: colors.text.primary,
    fontWeight: "700",
    lineHeight: 32,
  } as TextStyle,
  section: {
    gap: spacing[12],
  } as ViewStyle,
  optionList: {
    gap: spacing[12],
  } as ViewStyle,
  optionCard: {
    minHeight: 62,
    borderWidth: border.thin,
    borderColor: colors.border.tertiary,
    borderRadius: radius.md,
    backgroundColor: colors.surface.primary,
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[12],
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing[8],
  } as ViewStyle,
  optionCardSelected: {
    borderColor: colors.border.action,
    backgroundColor: colors.surface.actionLight,
  } as ViewStyle,
  checkbox: {
    width: 24,
    height: 24,
    marginTop: 1,
    borderWidth: border.thin,
    borderColor: colors.border.secondary,
    borderRadius: radius.xs,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface.primary,
  } as ViewStyle,
  checkboxSelected: {
    borderColor: colors.border.action,
    backgroundColor: colors.surface.action,
  } as ViewStyle,
  radio: {
    width: 24,
    height: 24,
    marginTop: 1,
    borderWidth: border.thin,
    borderColor: colors.border.secondary,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface.primary,
  } as ViewStyle,
  radioSelected: {
    borderColor: colors.border.action,
  } as ViewStyle,
  indicatorDot: {
    width: 12,
    height: 12,
    borderRadius: radius.full,
    backgroundColor: colors.surface.action,
  } as ViewStyle,
  indicatorCheck: {
    ...typography.caption.smallBold,
    color: colors.text.onAction,
    lineHeight: 14,
  } as TextStyle,
  optionContent: {
    flex: 1,
    gap: spacing[2],
  } as ViewStyle,
  optionLabel: {
    ...typography.button.small,
    color: colors.text.primary,
    fontWeight: "700",
    lineHeight: 30,
  } as TextStyle,
  optionDescription: {
    ...typography.body.small,
    color: colors.text.secondary,
    lineHeight: 30,
  } as TextStyle,
  textFieldGroup: {
    gap: spacing[8],
  } as ViewStyle,
  textFieldLabel: {
    ...typography.title.t2,
    color: colors.text.primary,
    fontWeight: "700",
    lineHeight: 32,
  } as TextStyle,
  textField: {
    minHeight: 84,
    borderWidth: border.thin,
    borderColor: colors.border.tertiary,
    borderRadius: radius.md,
    backgroundColor: colors.surface.primary,
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[12],
  } as ViewStyle,
  textFieldSingle: {
    minHeight: 40,
    paddingVertical: spacing[8],
  } as ViewStyle,
  textFieldMultiline: {
    minHeight: 116,
  } as ViewStyle,
  textFieldInput: {
    ...typography.body.xsm,
    color: colors.text.primary,
  } as TextStyle,
  skipText: {
    ...typography.title.t2,
    color: colors.text.action,
    textAlign: "center",
    fontWeight: "500",
  } as TextStyle,
} as const);

export const badgeStyles = StyleSheet.create({
  success: {
    backgroundColor: colors.surface.success,
    borderRadius: radius.full,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[8],
  } as ViewStyle,
  successText: {
    ...typography.caption.smallBold,
    color: colors.text.success,
  } as TextStyle,
  error: {
    backgroundColor: colors.surface.errorLight,
    borderRadius: radius.full,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[8],
  } as ViewStyle,
  errorText: {
    ...typography.caption.smallBold,
    color: colors.text.error,
  } as TextStyle,
  warning: {
    backgroundColor: colors.surface.warningLight,
    borderRadius: radius.full,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[8],
  } as ViewStyle,
  warningText: {
    ...typography.caption.smallBold,
    color: colors.text.warning,
  } as TextStyle,
  info: {
    backgroundColor: colors.surface.actionLight,
    borderRadius: radius.full,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[8],
  } as ViewStyle,
  infoText: {
    ...typography.caption.smallBold,
    color: colors.text.action,
  } as TextStyle,
} as const);

export const layoutStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surface.page,
  } as ViewStyle,
  container: {
    flex: 1,
    paddingHorizontal: spacing[16],
  } as ViewStyle,
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,
  divider: {
    height: border.hairline,
    backgroundColor: colors.border.tertiary,
  } as ViewStyle,
} as const);

export const componentTheme = {
  buttonStyles,
  inputStyles,
  cardStyles,
  choiceCardStyles,
  progressHeaderStyles,
  caregiverQuestionStyles,
  badgeStyles,
  textStyles,
  layoutStyles,
} as const;
