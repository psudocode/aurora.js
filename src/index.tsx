import * as React from 'react';
import { AuroraProps } from './types/definition';
import { generateColor, generatePoints } from './helper/generators';

const Aurora: React.FC<AuroraProps> = ({ sides, opacity, ...props }): React.ReactElement => {
  const points = generatePoints({ width: props.style?.width as number, height: props.style?.height as number });

  const baseStyle: React.CSSProperties = {
    filter: 'blur(60px)',
    opacity: opacity || 0.8,
    position: 'absolute',
  };
  const generateBases = (children: React.ReactNode) => {
    return (
      <div style={{ ...props.style, position: 'relative', overflow: 'hidden' }}>
        {points.map(
          (point, i) =>
            i < (sides || 3) && (
              <div
                key={i}
                style={{
                  borderRadius: '100%',
                  backgroundColor: generateColor(),
                  ...point,
                  ...baseStyle,
                  width: props.style?.width ? `calc(${props.style?.width}px * 1.5)` : '100%',
                  height: props.style?.width ? `calc(${props.style?.height}px * 1.5)` : '100%',
                  zIndex: -1,
                }}
              />
            ),
        )}
        {children}
      </div>
    );
  };
  return <React.Fragment>{generateBases(props.children)}</React.Fragment>;
};

export default Aurora;
