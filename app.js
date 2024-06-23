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
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
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
        gender: GenderType.Female,
        course: 'javascript',
        completed: true
    };
}
;
var std = {
    stdId: 91011,
    stdName: 'park',
    age: 30,
    gender: GenderType.Male,
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
