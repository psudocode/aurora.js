import ColorType from 'color';
import { Properties } from 'csstype';

export interface data {
  name: string;
}
export interface AuroraProps {
  numberOfColor?: number;
  seeds?: ColorType[] | false;
  blur?: number;
  showLog?: boolean;
  [x: string]: any;
}
export type ColorElementProps = {
  color?: ColorType;
  index: number;
  blur: number;
};

export type Pos = {
  x?: number;
  y?: number;
};

export type CSSProperties = Properties;
