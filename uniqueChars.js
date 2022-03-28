function KUniqueCharacters(str) { 
  if (!str) {
    error('Incorrect string');
  }

  const countUniqueCharacters = parseInt(str[0]);
  const strForWork = str.substring(1);

  best = {
    begin:0,
    end:0,
    count:0,
    uniqueSet: new Set
  };

  current = {
    begin:0,
    end:0,
    count:0,
    nextCharPos: [],
    firstChar: strForWork[0],
    uniqueSet: new Set([strForWork[0]])
  };

  let removed = 0;
  for (let i = 0; i < strForWork.length; i++){
    current.end = i;
    current.count++;
    
    if (current.firstChar === strForWork[i]) {
      removed++;
    }

    if (!current.uniqueSet.has(strForWork[i])) {
      current.nextCharPos.push(i);      
      current.uniqueSet.add(strForWork[i]);
    }
    
    if (current.uniqueSet.size > countUniqueCharacters) {      
      current.begin = current.nextCharPos[0];
      
      current.count -= removed;
      removed = 0;

      current.uniqueSet.delete(current.firstChar);
      current.nextCharPos = current.nextCharPos.slice(1);
      current.firstChar = strForWork[current.nextCharPos[0]];
    }

    if (best.count < current.count) {
      best = {...current}
    }
  }


  return strForWork.substring(best.begin, best.end+1); 
}
   
// keep this function call here 
console.log(KUniqueCharacters(readline()));
