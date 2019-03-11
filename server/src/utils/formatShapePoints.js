const formatShapePoints = shapePoints => {
  let arr = [];
  for (let i = 0; i < shapePoints.length - 1; i += 2) {
    arr.push(
      [shapePoints[i], shapePoints[i + 1]],
      [shapePoints[i], shapePoints[i + 1]]
    );
  }
  return arr;
};

module.exports = formatShapePoints;
