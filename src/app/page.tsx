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
    } catch {
      setError("Invalid expression");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold max-md:text-center mb-6">
          String Calculator
        </h1>

        {/* Input Field */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your expression (e.g., 5+3*2)"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-between gap-4">
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

        {/* Result */}
        {result ? (
          <div className="mt-6 p-4 bg-gray-50 rounded-md border">
            <h2 className="text-lg font-medium mb-2">Result:</h2>
            <p className="text-xl font-bold text-rose-600">{result}</p>
          </div>
        ) : null}

        {/* Error Msg */}
        {error ? (
          <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>
        ) : null}
      </div>
    </div>
  );
};

export default StringCalculator;
