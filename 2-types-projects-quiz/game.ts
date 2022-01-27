/**
 * Let's make a game 🕹
 */
type Direction = 'up' | 'down' | 'left' | 'right';

let position = { x: 0, y: 0 };

function move(direction: Direction) {
  if (direction === 'up') {
    position.y = position.y + 1;
    return position;
  } else if (direction === 'down') {
    return { ...position, y: position.y - 1 };
    console.log('down');
  } else if (direction === 'left') {
    return { ...position, x: position.x + 1 };
    console.log('left');
  } else if (direction === 'right') {
    return { ...position, x: position.x - 1 };
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
