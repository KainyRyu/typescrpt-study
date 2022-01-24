{
    //Array
    const fruits: string[] = ['tomato', 'banana'];
    const scores: Array<number> = [1,3,6]
    function printArray(fruits: readonly string[]){} 
    // readonly 사용시에는 첫 번째 방법만 허용 됨. 
    // object의 불변성을 보장한다는건 굉장히 중요
    // 그래서 코드를 일관성있게 작성하기 위해 [] 사용하는게 더 좋음


    // Tuple : 서로 다른 타입을 함께 가질 수 있는 배열  => 대표적인 예 : useState
    // -> interface, type alias, class 로 대체하는게 좋음
    let student: [string, number];
    student = ['name', 123];
    student[0] //name
    student[1] //123

    // Tuple 사용 비추
    // index 사용해서 접근하면 가독성 떨어짐
    // class 형태나 object 형태 사용하면 더 명시적인데..

    const[name, age] = student; 
    // => object destructuring

    // 동적으로 관련있는 다른 타입의 데이터를 묶어서 사용할때만 Tuple이 유용할 수도 

}