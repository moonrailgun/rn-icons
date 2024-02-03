import * as React from 'react';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface IconContext {
  size?: string | number;
  style?: ViewStyle;
  attr?: SvgProps;
}

export const DefaultContext: IconContext = {
  size: undefined,
  style: undefined,
  attr: undefined,
};

export const IconContext: React.Context<IconContext> =
  React.createContext && React.createContext(DefaultContext);
