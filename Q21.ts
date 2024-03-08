//Q:21
interface items{
    name  : string;
    brand : string;
    price : number;

}

//2 object
let fruit : items = {
name : 'Grapes',
price : 100 ,
}

let cloth : items = {
    brand : 'J.',
    price : 2000 ,
    }
    
console.log(`brand name : ${cloth.brand} ,  price : ${cloth.price}`);
console.log(` name : ${fruit.name} ,  price : ${fruit.price}`);

