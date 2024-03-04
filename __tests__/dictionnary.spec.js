const dictionnary = require("..")

describe('dictionnary', () => {
  test('should return an empty object for empty string', () => {
    expect(dictionnary('')).toEqual({})
  })
  test("should count 1 for one word", () => {
    expect(dictionnary("the")).toEqual({"the": 1})
  })
  test("sould count 2 for two words are the same", () => {
    expect(dictionnary("the the")).toEqual({"the": 2})
  })
  test("sould count 2 for two words are the same and 1 for different word", () => {
    expect(dictionnary("the cat the")).toEqual({"the": 2, "cat": 1})
  })
})
