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
  console.log(maker);
}
