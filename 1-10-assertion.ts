{
  /**
   * Type Assertions 💩
   * 알아두면 좋지만 쓰기엔 조금 위험한
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();

  //   jsStrFunc result가 any로 할당되어있어 문자열 함수 사용이 안됨
  // ex result.length

  console.log((result as string).length); // -> 가능
  console.log((<string>result).length);
  //   type assertions은 내가 100000% 확신할 때만 사용

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // numbers 가 배열일것이라는 장담,,,

  const button = document.querySelector("class")!; 
  //버튼이 있을꺼라는 정말정말정말 확신을 가지고 써야함
}
