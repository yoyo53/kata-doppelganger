const { MailSender, SendMailRequest } = require("../mail-sender");

class HttpClient {
  post(url, request) {
    return { code: 503 };
  }
}

test("send v1", () => {
  const user = { name: "John Doe", email: "test@mail.com" };
  const message = "Hello, world!";
  const httpClient = new HttpClient();
  const mailSender = new MailSender(httpClient);
  const httpPost = jest.spyOn(httpClient, "post");

  mailSender.sendV1(user, message);

  expect(httpPost.mock.calls).toEqual([
    [
      mailSender.baseUrl,
      new SendMailRequest(user.email, "New notification", message),
    ],
  ]);
});

test("send v2", () => {
  const user = { name: "John Doe", email: "test@mail.com" };
  const message = "Hello, world!";
  const httpClient = new HttpClient();
  const mailSender = new MailSender(httpClient);
  const httpPost = jest.spyOn(httpClient, "post");

  mailSender.sendV2(user, message);

  expect(httpPost.mock.calls).toEqual([
    [
      mailSender.baseUrl,
      new SendMailRequest(user.email, "New notification", message),
    ],
    [
      mailSender.baseUrl,
      new SendMailRequest(user.email, "New notification", message),
    ],
  ]);
});
