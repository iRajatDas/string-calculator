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
        console.error(err);
        setError("An unknown error occurred");
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setError(null);
  };
  return (
    <section>
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

      {/* -- Result Section */}
      <div
        className={
          // Hide the result section if there's no result or error
          !result && !error ? "hidden" : "mt-6"
        }
      >
        {error ? (
          // Display error message
          <p className="text-red-600 text-sm font-medium">{error}</p>
        ) : (
          // Display result if it's a valid number
          // -: result with value zero, will be treated as a falsy value
          typeof result === "number" && (
            <div className="p-4 bg-gray-50 rounded-md border">
              <h2 className="text-lg font-medium mb-2">Result:</h2>
              <p className="text-xl font-bold text-rose-600">{result}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default StringCalculator;
