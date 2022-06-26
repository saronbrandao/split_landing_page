const left = document.querySelector('.left');
const right = document.querySelector('.right');
const sides = [left, right];
const container = document.querySelector('.container');

sides.forEach((side) => {
  if (side === left) {
    side.addEventListener('mouseover', () => {
      container.classList.add('hover-left');
    });
  }
  if (side === right) {
    right.addEventListener('mouseover', () => {
      container.classList.add('hover-right');
    });
  }
});

sides.forEach((side) => {
  side.addEventListener('mouseout', function clearing() {
    container.classList.remove('hover-left');
    container.classList.remove('hover-right');
  });
});
