{
  /**
   * Type Inference
   */
  let str: string = "hello";
  let text = "hello";

  text = 1; // "hello" string이 할당되어서 숫자는 안됨

  //   function print(message) { //type 을 명시하지 않으면 :any 가 할당 됨
  function print(message: "hello") {  // 자동으로 string type 이 string
    console.log(message);
  }

  print("hello");
  print(1);


  function add(x:number, y:number) {
      return x + y;
  }  
  const result = add(1,2)
  // 자동으로 숫자로 return 을 추론해 줌
  // 이런 경우엔 간단한 예제라 보이지만 정확하게 타입을 명시하는게 좋음.


}
