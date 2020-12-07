function shuffle(numPool) {

  for(
    let j, x, i = numPool.length; i;
    j = parseInt(Math.random() * i),
      x = numPool[--i],
      numPool[i] = numPool[j],
      numPool[j] = x
  );

  return numPool;
};

export default shuffle;

