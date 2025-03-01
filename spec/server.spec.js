const request = require("request");

describe("calc", () => {
  it("should multiply 2 and 2", () => {
    expect(2 * 2).toBe(4);
  });
});

describe("get messages", () => {
  it("should return 200 OK", (done) => {
    request.get("http://localhost:3000/messages", (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  it("should return none empty list", (done) => {
    request.get("http://localhost:3000/messages", (err, res) => {
      expect(JSON.parse(res.body).length).toBeGreaterThan(0);
      done();
    });
  });
});

describe("get messages from user", () => {
  it("should return OK 200", (done) => {
    request.get("http://localhost:3000/messages/Alex", (err, res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  it("name should be tim", (done) => {
    request.get("http://localhost:3000/messages/Alex", (err, res) => {
      expect(JSON.parse(res.body)[0].name).toEqual("Alex");
      done();
    });
  });
});
