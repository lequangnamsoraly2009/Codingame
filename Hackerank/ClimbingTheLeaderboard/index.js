function climbingLeaderboard(ranked, player) {
  // Write your code here
  for (let i = 0; i < ranked.length; i++) {
    if (ranked[i] == ranked[i + 1]) {
      ranked.splice(i, 1);
    }
  }
  let arrObject = [];
  let result = [];
  let listObject = {};
  listObject.key = 1;
  listObject.value = ranked[0];
  arrObject.push(listObject);
  for (let i = 0; i < ranked.length; i++) {
    let test = {};
    if (ranked[i + 1] == ranked[i]) {
      test.key = listObject.key;
      test.value = ranked[i + 1];
      listObject = { ...listObject, ...test };
      arrObject.push(listObject);
    } else if (ranked[i + 1] < ranked[i]) {
      test.key = listObject.key + 1;
      test.value = ranked[i + 1];
      listObject = { ...listObject, ...test };
      arrObject.push(listObject);
    }
  }
  for (let i = 0; i < player.length; i++) {
    if (player[i] > arrObject[0].value) {
      result.push(1);
    } else if (player[i] < arrObject[arrObject.length - 1].value) {
      result.push(arrObject[arrObject.length - 1].key + 1);
    } else {
      for (let j = 0; j < arrObject.length; j++) {
        if (player[i] === arrObject[j].value) {
          result.push(arrObject[j].key);
        }
        if (
          player[i] < arrObject[j].value &&
          player[i] > arrObject[j + 1].value
        ) {
          result.push(arrObject[j + 1].key);
        }
      }
    }
  }
  return result;
}

// Thực thi quá lâu và sai 4/12 test case

// DinkCout:
function climbingLeaderboard(ranked, player) {
  // Write your code here
  let result = [];
  let newRank = [...new Set(ranked)];

  let a = newRank.length - 1;
  for (let i = 0; i < player.length; i++) {
    while (a >= 0) {
      if (player[i] >= newRank[a]) {
        a--;
      } else {
        result.push(a + 2);
        break;
      }
    }
    if (a < 0) {
      result.push(1);
    }
  }
  return result;
}
