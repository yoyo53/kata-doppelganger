const SafeCalculator = require("../safe-calculator");

class Authorizer {
  authorize() {
    return true;
  }
}

test("should not throw when authorized", () => {
  const authorizer = new Authorizer();
  const calculator = new SafeCalculator(authorizer);
  expect(() => calculator.add(1, 2)).not.toThrow();
});
