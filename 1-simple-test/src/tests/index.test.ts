import {describe, expect, it, test} from "@jest/globals"
import { sub, sum } from "..";

describe('tesing sum functionality', () => {
    it('add 4 + 2 to equal 6', () => {
        expect(sum(4,2)).toBe(6);
    })

    it('sum of -ve', () => {
        expect(sum(-3, -2)).toBe(-5);
    })

    it('sum of -ve and +ve', () => {
        expect(sum(-3, 2)).toBe(-1);
    })
})

describe('tesing sub functionality', () => {
    it('sub 4 - 2 to equal 2', () => {
        expect(sub(4,2)).toBe(2);
    })

    it('sub of -ve', () => {
        expect(sub(-3, -2)).toBe(-1);
    })

    it('sub of -ve and +ve', () => {
        expect(sub(-3, 2)).toBe(-5);
    })
})