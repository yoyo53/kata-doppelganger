const DiscountApplier = require("../discount-applier");

class Notifier {
  notify(user, message) {
    // send notification
  }
}

test("apply v1", () => {
  const notifier = new Notifier();
  const discountApplier = new DiscountApplier(notifier);
  const users = ["user1", "user2", "user3"];
  const discount = 10;
  const message = `You've got a new discount of ${discount}%`;
  const notify = jest.spyOn(notifier, "notify");

  discountApplier.applyV1(discount, users);

  expect(notify.mock.calls).toEqual(users.map((user) => [user, message]));
});

test("apply v2", () => {
  const notifier = new Notifier();
  const discountApplier = new DiscountApplier(notifier);
  const users = ["user1", "user2", "user3"];
  const discount = 10;
  const message = `You've got a new discount of ${discount}%`;
  const notify = jest.spyOn(notifier, "notify");

  discountApplier.applyV2(discount, users);

  expect(notify.mock.calls).toEqual(users.map((user) => [user, message]));
});
