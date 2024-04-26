/*
Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

*/
const obj = {
    property: "Value",
    outer_Method: function () {
        console.log(this.property);
        const inner_Method = () => {
            console.log(this.property);
        };
        inner_Method();
    },
};
obj.outer_Method();
export {};
