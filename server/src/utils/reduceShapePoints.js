const formatShapePoints = shapePoints => {
  let arr = [];

  for (let i = 0; i < shapePoints.length - 1; i += 2) {
    arr.push(shapePoints[i]);
  }
  return arr;
};

module.exports = formatShapePoints;
