import * as CSS from "csstype";

import {
  colorTokens,
  shadeTokens,
  shadowTokens,
  spacingTokens,
  widthTokens,
} from "../../types/tokens";

export type BoxProps = {
  margin?: spacingTokens;
  padding?: spacingTokens;
  backgroundColor?: colorTokens;
  backgroundShade?: shadeTokens;
  borderRadius?: spacingTokens;
  shadow?: shadowTokens;
  direction?: CSS.Property.FlexDirection;
  rowGap?: spacingTokens;
  colGap?: spacingTokens;
  align?: CSS.Property.AlignItems;
  justify?: CSS.Property.JustifyContent;
  noWrap?: boolean;
  width?: widthTokens;
  grow?: boolean;
  shrink?: boolean;
  spaceAfter?: spacingTokens;
};
