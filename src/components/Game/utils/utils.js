export function shuffle(numPool) {

  for(
    let j, x, i = numPool.length; i;
    j = parseInt(Math.random() * i),
      x = numPool[--i],
      numPool[i] = numPool[j],
      numPool[j] = x
  );

  return numPool;
};

export const toBool = (arr) => arr.map(value => !!value);


export function chose(i, array) {
  const item = i;
  const arr = array;
  for (let i in arr) {
    (item == i) ? arr.fill(1, i) : arr.fill(0, i)
  }
  console.log(arr)
  return arr;
}


// <button onClick={() => this.confirmAction()}>Продолжить</button>
