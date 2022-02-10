{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface : 계약서와 같은.. : ~를 사용하려면 이것 저것 요것을 해야만 사용할 수 있어
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    // CoffeeMachine은 CoffeeMaker interface을 구현하는 아이임
    // 이 인터페이스를 구현하는 클래스에서는 interface에서 규격된 이 모든 함수를 구현해야 함
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log('heating up... 🔥');
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);
  // Abstraction  :  interface를 굉장히 간단하고 심플하게 만듬으로
  // 사용하는 사람이 간편하게 많은생각 하지 않고도 심플하게 사용할 수 있게 도와 줌
  // 정보은닉을 통해서도 충분히 추상화 가능 private 사용
  // 내부적으로 사용하는 함수는 private을 사용해서 외부에서 간단하게 확인 할 수 있게

  // interface를 사용하면 추상화를 극대화해서 사용할 수 있음

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(32); // CoffeeMaker 안에는 fillCoffeeBeans가 존재하지 않음
  maker2.makeCoffee(2);

  // interface 사용하면 얼마만의 행동을 약속할건지 보장할건지 허용할건지 결정할 수 있음
}
