function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let count = 0;
  let countGame = 0;
  for (let i = p; i >= m; i -= d) {
    if (count > s) {
      return countGame - 1;
      break;
    }
    count += i;
    countGame += 1;
  }
  if (s < p) {
    countGame = 0;
  } else if (count <= s) {
    countGame += Math.floor((s - count) / m);
  }
  return countGame;
}
