/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.

*/  

function make_shirt(size:string ='large', message: string ='I love typescript'): void{

    console.log(`A ${size} shirt will be printed with the message: ${message}`);
}

// Making a large shirt with default message
make_shirt();

// Making a medium shirt with default message

make_shirt('medium');

// Making a shirt of any size with a different message
make_shirt('Small', 'Coding is love');






