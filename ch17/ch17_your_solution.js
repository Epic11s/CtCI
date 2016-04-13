function babyNames(frequencies, pairs) {
  const countHash = frequencies.reduce((hash, name) => {
    hash[name[0]] = name[1];
    return hash;
  }, {});
  const pairHash = pairs.reduce((hash, pair) => {
    const name1 = pair[0], name2 = pair[1];
    if (!hash[name1]) {
      hash[name1] = { isRoot: false, root: '', count: countHash[name1] };
      if (hash[name2]) {
        if(hash[name2].isRoot) {
          hash[name1].root = name2;
          hash[name2].count += hash[name1].count
        } else {
          let rootName = hash[name2].root;
          hash[name1].root = rootName;
          hash[rootName].count += hash[name1].count;
        }
      } else {
        hash[name1].isRoot = true;
        hash[name2] = { isRoot: false, root: name1, count: countHash[name2] };
        hash[name1].count += hash[name2].count;
      }
    } else {
      if (!hash[name2]) {
        hash[name2] = { isRoot: false, root: '', count: countHash[name2] };
        if (hash[name1].isRoot) {
          hash[name2].root = name1;
          hash[name1].count += hash[name2].count;
        } else {
          let rootName = hash[name1].root;
          hash[name2].root = rootName;
          hash[rootName].count += hash[name2].count;
        }
      }
    }
    return hash;
  }, {});

  return Object.keys(pairHash).reduce((list, name) => {
    if (pairHash[name].isRoot) {
      list.push([name, pairHash[name].count]);
    }
    return list;
  }, []);
}


function balancedSubArray() {}


function kthMultiple() {}

function count2s() {}
