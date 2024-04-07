/*
Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
what a computer programmer knows, like coding languages, tools, and software frameworks.
 Find a way to get three specific skills from this list and show them.
*/
let programskills = {
    languages: ['javascript', 'PHP++', 'typescript'],
    framework: ['React', 'Laravel ', 'Angular'],
    tools: ['VS code', 'Git', 'webpack']
};
let { languages, framework, tools } = programskills;
//showing a skill
console.log(`lamguage : ${languages[0]}`);
console.log(`framework : ${framework[0]}`);
console.log(`tools : ${tools[0]}`);
export {};
