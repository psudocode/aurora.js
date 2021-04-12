export const generatePoint = (length: number) => {
  const min = (length / 2) * -1;
  const max = length;
  if (length) {
    return Math.random() * (max - min) + min;
  } else {
    return (Math.random() * 100).toString() + '%';
  }
};

export const generatePoints = (dim: { width: number; height: number }) => {
  let generated = [];
  generated.push({ top: '-50%', left: generatePoint(dim.width) });
  generated.push({ bottom: '-50%', left: generatePoint(dim.width) });
  generated.push({ left: '-50%', top: generatePoint(dim.width) });
  generated.push({ right: '-50%', top: generatePoint(dim.width) });
  return generated;
};

export const generateColor = () => {
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};
