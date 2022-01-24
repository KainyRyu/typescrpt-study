{
    /**
     *  Union Types: OR
     * : 발생할 수 있는 다양한 case중에 하나만 정하고 싶을 때 사용
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direnction)
    }
    move('top')

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 2;

    // Union type은 발생할 수 있는 모든 case 중에 하나만 할 당할 수 있을때 사용

    // function login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: 'logged in!'
            }
        }
    }

}