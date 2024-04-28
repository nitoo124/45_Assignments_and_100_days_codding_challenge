/*
Question 147: Explain how to handle errors in a callback pattern.
*/

function asyncOperation() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation that might fail
      const error = Math.random() < 0.5 ? new Error('Error occurred!') : null;
      const result = 'Operation result';
      
      // Handling error or resolving the Promise with the result
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  }
  
  // Example usage of asyncOperation with error handling using try-catch
  async function example() {
    try {
      const result = await asyncOperation();
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  example();

  function asyncOperation(callback: (error: Error | null, result?: string) => void) {
    // Simulating an asynchronous operation that might fail
    const error = Math.random() < 0.5 ? new Error('Error occurred!') : null;
    const result = 'Operation result';
    
    // Invoking the callback with error (if any) and result
    callback(error, error ? undefined : result);
  }
  
  // Example usage of asyncOperation with error handling
  asyncOperation((error, result) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Result:', result);
    }
  });
  
  