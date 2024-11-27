const DiscountApplier = require("../discount-applier");

class Notifier {
  constructor() {
    this.calls = [];
  }
  notify(user, message) {
    this.calls.push({ user, message });
  }
}

test("apply v1", () => {
  const notifier = new Notifier();
  const discountApplier = new DiscountApplier(notifier);
  const users = ["user1", "user2", "user3"];
  const discount = 10;
  const message = `You've got a new discount of ${discount}%`;

  discountApplier.applyV1(discount, users);

  expect(notifier.calls).toEqual(users.map((user) => ({ user, message })));
});

test("apply v2", () => {
  const notifier = new Notifier();
  const discountApplier = new DiscountApplier(notifier);
  const users = ["user1", "user2", "user3"];
  const discount = 10;
  const message = `You've got a new discount of ${discount}%`;

  discountApplier.applyV2(discount, users);

  expect(notifier.calls).toEqual(users.map((user) => ({ user, message })));
});
