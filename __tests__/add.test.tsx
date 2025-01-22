import { describe, it, expect } from "vitest";
import { add } from "@/lib/helper";

describe("add function", () => {
  it("returns 0 for an empty input", () => {
    expect(add("")).toBe(0);
  });

  it("returns the number itself for a single number input", () => {
    expect(add("1")).toBe(1);
  });

  it("calculates the sum for multiple comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  it("handles newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("handles custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("throws an error for negative numbers with a detailed message", () => {
    expect(() => add("-1,2,-3")).toThrow(
      "Negative numbers not allowed: -1, -3"
    );
  });
});
