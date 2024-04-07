/*
Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all 
instances of the word "JavaScript" with "TypeScript".
*/

function replace_word(sentence:string)  {

    return sentence.replace(/JavaScript/g, "typescript")
    
}