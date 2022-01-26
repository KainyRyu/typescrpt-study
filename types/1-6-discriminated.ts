{
  // function login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`Congrats!! ${state.response.body}`);
    } else {
      console.log(`FAILED!!! reason: ${state.reason}`);
    }
  }

  //   printLoginState();
}
