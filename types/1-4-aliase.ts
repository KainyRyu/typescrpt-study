{
    /**
     * Type Aliases : 새로운 타입을 정의할 수 있다.
     */
    

    type Text = string;
    const name: string = 'Ellie';
    const newName: Text = 'Kainy';

    const address: Text = 'Korea'
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        // animal: 'dog' //=> error
        name: 'kainy',
        age: 20
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let kainyName: Name;
    kainyName = 'name'
    type JSON = 'json'
    const json: JSON = 'json';

}