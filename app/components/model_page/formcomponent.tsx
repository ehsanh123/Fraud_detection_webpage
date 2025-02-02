'use client'
// components/FormComponent.tsx
import { useState } from 'react';


// const [inputValue, setInputValue] = useState<string>(''); // State to hold the input value

//   // Function to update the input value
//   const changeInputValue = (newValue: string) => {
//     setInputValue(newValue);
//   };
//   return (
//     <div>
//       <h1>Controlled Input</h1>
      
//       {/* Input field controlled by React state */}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)} // Update the state when the input changes
//         placeholder="Type something..."
//       />
      
//       {/* Button to change the input value from outside */}
//       <button onClick={() => changeInputValue('New text from outside!')}>Change Input Text</button>
      
//       {/* Display current input value */}
//       <p>Current Input: {inputValue}</p>
//     </div>
//   );