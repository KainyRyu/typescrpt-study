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
  class AutomaticSugarMixer {
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
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private sugar: AutomaticSugarMixer,
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

  // 내부적으로 구현된 다양한 class들이 한가지 interface들을 구현하거나 동일한 부모class를 상속했을때
  // 어떤 class인지 구분하지 않고 공통된 api를 호출할 수 있다는것이 큰 장점

  machines.forEach((machine) => {
    console.log("------------------------");
    machine.makeCoffee(1);
  });

  // 상속이 깊어질 수록 복잡해짐
  // 부모가 변경되면 자식들 다 변경 됨
  // TS에서는 두 가지 이상의 부모 Class를 상속할 수 없음
  // 그래서 composition 사용해야
}
