/**
 * Let's make a game 🕹
 */
type Direction = 'up' | 'down' | 'left' | 'right';

let position = { x: 0, y: 0 };

function move(direction: Direction) {
  switch (direction) {
    case 'up':
      return (position.y += 1);
      break;
    case 'down':
      return (position.y -= 1);
      break;
    case 'left':
      return (position.x -= 1);
      break;
    case 'right':
      return (position.x += 1);
      break;
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
