const addition = require("../calc");

describe ("Calculator", () => {
    describe("Addition function", () => {
        test ("should return 30 for 15 + 15", () => {
            expect(addition(20, 22)).toBe(42);
        })
    })
})