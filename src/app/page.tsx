"use client";
import { add } from "@/lib/helper";
import React, { useState } from "react";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | number>(null);
  const [error, setError] = useState<null | string>(null);

  const handleCalculate = () => {
    try {
      setError("");

      // ideally we should validate the input here
      // since empty values are allowed, skip validation for now

      const evaluatedResult = add(input);
      setResult(evaluatedResult);
      // console.log({ evaluatedResult });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg border p-4 md:p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold max-md:text-center mb-2">
            String Calculator
          </h1>
          <p className="mb-2 text-zinc-600 text-sm">
            Enter a comma separated string of numbers to calculate the sum. Or
            use custom delimiters by specifying them in the format:
          </p>
          <code className="text-xs">
            <pre>{`"//[delimiter]\\n[numbers...]".`}</pre>
          </code>
        </header>

        {/* Input Field */}
        <input
          data-testid="fieldnumber"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            // reset error or result when input changes
            setResult(null);
            setError(null);
          }}
          placeholder="Enter numbers here..."
          className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-between gap-4 text-sm">
          <button
            onClick={handleCalculate}
            className="w-full py-2 bg-rose-500 text-white font-medium rounded-md hover:bg-rose-600 transition"
          >
            Calculate
          </button>
          <button
            onClick={handleClear}
            className="w-full py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>

        {/* -- Result */}

        {/* Checking type of result,
            since result with value `zero`, will be treated as a falsy value
         */}
        {!error && typeof result === "number" ? (
          <div className="mt-6 p-4 bg-gray-50 rounded-md border">
            <h2 className="text-lg font-medium mb-2">Result:</h2>
            <p className="text-xl font-bold text-rose-600">{result}</p>
          </div>
        ) : (
          // Error msg
          <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default StringCalculator;
