{
  /**
   * Type Assertions ๐ฉ
   * ์์๋๋ฉด ์ข์ง๋ง ์ฐ๊ธฐ์ ์กฐ๊ธ ์ํํ
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();

  //   jsStrFunc result๊ฐ any๋ก ํ ๋น๋์ด์์ด ๋ฌธ์์ด ํจ์ ์ฌ์ฉ์ด ์๋จ
  // ex result.length

  console.log((result as string).length); // -> ๊ฐ๋ฅ
  console.log((<string>result).length);
  //   type assertions์ ๋ด๊ฐ 100000% ํ์ ํ  ๋๋ง ์ฌ์ฉ

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฉ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // numbers ๊ฐ ๋ฐฐ์ด์ผ๊ฒ์ด๋ผ๋ ์ฅ๋ด,,,

  const button = document.querySelector("class")!; 
  //๋ฒํผ์ด ์์๊บผ๋ผ๋ ์ ๋ง์ ๋ง์ ๋ง ํ์ ์ ๊ฐ์ง๊ณ  ์จ์ผํจ
}
