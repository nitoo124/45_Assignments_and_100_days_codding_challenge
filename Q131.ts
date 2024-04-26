/*
Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
*/

export class expoted_class {
    message: string;
    constructor(message: string) {
      this.message = message;
    }
    greet() {
      console.log(`${this.message}, my name is Nitoo kumari`);
    }
  }