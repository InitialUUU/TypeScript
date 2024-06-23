// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Typescript';
var completed = false;
// 열거형 : 사용자 정의 타입 - String 중에 필요한 단어들만 입력받도록 설정
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "nue";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.gender = 'male';
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('엘리스');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        // age : 20,
        gender: 'female',
        course: 'javascript',
        completed: true
    };
}
;
var std = {
    stdId: 91011,
    stdName: 'park',
    age: 30,
    gender: 'male',
    course: 'node.js',
    completed: true
};
function setInfo(student) {
    console.log(student);
}
;
// setInfo(std);
// console.log(getInfo(5678));
// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : void{ // 함수에도 옵션 설정 가능
// return a + b;
// }
// type StrOrNum = number | string; // 타입 알리아스 : 반복되는 코드를 재사용
// let numStr : StrOrNum = '100';
// let item : number;
// function convertToString(val : StrOrNum) : string{
//     // item = numStr; 
//     // numStr이 number, string 둘 다 되기 때문에 number만 되는 item에선 오류가 발생
//     if(typeof val === 'string'){ 
//         // type gruard : 위와 같은 상황에 대비하여 오류 예방하기 위한 javaScript 내장 코드
//         item = 0; // 아무것도 아닌 값을 의미
//     }else{
//         item = val;
//     }
//     return String(val);
// }
// function convertToNumber(val : StrOrNum) : number{
//     return Number(val);
// }
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
// // javascript에서 배열 선언
// let numbers = new Array([1,2,3,4,5]); 
// // typescript에서 배열 선언
// let numbers : number[] = [1,2,3,4,5]; // 숫자 배열
// let fruits  : string[] = ['apple', 'banana', 'orange']; // 문자열 배열
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// // 배열의 유니온 타입
// let mixedArray : (number | string)[] = [1, 'two', 3, 'four']; // 섞인 배열
// for(let i = 0; i<mixedArray.length; i++){
//     console.log(mixedArray[i]);
// }
// let infer = [1,2,3]; // 타입 추론
// for(let i = 0; i<infer.length; i++){
//     console.log(infer[i]);
// }
// // 읽기 전용 배열 (특징 : 수정 안됨)
// let readOnlyArray : ReadonlyArray<number> = [1,2,3];
// // 튜플 : 타입의 순서가 정해져 있음
// let greeting : [number, string, boolean] = [1, 'hello', true];
// for(let i = 0; i<greeting.length; i++){
//     console.log(greeting[i]);
// }
// //Spread 연산자
// let firstArray = [1,2,3];
// let secondArray = [4,5,6];
// let combineArray = [...firstArray, ...secondArray]; // ...은 괄호를 벗겨주는 역할을 함. 이럴경우 둘을 합칠수 있음
// for(let i = 0; i<combineArray.length; i++){
//     console.log(combineArray[i]);
// }
