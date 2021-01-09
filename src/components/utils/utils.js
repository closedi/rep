export function shuffle(numPool) {
  let array = [];
  for(
    let j, x, i = numPool.length; i;
    j = parseInt(Math.random() * i),
      x = numPool[--i],
      numPool[i] = numPool[j],
      numPool[j] = x
  );
  array = numPool.map(value => !value);
  return array;
};

export function winstreak(array) {
  let max = 0;
  let current = 0;
  let value = 'win';
  for (let item of array) {
    if (item === value) {
      current++;
      max = (current > max) ? current : max;
    } else {
      max = (current > max) ? current : max;
      current = 0;
    }
  }
  return {current: current, max: max}
}
