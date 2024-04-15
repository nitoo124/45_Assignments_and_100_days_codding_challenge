/*
Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances
of the word "JavaScript" with "TypeScript".
*/
function replace_word(sentence) {
    return sentence.replace(/JavaScript/g, 'typescript');
}
var sentence = 'JavaScript is love. I really like JavaScript.';
var new_sentence = replace_word(sentence);
console.log(new_sentence);
