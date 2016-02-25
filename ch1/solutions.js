/*
      Chapter 1 Solutions
*/


// 1.9 String Rotation
function findRotation(original, rotated) {
  return (rotated + rotated).indexOf(original) !== -1;
}
// or
const findRotation = (original, rotated) => (rotated + rotated).indexOf(original) !== -1;
