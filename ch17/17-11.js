/*                 Maser Solution                           */


/*                  Individual Solutions                    */


//          Bryan
// This solution is not optimized for multiple searches on the same file, to do this simply
// memoize the words in a hash with the index's of their occurrence. 
function wordDistance(file, word1, word2) {
  const wordArray = fs.readFileSync(file, 'utf-8').split(' ');
  const startState = { lastSeen: null, count: 0, lowest: Infinity };
  const finalState = wordArray.reduce(function(state, word) {
    word = /\w+/g.exec(word)[0];
    if (word === word1 || word === word2) {
      if (state.lastSeen === null) {
        state.lastSeen = word;
      } else if (word !== state.lastSeen) {
        state.lastSeen = word;
        if (state.count < state.lowest) state.lowest = state.count;
      }
      state.count = 0
    } else {
      state.count++;
    }
    return state;
  }, startState);

  return finalState.lowest;
}
