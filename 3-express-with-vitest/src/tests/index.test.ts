import {describe, expect, test, it, vi} from 'vitest';
import request from "supertest";
import { app } from ".."

// it will get mocked
vi.mock('../db', () => ({
  prismaClient: { sum: { create: vi.fn() }}
}));


//otherwise will get this error:-

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

//  FAIL  src/tests/index.test.ts [ src/tests/index.test.ts ]
// Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
//  ❯ new PrismaClient node_modules/.prisma/client/default.js:43:11
//  ❯ src/db.ts:3:29
//       1| import { PrismaClient } from "@prisma/client";
//       2| 
//       3| export const prismaClient = new PrismaClient();
//        |                             ^
//       4| 
//       5| 
//  ❯ src/index.ts:4:1


describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(3);
      });

    it("should return the sum of two -ve numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: -4,
            b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(-6);
    })

    it("should return the sum of -ve and +ve numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: -4,
            b: +3
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(-1);
    })

    it("should return the sum of two 0", async () => {
        const res = await request(app).post("/sum").send({
            a: 0,
            b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.ans).toBe(0);
    })

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });
});


describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).get("/sum").set({
          a: "1",
          b: "2"
        }).send();

      expect(res.statusCode).toBe(200);
      expect(res.body.ans).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).get("/sum").send();

    expect(res.statusCode).toBe(411);
  });

});