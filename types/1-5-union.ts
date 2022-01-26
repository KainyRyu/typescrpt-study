{
  /**
   *  Union Types: OR
   * : 발생할 수 있는 다양한 case중에 하나만 정하고 싶을 때 사용
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("up");

  type TileSize = 8 | 16 | 32;
  const title: TileSize = 5; // => Not assignable

  // Union type은 발생할 수 있는 모든 case 중에 하나만 할 당할 수 있을때 사용

  // function login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  // function login(): Promise<> {
  //     return {
  //         response: {
  //             body: 'logged in!'
  //         }
  //     }
  // }

  // login('kainy', 'hi')

  //     // printLoginState(state)
  //     // success -> body
  //     // fail -> reason

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }

  printLoginState({ reason: "Wrong password" });
}
