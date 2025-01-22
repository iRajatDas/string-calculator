import React from "react";
import StringCalculator from "@/components/string-calculator";

const HomePage = () => {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-gray-100 p-4">
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

        <StringCalculator />
      </div>
    </main>
  );
};

export default HomePage;