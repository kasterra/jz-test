function maxValueReducer<T>(
  maxIndex: number,
  curValue: T,
  idx: number,
  arr: T[]
) {
  return curValue > arr[maxIndex] ? idx : maxIndex;
}

function getMatchNumber<T>(arr1: T[], arr2: T[]): number {
  return arr1.reduce((acc, cur, idx) => {
    return (acc += cur === arr2[idx] ? 1 : 0);
  }, 0);
}

export function getMostAccordantIndex(
  myAnswer: number[],
  answersList: number[][]
) {
  return answersList
    .map((answers) => getMatchNumber(myAnswer, answers))
    .reduce(maxValueReducer, 0);
}

type ArbitaryObject = {
  [key: string]: any;
};

export function pluckFromArray(arrayOfObj: ArbitaryObject[], key: string) {
  return arrayOfObj.map((obj) => obj[key]);
}
