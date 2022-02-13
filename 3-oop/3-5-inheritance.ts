{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    public static BEANS_GRAMM_PER_SHOT: number = 7;
    public coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    clean() {
      console.log('cleaning the machine...');
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

    makeLatte(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // interface를 구현할 때는 implements, 상속 할 때는 extends
  // 상속하기 전에 생성자를 public으로 전해주거나 protected(): 상속자들은 접근가능)로 바꿔야 함
  class CaffeLatteMachine extends CoffeeMachine {
    // 자식 class에서 overwriting 가능
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      // 새로 생성자 만드려면 constructor를 써야하는데 자식에서는 꼭 super를 써야함
      // 부모클래슷에서 필요한 데이터도 받아와야하는데 super로 보내줘야 함
      super(coffeeBeans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // super 사용해서  부모클래스에 있는 함수들에 접근 가능
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'AAA');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}
