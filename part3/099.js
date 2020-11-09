// 배열.reduce((누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
//     return 누적값으로 변환 되는 값
// }, 초기값)

const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => acc + el, 0);

console.log(result);
