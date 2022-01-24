{
    // // js 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // ts
    // function add(num1:number, num2:number): number {
    //     return num1 + num2
    // }


    // // js 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject)=> {
    //         resolve(100);
    //     })
    // }


    // // ts 💩
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject)=> {
    //         resolve(100)
    //     })
    // }


    // JS => TS
    // Optional parameter: ?  (lastName: string| undefined 도 가능한데 그면 함수 호출 할  때 undefined도 넣ㅇㅓ줘야 함)
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