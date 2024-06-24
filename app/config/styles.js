import React from 'react';
import { StyleSheet } from 'react-native';
// import { WINDOW_WIDTH, responsiveScale } from "../styles/mixins";
import { color } from './color';
// import {
//   FONT_WEIGHT_BOLD,
//   FONT_WEIGHT_LIGHT,
//   FONT_WEIGHT_MEDIUM,
//   FONT_WEIGHT_REGULAR,
//   TTNORMSPRO_BOLD,
//   TTNORMSPRO_MEDIUM,
//   TTNORMSPRO_REGULAR,
// } from '../styles/typography';
// import {perfectSize} from '../styles/theme';

export const CommonStyle = StyleSheet.create({
  flex: { flex: 1 },
  whiteContainer: { flex: 1, backgroundColor: color.WHITE },
  sectionContainer: { backgroundColor: color.WHITE, paddingHorizontal: 20 },
});
