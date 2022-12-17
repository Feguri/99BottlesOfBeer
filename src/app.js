class beerProgram1 {
    
    printLyrics1 () {
        for (let i=99; i > 0; i--){
            if(i === 2){

                console.log(`\n\n${i} Bottles of beer on the wall
                \n${i} bottles of beer
                \nTake one down, pass it around. ${i-1} bottle of beer on the wall.`)

            } else if (i === 1) {

                console.log(`\n\n${i} Bottle of beer on the wall
                \n${i} bottle of beer
                \nTake one down, pass it around. ${i-1} bottles of beer on the wall.`)

            } else {

                console.log(`\n\n${i} Bottles of beer on the wall
                \n${i} bottles of beer
                \nTake one down, pass it around. ${i-1} bottles of beer on the wall.`)

            }

        }

    }
}

class beerProgram2 {

    makePhrase(currentBottle) {
    // Returns a string: 99 bottles of beer lyrics with correct grammar.
        if(currentBottle > 2) {

            return `\n\n${currentBottle} Bottles of beer on the wall\n${currentBottle} Bottles of beer.
            \nTake one down, pass it around. ${currentBottle-1} bottles of beer on the wall.`

        } else if (currentBottle === 2){

            return `\n\n${currentBottle} Bottles of beer on the wall\n${currentBottle} Bottles of beer.
            \nTake one down, pass it around. ${currentBottle-1} bottle of beer on the wall.`

        } else if (currentBottle === 1) {

            return `\n\n${currentBottle} Bottle of beer on the wall\n${currentBottle} Bottle of beer.
            \nTake one down, pass it around. ${currentBottle-1} bottles of beer on the wall.`

        }

    }

    
    lyrics() {
        let finalLyric = '';
            for (let i=99; i > 0; i--){
                finalLyric += this.makePhrase(i);
            }
            return finalLyric
    }


}

module.exports = {
    beerProgram2:beerProgram2
}