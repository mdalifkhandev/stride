import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { appTheme } from "./appTheme";
import { appColors } from "./tokens/appColors";
import { semanticColors } from "./tokens/semanticColors";
import { appFonts, appTypography } from "./tokens/appTypography";
import {
  appBorderRadius,
  appBorderWidth,
  appIconSize,
  appSpacing,
} from "./tokens/appSpacing";

export { appTheme, appColors, semanticColors, appFonts, appTypography, appSpacing, appBorderRadius, appBorderWidth, appIconSize };

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

export const typography = {
  display: {
    small: appTypography.displaySmall,
  },
  headline: {
    h1: appTypography.headlineH1,
    h2: appTypography.headlineH2,
    h3: appTypography.headlineH3,
  },
  title: {
    small: appTypography.titleSmall,
    t2: appTypography.titleT2,
    t3: appTypography.titleT3,
  },
  label: {
    ssm: appTypography.labelSSM,
    small: appTypography.labelSmall,
    large: appTypography.labelLarge,
    xl: appTypography.labelXL,
  },
  body: {
    xsm: appTypography.bodyXSM,
    small: appTypography.bodySmall,
    large: appTypography.bodyLarge,
  },
  caption: {
    small: appTypography.captionSmall,
    large: appTypography.captionLarge,
    smallBold: appTypography.captionSmallBold,
    xl: appTypography.captionXL,
  },
  placeholder: {
    small: appTypography.placeholderSmall,
  },
  button: {
    large: appTypography.buttonLarge,
    small: appTypography.buttonSmall,
    icon: appTypography.buttonIcon,
  },
  stateBar: {
    small: appTypography.stateBarSmall,
  },
} as const;

export const spacing = {
  0: appSpacing.s0,
  1: appSpacing.s1,
  2: appSpacing.s2,
  4: appSpacing.s4,
  8: appSpacing.s8,
  12: appSpacing.s12,
  16: appSpacing.s16,
  20: appSpacing.s20,
  24: appSpacing.s24,
  28: appSpacing.s28,
  32: appSpacing.s32,
  36: appSpacing.s36,
  40: appSpacing.s40,
  48: appSpacing.s48,
  56: appSpacing.s56,
  64: appSpacing.s64,
  96: appSpacing.s96,
  120: appSpacing.s120,
  200: appSpacing.s200,
  250: appSpacing.s250,
} as const;

export const radius = {
  none: appBorderRadius.r0,
  xs: appBorderRadius.r2,
  sm: appBorderRadius.r4,
  md: appBorderRadius.r8,
  lg: appBorderRadius.r12,
  xl: appBorderRadius.r16,
  xxl: appBorderRadius.r20,
  xxxl: appBorderRadius.r24,
  full: appBorderRadius.rFull,
} as const;

export const border = {
  none: appBorderWidth.w0,
  hairline: appBorderWidth.w05,
  thin: appBorderWidth.w1,
  mid: appBorderWidth.w15,
  base: appBorderWidth.w2,
  thick: appBorderWidth.w4,
  heavy: appBorderWidth.w8,
} as const;

export const iconSize = {
  sm: appIconSize.sm,
  normal: appIconSize.normal,
} as const;

export const layout = {
  fullWidth: 375,
  fullHeight: 812,
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
    backgroundColor: "transparent",
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
});

export const inputStyles = StyleSheet.create({
  container: {
    borderWidth: border.thin,
    borderColor: colors.border.tertiary,
    borderRadius: radius.md,
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
});

export const cardStyles = StyleSheet.create({
  base: {
    backgroundColor: colors.surface.primary,
    borderRadius: radius.lg,
    padding: spacing[16],
    borderWidth: border.hairline,
    borderColor: colors.border.tertiary,
  } as ViewStyle,
  elevated: {
    backgroundColor: colors.surface.primary,
    borderRadius: radius.lg,
    padding: spacing[16],
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  } as ViewStyle,
  flat: {
    backgroundColor: colors.surface.secondary,
    borderRadius: radius.lg,
    padding: spacing[16],
  } as ViewStyle,
});

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
});

export const textStyles = StyleSheet.create({
  h1: { ...typography.headline.h1, color: colors.text.primary } as TextStyle,
  h2: { ...typography.headline.h2, color: colors.text.primary } as TextStyle,
  h3: { ...typography.headline.h3, color: colors.text.primary } as TextStyle,
  titleSmall: { ...typography.title.small, color: colors.text.primary } as TextStyle,
  titleT2: { ...typography.title.t2, color: colors.text.primary } as TextStyle,
  bodyLarge: { ...typography.body.large, color: colors.text.primary } as TextStyle,
  bodySmall: { ...typography.body.small, color: colors.text.primary } as TextStyle,
  bodyXsm: { ...typography.body.xsm, color: colors.text.secondary } as TextStyle,
  captionLarge: { ...typography.caption.large, color: colors.text.secondary } as TextStyle,
  captionSmall: { ...typography.caption.small, color: colors.text.secondary } as TextStyle,
  labelLarge: { ...typography.label.large, color: colors.text.primary } as TextStyle,
  stateBar: { ...typography.stateBar.small, color: colors.text.primary } as TextStyle,
});

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
});

export const componentTheme = {
  buttonStyles,
  inputStyles,
  cardStyles,
  badgeStyles,
  textStyles,
  layoutStyles,
} as const;

export const lightTheme = appTheme.light;
export const darkTheme = appTheme.dark;
