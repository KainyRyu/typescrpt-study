{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    // private => 외부에서 보이지 않음
    private coffeeBeans: number = 0; // instance (object) level
    // protected coffeeBeans: number = 0; // instance (object) level
    // protected => CofeeMaker에 상속된 내부에서는 접근 가능, 외부에선 접근 불가

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } // contructor를 private로 만듦으로
    // 외부에서 object를 만들 수 없음.

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  // 내부 함수 makeMachine을 사용해서 만들어야 한다는걸 알 수 있음.

  // const maker = new CoffeeMaker(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; //invalid
  // 이제 이렇게 coffeeBeans 접근 불가
  maker.fillCoffeeBeans(32); // 이렇게 접근해야

  // clss를 만들 때 외부에서 접근할 수 있는건 무엇인지,
  // 내부적으로만 가지고있어야 하는 데이터는 무엇인지 결정할 수 있음

  class User {
    private firstName: string;
    private lastName: string;
    // fullName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      // this.fullName= `${firstName} ${lastName}` // => 한번 할당 되고 나면 변경되지 않음
    }
  }

  // const user = new User('Steve', 'Jobs');
  // console.log(user.fullName);
  // user.firstName = 'Kainy';
  // console.log(user.fullName);

  // setter, getter => 일반 변수처럼 사용가능하지만 계산해야할때 유용

  class User2 {
    // get : fullName에 접근 할 때마다 정의
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        // 이런 식으로 유효성 검사도 가능
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
    // 생성자에 private 을 써서 넣어줌으로 더 깔끔해짐
  }

  const user = new User2('Steve', 'Jobs');
  console.log(user.fullName);
  // fullName이 함수같지만 멤버 변수에 접근하는것처럼 사용
  user.age = 6;
  console.log(user.fullName);
}
