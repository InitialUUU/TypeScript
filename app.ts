// 변수의 데이터 타입 명시
let stdId : number = 1111;
let stdName : string = 'lee';
let age : number = 20;
let gender : string = 'male';
let course : string = 'Typescript';
let completed : boolean = false;

// 열거형 : 사용자 정의 타입 - String 중에 필요한 단어들만 입력받도록 설정
enum GenderType{
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral'
}

interface Student{ // 얘는 type임. number, string과 같은 값
    stdId? : number;
    stdName? : string;
    age? : number; // ?를 붙이면 옵션으로 있어도 되고 없어도 되는 값이 됨
    gender? : GenderType; // 남과 여만 입력받도록 설정하기 위해 GenderType 사용
    course? : string;
    completed? : boolean;
    // setName(name : string) : void; // 오버라이드
    setName : (name : string) => void;
    // getName : () => string;
}

class MyStudent implements Student{
    stdId : 91011;
    stdName : 'park';
    age : 30;
    gender : GenderType.Male;
    course : 'node.js';
    completed : true

    setName(name : string) : void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName)
    }
}

const myInstance = new MyStudent();
myInstance.setName('엘리스');

function getInfo(id : number) : Student
{
    return {
        stdId : id,
        stdName : 'lee',
        // age : 20,
        gender : GenderType.Female,
        course : 'javascript',
        completed : true
    };
};

let std = {
    stdId : 91011,
    stdName : 'park',
    age : 30,
    gender : GenderType.Male,
    course : 'node.js',
    completed : true
};

function setInfo(student : Student) : void{
    console.log(student);
};

// setInfo(std);

// console.log(getInfo(5678));

// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : void{ // 함수에도 옵션 설정 가능
    // return a + b;
// }
