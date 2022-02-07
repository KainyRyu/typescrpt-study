{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // class : 서로 관련있는 데이터나 함수들을 한곳에 묶어놓는 기능
  // 청사진을(template) 만드는 기능도 함.
  class CoffeeMaker {
    // BEANS_GRAMM_PER_SHOT: number = 7;
    // 멤버 변수 => class가 실행 될 때마다 재정의 되어서 메모리 낭비가 됨.
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    // static 을 붙여 class level로 바뀜.
    // => this.BEANS_GRAMM_PER_SHOT 대신 CoffeeMaker.BEANS_GRAMM_PER_SHOT 사용

    coffeeBeans: number = 0; // instance (object) level
    constructor(coffeeBeans: number) {
      // class를 가지고 instance를 만들 때 항상 처음에 호출하는 함수
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    } // 외부에서도

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

  const maker = new CoffeeMaker(32);
  // new = 이 class의 instance를 만든다
  const maker2 = new CoffeeMaker(14);
  console.log(maker);

  const maker3 = CoffeeMaker.makeMachine(3);
  // 외부에서도 간단하게 makeMachine 함수에 접근 가능
  // static 지우면 외부에서 class이용해서 함수에 접근 불가
  // => maker2.makeMachine 등 만들어진 obj 안에서 함수 호출 가능
  // 근데 커피 기계를 이미 만들고 나서 또 기계를 만드는건 말이 안되자놔,,,?
}
