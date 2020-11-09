function checkNumber(val) {
  if (typeof val !== "number") throw "유효하지 않은 값입니다."; // 개발자가 의도한 에러
  console.log("숫자형 값으로 확인되었습니다.");
}

try {
  checkNumber(100);
  checkNumber("Wrong type");
} catch (e) {
  console.error(`에러가 발생했습니다 >>> ${e}`);
} finally {
  console.log("완료");
}
