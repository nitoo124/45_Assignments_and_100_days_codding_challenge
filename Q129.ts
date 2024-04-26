/*
Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
*/

const traditional_vs_arrow = {
    value: "traditional_vs_arrow value",
    traditionalFunc: function() {
      console.log("Hello, " + this.value); 
    },
    arrowFunc: () => {
      console.log("Hello, " + this.value); 
    }
  };
  
  traditional_vs_arrow.traditionalFunc(); 
  traditional_vs_arrow.arrowFunc(); 
  