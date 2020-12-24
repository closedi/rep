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
