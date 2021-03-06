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
      console.log('heating up... ๐ฅ');
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
  // interface๋ฅผ ๊ตฌํํ  ๋๋ implements, ์์ ํ  ๋๋ extends
  // ์์ํ๊ธฐ ์ ์ ์์ฑ์๋ฅผ public์ผ๋ก ์ ํด์ฃผ๊ฑฐ๋ protected(): ์์์๋ค์ ์ ๊ทผ๊ฐ๋ฅ)๋ก ๋ฐ๊ฟ์ผ ํจ
  class CaffeLatteMachine extends CoffeeMachine {
    // ์์ class์์ overwriting ๊ฐ๋ฅ
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      // ์๋ก ์์ฑ์ ๋ง๋๋ ค๋ฉด constructor๋ฅผ ์จ์ผํ๋๋ฐ ์์์์๋ ๊ผญ super๋ฅผ ์จ์ผํจ
      // ๋ถ๋ชจํด๋์ท์์ ํ์ํ ๋ฐ์ดํฐ๋ ๋ฐ์์์ผํ๋๋ฐ super๋ก ๋ณด๋ด์ค์ผ ํจ
      super(coffeeBeans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk...๐ฅ');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // super ์ฌ์ฉํด์  ๋ถ๋ชจํด๋์ค์ ์๋ ํจ์๋ค์ ์ ๊ทผ ๊ฐ๋ฅ
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
