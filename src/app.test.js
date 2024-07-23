import { it, expect, describe } from "vitest";
import { getThirdAngle } from "./app.js";

describe('geting the third angle', () => {
    it('Enter the Tow angle 30, 60 expected the third angle 90', () => {
        const angleOne = 30
        const angleTow = 60
        const result = getThirdAngle(angleOne, angleTow)
        expect(result).toBe("The third angle is: 90")
    })
    it('Enter the Tow angle 60, 60 expected the third angle 60', () => {
        const angleOne = 60
        const angleTow = 60
        const result = getThirdAngle(angleOne, angleTow)
        expect(result).toBe("The third angle is: 60")
    })
    it('Enter the Tow angle 43, 78 expected the third angle 59', () => {
        const angleOne = 43
        const angleTow = 78
        const result = getThirdAngle(angleOne, angleTow)
        expect(result).toBe("The third angle is: 59")
    })
    it('Enter the Tow angle 10, 20 expected the third angle 150', () => {
        const angleOne = 10
        const angleTow = 20
        const result = getThirdAngle(angleOne, angleTow)
        expect(result).toBe("The third angle is: 150")
    })
})