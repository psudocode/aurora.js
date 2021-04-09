import * as React from 'react';
import './styles/style.scss';
import { AuroraProps } from './types/definition';
import Point from './helper/triangle';

const Aurora: React.FC<AuroraProps> = ({ children, numberOfColor = 3, showLog, style }): JSX.Element => {
  const [bases, setBases] = React.useState<JSX.Element>();
  const pointGenerated: Point = new Point();
  const generateColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateBase = () => {
    let points = pointGenerated.generatePoints(numberOfColor);
    return (
      <React.Fragment>
        {points.map((point, i) => (
          <div
            key={i}
            style={{
              backgroundColor: generateColor(),
              position: 'absolute',
              top: point.y,
              left: point.x,
              height: style?.height * 0.9 || '90%',
              width: style?.width * 0.9 || '90%',
              filter: `blur(60px)`,
              opacity: 0.8,
              borderRadius: '100%',
            }}
          />
        ))}
      </React.Fragment>
    );
  };
  const addPropsToChild = (children: React.ReactNode, childs?: JSX.Element) => {
    const new_element = React.cloneElement(children as React.ReactElement);
    if (childs) {
      return React.cloneElement(new_element, {
        style: { ...new_element.props.style, position: 'relative', overflow: 'hidden', ...style },
        children: [childs, new_element],
      });
    } else {
      return children;
    }
  };
  React.useEffect(() => {
    setBases(generateBase());
  }, []);

  React.useEffect(() => {
    if (showLog) {
      console.log({});
    }
  }, [bases]);

  return <React.Fragment>{addPropsToChild(children, bases)}</React.Fragment>;
};

export default Aurora;
