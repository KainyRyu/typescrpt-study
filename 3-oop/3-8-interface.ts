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
  //싸구려 우유 거품기
  class CheapMilkSteamer {
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
  class candySugarMixer {
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
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(public beans: number, private sugar: candySugarMixer) {
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
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milkFrother.makeMilk(sugarAdded);
    }
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const candySugar = new candySugarMixer();
  const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  const sweetLatteMachine = new SweetCaffeeLatteMachine(
    6,
    candySugar,
    cheapMilkMaker
  );
}
