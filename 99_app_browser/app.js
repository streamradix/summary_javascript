/* 상수: 메모리에 저장된 값을 변경시킬 수 없다 */
// 블록 범위
// ES6 도입

const a = 5;
console.log("상  수: const a = " + a);

/* 변수: 메모리에 저장된 값을 변경시킬 수 있다 */
// 블록 범위

let b = 2;
console.log("변  수: let b = " + b);

console.log("덧  셈: a + b = " +  (a + b));
console.log("뺄  셈: a - b = " +  (a - b));
console.log("곱  셈: a * b = " +  (a * b));
console.log("나눗셈: a / b = " +  (a / b));

/* 상수, 변수: 선언 > 초기화 > 할당 단계 */

// 선언 단계
// - Execution Context 에 변수 객체를 등록
// - 상수 변수 객체는 범위에서 참조하는 대상
// - uninitialized 상태

// 초기화 단계
// - 상수 변수를 위한 메모리 공간을 확보
// - undefined 로 초기화

// 할당 단계
// - undefined 로 초기화된 상수 변수에 실제 값을 할당