const addition = require("../calc");

describe ("Calculator", () => {
    describe("Addition function", () => {
        test ("should return 30 for 15 + 15", () => {
            expect(addition(15, 15)).toBe(30);
        });
        test ("should return 73 for 40 + 33", () => {
            expect(addition(40, 33)).toBe(73);
        });
        
    });
});