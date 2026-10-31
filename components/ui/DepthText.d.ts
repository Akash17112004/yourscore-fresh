import type { CSSProperties, ReactNode } from 'react';

type DepthTextProps = {
  text?: ReactNode;
  layers?: number;
  depth?: number;
  faceColor?: string;
  depthColor?: string;
  tilt?: number;
  pointerTracking?: boolean;
  smoothing?: number;
  perspective?: number;
  autoOrbit?: boolean;
  orbitSpeed?: number;
  fontSize?: string | number;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  shadow?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function DepthText(props: DepthTextProps): ReactNode;
