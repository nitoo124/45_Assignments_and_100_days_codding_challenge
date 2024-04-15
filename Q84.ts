/*
Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances 
of the word "JavaScript" with "TypeScript".
*/
function replace_word(sentence:string): string{

    return sentence.replace(/JavaScript/g, 'typescript');

    
}

const sentence: string = 'JavaScript is love. I really like JavaScript.';
const new_sentence :string = replace_word(sentence);

console.log(new_sentence);