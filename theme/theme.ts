import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const primitive = {
  color: {
    blue: {
      50: "#e1effe",
      100: "#b5cde8",
      200: "#8aafd9",
      300: "#548bc8",
      400: "#3375bd",
      500: "#0052ad",
      600: "#004b9d",
      700: "#003a7b",
      800: "#002d5f",
      900: "#002249",
    },
    green: {
      50: "#e8f5e9",
      100: "#2e7d32",
    },
    red: {
      50: "#fdecea",
      100: "#d32f2f",
    },
    orange: {
      50: "#fff4e5",
      100: "#ed6c02",
    },
    gray: {
      0: "#ffffff",
      50: "#e9e9e9",
      100: "#bababa",
      200: "#989898",
      300: "#696969",
      500: "#1f1f1f",
      900: "#0d0d0d",
    },
    extra: {
      color1: "#f8f9fc",
    },
  },
};

export const colors = {
  surface: {
    primary: primitive.color.gray[0],
    primaryInverted: primitive.color.gray[900],
    page: primitive.color.extra.color1,
    secondary: primitive.color.gray[50],
    action: primitive.color.blue[500],
    actionLight: primitive.color.blue[50],
    actionMuted: primitive.color.blue[100],
    success: primitive.color.green[50],
    errorLight: primitive.color.red[50],
    warningLight: primitive.color.orange[50],
  },
  text: {
    primary: primitive.color.gray[500],
    secondary: primitive.color.gray[300],
    onAction: primitive.color.gray[0],
    action: primitive.color.blue[500],
    success: primitive.color.green[100],
    error: primitive.color.red[100],
    warning: primitive.color.orange[100],
  },
  border: {
    tertiary: primitive.color.gray[100],
    action: primitive.color.blue[500],
  },
  icon: {
    primary: primitive.color.gray[500],
    secondary: primitive.color.gray[300],
    action: primitive.color.blue[500],
  },
};

export const typography = {
  headline: {
    h1: { fontSize: 32, fontWeight: "500" as const, lineHeight: 48 },
    h2: { fontSize: 24, fontWeight: "500" as const, lineHeight: 36 },
  },
  title: {
    small: { fontSize: 14, fontWeight: "600" as const, lineHeight: 21 },
    t2: { fontSize: 18, fontWeight: "600" as const, lineHeight: 27 },
  },
  body: {
    small: { fontSize: 14, fontWeight: "400" as const, lineHeight: 21 },
    large: { fontSize: 16, fontWeight: "400" as const, lineHeight: 24 },
  },
  caption: {
    small: { fontSize: 12, fontWeight: "400" as const, lineHeight: 18 },
    smallBold: { fontSize: 12, fontWeight: "500" as const, lineHeight: 18 },
    large: { fontSize: 14, fontWeight: "500" as const, lineHeight: 21 },
  },
  button: {
    large: { fontSize: 20, fontWeight: "600" as const, lineHeight: 30 },
    small: { fontSize: 16, fontWeight: "500" as const, lineHeight: 24 },
  },
};

export const spacing = {
  0: 0,
  2: 2,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  56: 56,
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 200,
};

export const border = {
  hairline: 0.5,
  thin: 1,
};

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
  secondaryLarge: {
    backgroundColor: colors.surface.primary,
    paddingVertical: spacing[16],
    paddingHorizontal: spacing[24],
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: border.thin,
    borderColor: colors.border.action,
  } as ViewStyle,
  secondaryLargeText: {
    ...typography.button.small,
    color: colors.text.action,
  } as TextStyle,
});

export const badgeStyles = StyleSheet.create({
  success: {
    backgroundColor: colors.surface.success,
    borderRadius: radius.full,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[8],
  } as ViewStyle,
  successText: {
    ...typography.caption.smallBold,
    color: colors.text.success,
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
});

export const textStyles = StyleSheet.create({
  h1: { ...typography.headline.h1, color: colors.text.primary } as TextStyle,
  h2: { ...typography.headline.h2, color: colors.text.primary } as TextStyle,
  titleT2: { ...typography.title.t2, color: colors.text.primary } as TextStyle,
  titleSmall: {
    ...typography.title.small,
    color: colors.text.secondary,
  } as TextStyle,
  bodyLarge: {
    ...typography.body.large,
    color: colors.text.primary,
  } as TextStyle,
  bodySmall: {
    ...typography.body.small,
    color: colors.text.secondary,
  } as TextStyle,
  captionLarge: {
    ...typography.caption.large,
    color: colors.text.secondary,
  } as TextStyle,
}) ;

export const layoutStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surface.page,
  } as ViewStyle,
  container: {
    flex: 1,
    paddingHorizontal: spacing[20],
    paddingVertical: spacing[24],
  } as ViewStyle,
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
});
