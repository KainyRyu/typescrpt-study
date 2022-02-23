{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    public static BEANS_GRAMM_PER_SHOT: number = 7;
    public beans: number = 0;

    public constructor(beans: number) {
      this.beans = beans;
    }

    static makeMachine(beans: number): CoffeeMachine {
      return new CoffeeMachine(beans);
    }

    clean() {
      console.log("cleaning the machine...");
    }

    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.beans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.beans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log("heating up... 🔥");
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
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

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // sugar maker
  class candySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      // private milkFrother: CheapMilkSteamer //class 끼리 커플링하는게아니라
      private milkFrother: MilkFrother // interface사용해 디커플링
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(public beans: number, private sugar: SugarProvider) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeeLatteMachine extends CoffeeMachine {
    constructor(
      public beans: number,
      private sugar: candySugarMixer,
      private milkFrother: MilkFrother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milkFrother.makeMilk(sugarAdded);
    }
  }

  // const cheapMilkMaker = new CheapMilkSteamer();
  // const candySugar = new candySugarMixer();
  // const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  // const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  // const sweetLatteMachine = new SweetCaffeeLatteMachine(
  //   6,
  //   candySugar,
  //   cheapMilkMaker
  // );
  // NOT PRODUCTIVE AT ALL

  // 디커플링의 원칙!
  // !!! class들 사이에 서로 상호작용하는 경우에는
  // class 자신을 노출하는게 아니라 계약서를 통해 의사소통 해야 함 = interface

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  //Sugar
  const candySugar = new candySugarMixer();
  const sugar = new SugarMixer();

  //
  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);
  // 원하는 용도에 따라 재료 아무거나 넣어서 원하는대로 만들 수 있어
  const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  const coldLatteMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeeLatteMachine(
    6,
    candySugar,
    cheapMilkMaker
  );
}
