import {describe, expect, test, it} from '@jest/globals';
import request from "supertest";
import { app } from ".."

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

});
