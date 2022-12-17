const phrase = `\n\n4 Bottles of beer on the wall\n4 Bottles of beer.\nTake one down, pass it around. 4 bottles of beer on the wall.`

const indexSearcher = (string, single) => {
    let charlist = [];
    for(char of string) {
        charlist.push(char);
    }

    let indexInstances = [];
    for (character of charlist){
        if (character === single){
            console.log(single)

            // it's always getting the first index instance! 
            indexInstances.push(charlist.indexOf(single));
        }
    }

    if (indexInstances.length === 1) {
        return indexInstances[0];
    } else if (indexInstances.length === 0) {
        return "Did not find any matches";
    } else {
        return indexInstances;
    }
}


console.log(indexSearcher(phrase, '4'));