//Counting repeating letters

function countLetters(str) {
    let word = str.split('');
    let letters = [];
    let count = 1;

    for (i = 0; i < word.length; i++) {
        if (word[i] === word[i+1]) {
            count++;
        } else {
            let value = `${count}${word[i]}`;
            letters = [...letters,value]; 
            count=1;
        }
    }
    return letters;
}
console.log(countLetters('ffffeerttttooo'));