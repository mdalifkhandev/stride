import type { TextStyle } from "react-native";

export const appFonts = {
  thin: "Inter-Thin",
  regular: "Inter-Regular",
  medium: "Inter-Medium",
  semiBold: "Inter-SemiBold",
  bold: "Inter-Bold",
} as const;

export const appTypography = {
  displaySmall: {
    fontFamily: appFonts.medium,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
  } as TextStyle,

  headlineH1: {
    fontFamily: appFonts.medium,
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 48,
  } as TextStyle,
  headlineH2: {
    fontFamily: appFonts.medium,
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 36,
  } as TextStyle,
  headlineH3: {
    fontFamily: appFonts.medium,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
  } as TextStyle,

  titleSmall: {
    fontFamily: appFonts.semiBold,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
  } as TextStyle,
  titleT2: {
    fontFamily: appFonts.semiBold,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
  } as TextStyle,
  titleT3: {
    fontFamily: appFonts.semiBold,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
  } as TextStyle,

  labelSSM: {
    fontFamily: appFonts.medium,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
  } as TextStyle,
  labelLarge: {
    fontFamily: appFonts.semiBold,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
  } as TextStyle,
  labelSmall: {
    fontFamily: appFonts.semiBold,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
  } as TextStyle,
  labelXL: {
    fontFamily: appFonts.semiBold,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
  } as TextStyle,

  bodyXSM: {
    fontFamily: appFonts.regular,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
  } as TextStyle,
  bodySmall: {
    fontFamily: appFonts.regular,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  } as TextStyle,
  bodyLarge: {
    fontFamily: appFonts.regular,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  } as TextStyle,

  captionSmall: {
    fontFamily: appFonts.regular,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
  } as TextStyle,
  captionLarge: {
    fontFamily: appFonts.medium,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
  } as TextStyle,
  captionSmallBold: {
    fontFamily: appFonts.medium,
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
  } as TextStyle,
  captionXL: {
    fontFamily: appFonts.regular,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 24,
  } as TextStyle,

  placeholderSmall: {
    fontFamily: appFonts.regular,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
  } as TextStyle,

  buttonLarge: {
    fontFamily: appFonts.semiBold,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
  } as TextStyle,
  buttonSmall: {
    fontFamily: appFonts.medium,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  } as TextStyle,
  buttonIcon: {
    fontFamily: appFonts.semiBold,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  } as TextStyle,

  stateBarSmall: {
    fontFamily: appFonts.medium,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  } as TextStyle,
} as const;
