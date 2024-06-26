// 맴버 변수 == 속성 == 프로퍼티
// 맴버 함수 == 메소드

class Employee{

    constructor(
        private _empName : string, 
        private _age1 : number, 
        private _empJob :string
        ){
        
    }

    // get/set : 가장 일반적인 형태의 get, set
    get empName(){ 
    // empName이라는 메서드 : 외부에서 empName으로 호출시 변경이 가능하게 해줌
        return this._empName;
    }
    set empName(val : string){
        this._empName = val;
    }

    printEmp = () : void => {
        console.log(this._empName + '의 나이는 ' + this._age1 + '이고, 직업은 ' + this._empJob + '입니다.');
    }
}

// public private protected 이 세가지가 있다.

let employee1 = new Employee('kim', 30, '소프트웨어개발자');
// 이곳에서 넣어줄 값을 입력한다.
// 이 객체는 생성과 동시에 Employee 안에 있는 constructor를 호출하여 그 안에 값을 넣는다.
employee1.empName = 'lee'; 
// 이렇게 값을 수정할 수 있다. 하지만 객체지향 캡슐화 철학(보안)
// 을 유지하기 위해서 접근지정자로 데이터 수정을 제한해준다. 외부에서 맘대로 바꿔
// 버그가 생기거나 데이터가 변질 되는것을 막기위해
employee1.printEmp();