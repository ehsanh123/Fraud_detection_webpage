
'use client'

import Comp_2_1 from '../../components/page2/Comp_2_1';
import Comp_2_2 from '../../components/page2/Comp_2_2';
import Comp_2_3 from '../../components/page2/Comp_2_3';
import Comp_2_4 from '../../components/page2/Comp_2_4';
import Comp_2_5 from '../../components/page2/Comp_2_5';

import { useState } from 'react'


export default function Model_2() {

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runPythonScript = async () => {
    setLoading(true);
    
    try {
      const response = await fetch("/api/run-python");
      const data = await response.json();

      if (response.ok) {
          setOutput("respond : " + data)//.output);
      } else {
          // setOutput(data.error || "An error occurred");
      }
    } 

    catch (error) {
        console.error("Error fetching API:", error);
        setOutput("Failed to run Python script");
    } 

    finally {
        setLoading(false);
    }

  };


  return (
    <div>
      <h1>Model 2 Page</h1>
      <button onClick={runPythonScript} disabled={loading}>
        {loading ? "Running..." : "Run Script"}
      </button>
      <p>Output: {output}</p>

      <Comp_2_1 />
      <Comp_2_2 />
      <Comp_2_3 />
      <Comp_2_4 />
      <Comp_2_5 />
    </div>
  );
}
