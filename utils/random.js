import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getPipeSizePosPair = (addToPosx = 0) => {
  let yTopPos = -getRandom(100, height - 100);

  const pipeTop = {
    pos: {x: width + addToPosx, y: yTopPos},
    size: {height: height * 2, width: 75},
  };
  const pipeBottom = {
    pos: {x: width + addToPosx, y: height * 2 + 200 + yTopPos},
    size: {height: height * 2, width: 75},
  };
  return {pipeTop, pipeBottom};
};
