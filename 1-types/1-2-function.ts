{
    // // js ๐ฉ
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // ts
    // function add(num1:number, num2:number): number {
    //     return num1 + num2
    // }


    // // js ๐ฉ
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject)=> {
    //         resolve(100);
    //     })
    // }


    // // ts ๐ฉ
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject)=> {
    //         resolve(100)
    //     })
    // }


    // JS => TS
    // Optional parameter: ?  (lastName: string| undefined ๋ ๊ฐ๋ฅํ๋ฐ ๊ทธ๋ฉด ํจ์ ํธ์ถ ํ   ๋ undefined๋ ๋ฃใใ์ค์ผ ํจ)
    function printName(firstName: string, lastName?: string) {
        console.log(firstName)
        console.log(lastName) // undefined
    }

    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Elton', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

 
    printMessage();

    // Rest parameter

    function addNumbers(...numbers:number[]):number {
        return numbers.reduce((a,b)=> a + b )
    }

    console.log(addNumbers(1, 2))
    console.log(addNumbers(1, 2, 3, 4, 5, 0))

    ///////////////////
}