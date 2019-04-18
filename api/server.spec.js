const server = require("./server");
const request = require("supertest");

describe("server.js", () => {
  it("should set test environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          console.log(res.status);
          expect(res.status).toBe(200);
        });
    });
    it("should return 200 ok using the squad", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
    it('should return {api: "up}', async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});
