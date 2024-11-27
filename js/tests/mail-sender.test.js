const { MailSender, SendMailRequest } = require("../mail-sender");

class HttpClient {
  constructor() {
    this.calls = [];
  }

  post(url, request) {
    this.calls.push({ url, request });
    return { code: 503 };
  }
}

test("send v1", () => {
  const user = { name: "John Doe", email: "test@mail.com" };
  const message = "Hello, world!";
  const httpClient = new HttpClient();
  const mailSender = new MailSender(httpClient);

  mailSender.sendV1(user, message);

  expect(httpClient.calls).toEqual([
    {
      url: mailSender.baseUrl,
      request: new SendMailRequest(user.email, "New notification", message),
    },
  ]);
});

test("send v2", () => {
  const user = { name: "John Doe", email: "test@mail.com" };
  const message = "Hello, world!";
  const httpClient = new HttpClient();
  const mailSender = new MailSender(httpClient);

  mailSender.sendV2(user, message);

  expect(httpClient.calls).toEqual([
    {
      url: mailSender.baseUrl,
      request: new SendMailRequest(user.email, "New notification", message),
    },
    {
      url: mailSender.baseUrl,
      request: new SendMailRequest(user.email, "New notification", message),
    },
  ]);
});
