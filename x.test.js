import { x } from "./x";

describe("x", () => {
  it("returns param multiplied 2", () => {
    expect(x(2)).toBe(4);
    expect(x(3)).toBe(6);
  });
});
