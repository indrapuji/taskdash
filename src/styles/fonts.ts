export const Fonts = {
  poppinsRegular: 'Poppins-Regular',
  poppinsMedium: 'Poppins-Medium',
  poppinsSemibold: 'Poppins-SemiBold',
  poppinsBold: 'Poppins-Bold',
} as const;

export type FontName = keyof typeof Fonts
