const blocksAway = function(directions) {
  let xLocation = 0;
  let yLocation = 0;
  let upDirection = "north";
  let result = {};
  for (let scale = 0; scale < directions.length - 1; scale += 2) {
    if (directions[scale] === "left" && upDirection === "north") {
      xLocation += -(directions[scale + 1]);
      upDirection = "west";
    } else if (directions[scale] === "right" && upDirection === "north") {
      xLocation += directions[scale + 1];
      upDirection = "east";
    } else if (directions[scale] === "left" && upDirection === "east") {
      yLocation += directions[scale + 1];
      upDirection = "north";
    } else if (directions[scale] === "right" && upDirection === "east") {
      yLocation += -(directions[scale + 1]);
      upDirection = "south";
    } else if (directions[scale] === "left" && upDirection === "south") {
      xLocation += directions[scale + 1];
      upDirection = "east";
    } else if (directions[scale] === "right" && upDirection === "south") {
      xLocation += -(directions[scale + 1]);
      upDirection = "west";
    } else if (directions[scale] === "left" && upDirection === "west") {
      yLocation += -(directions[scale + 1]);
      upDirection = "south";
    } else if (directions[scale] === "right" && upDirection === "west") {
      yLocation += directions[scale + 1];
      upDirection = "north";
    }
  }
  if (xLocation >= 0) {
    result.east = xLocation;
  } if (xLocation < 0) {
    result.west = -(xLocation);
  } if (yLocation >= 0) {
    result.north = yLocation;
  } if (yLocation < 0) {
    result.south = -(yLocation);
  } 
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));