export const generatePoint = (length: number) => {
  const min = (length / 2) * -1;
  const max = length;
  if (length) {
    return Math.random() * (max - min) + min;
  } else {
    return (Math.random() * 100).toString() + '%';
  }
};

export const generatePosition = () => {
  const min = 50;
  const max = 90;
  return (Math.random() * (max - min) + min).toString() + '%';
};

export const generatePoints = (dim: { width: number; height: number }) => {
  let generated = [];
  generated.push({ top: generatePosition(), left: generatePoint(dim.width) });
  generated.push({ bottom: generatePosition(), left: generatePoint(dim.width) });
  generated.push({ left: generatePosition(), top: generatePoint(dim.width) });
  generated.push({ right: generatePosition(), top: generatePoint(dim.width) });
  return generated;
};

export const generateColor = () => {
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};
