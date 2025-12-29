// const getSum = require("./get-sum");

// test('Calculating the sum of two numbers', () => {
//   // Test case inputs
//   const num1 = 5;
//   const num2 = 7;

//   // Call the function
//   const result = getSum(num1, num2);

//   // Check if the result is equal to the expected sum
//   expect(result).toBe(12);
// })
const getSum = require("./get-sum");

describe("getSum", () => {
	test.each([
		[5, 7, 12],
		[-5, 7, 2],
		[0, 0, 0],
		[100, 200, 300],
	])("getSum(%i, %i) -> %i", (a, b, expected) => {
		expect(getSum(a, b)).toBe(expected);
	});

	test("handles floats", () => {
		expect(getSum(0.1, 0.2)).toBeCloseTo(0.3);
	});
});
