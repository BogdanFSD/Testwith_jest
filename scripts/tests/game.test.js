/**
 * @jest-environment jsdom
 */

 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game objects contains correct keys", () => {
    test("score key exist", () => {
        exportAllDeclaration("score" in game).toBe(true);
    });
});