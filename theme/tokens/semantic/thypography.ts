import type { TextStyle } from "react-native";
import {
  fontFamily,
  lineHeight,
  textSize,
  textWeight,
} from "../premetive/text";

export const Typography = {
  displaySmall: {
    fontFamily: fontFamily.primary,
    fontSize: textSize[14],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[21],
  } as TextStyle,

  H1: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[32],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[48],
  } as TextStyle,

  H2: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[24],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[36],
  } as TextStyle,

  H3: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[20],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[30],
  } as TextStyle,

  titleSmall: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[14],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[21],
  } as TextStyle,

  titleT2: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[18],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[27],
  } as TextStyle,

  titleT3: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[18],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[27],
  } as TextStyle,

  labelSSM: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[14],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[21],
  } as TextStyle,

  labelLarge: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[20],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[30],
  } as TextStyle,

  labelSmall: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[18],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[27],
  } as TextStyle,

  labelXL: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[20],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[30],
  } as TextStyle,

  bodyXSM: {
    fontFamily: fontFamily.primary,
    fontSize: textSize[12],
    fontWeight: textWeight.regular,
    lineHeight: lineHeight[18],
  } as TextStyle,

  bodySmall: {
    fontFamily: fontFamily.primary,
    fontSize: textSize[14],
    fontWeight: textWeight.regular,
    lineHeight: lineHeight[21],
  } as TextStyle,

  bodyLarge: {
    fontFamily: fontFamily.primary,
    fontSize: textSize[16],
    fontWeight: textWeight.regular,
    lineHeight: lineHeight[24],
  } as TextStyle,

  captionSmall: {
    fontFamily: fontFamily.primary,
    fontSize: textSize[12],
    fontWeight: textWeight.regular,
    lineHeight: lineHeight[18],
  } as TextStyle,

  captionLarge: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[14],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[21],
  } as TextStyle,

  captionSmallBold: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[12],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[18],
  } as TextStyle,

  captionXL: {
    fontFamily: fontFamily.primary,
    fontSize: textSize[18],
    fontWeight: textWeight.regular,
    lineHeight: lineHeight[24],
  } as TextStyle,

  placeholderSmall: {
    fontFamily: fontFamily.primary,
    fontSize: textSize[14],
    fontWeight: textWeight.regular,
    lineHeight: lineHeight[21],
  } as TextStyle,

  buttonLarge: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[20],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[30],
  } as TextStyle,

  buttonSmall: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[16],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[24],
  } as TextStyle,

  buttonIcon: {
    fontFamily: fontFamily.primarySemiBold,
    fontSize: textSize[12],
    fontWeight: textWeight.semiBold,
    lineHeight: lineHeight[18],
  } as TextStyle,

  stateBarSmall: {
    fontFamily: fontFamily.primaryMedium,
    fontSize: textSize[16],
    fontWeight: textWeight.medium,
    lineHeight: lineHeight[24],
  } as TextStyle,
} as const;
