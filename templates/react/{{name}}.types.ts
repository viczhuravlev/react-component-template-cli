import { ReactNode, CSSProperties } from 'react';

export interface {{name}}DefaultProps {}

export interface {{name}}Props extends Partial<{{name}}DefaultProps> {
  style?: CSSProperties;
  children?: ReactNode;
  className?: string;
}
