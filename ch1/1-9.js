/*
        1.9 String Rotation Master Solution
*/
function findRotation(original, rotated) {
  return (rotated + rotated).indexOf(original) !== -1;
}
// or
const findRotation = (original, rotated) => (rotated + rotated).indexOf(original) !== -1;


// Bryan - incorrect as it would check for a match multiple times
const findRotation = (original, rotated) => {
  for(let i = 0; i < rotated.length; i++){
    if(rotated[i] === original[i]){
      let start = rotated.slice(i);
      let end = rotated.slice(0, i);
      if(`${start}${end}` === original) return true;
    }
  }
  return false;
}
