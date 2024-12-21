import {
    cheeseNaN,
    cheeseValidNumber,
    cheeseInteger,
    cheeseFloat,
    cheeseNonZeroNumber,
    cheesePositive,
    cheeseNegative,
    cheeseCanBeNumber,
    cheeseAllAreNumbers,
    cheeseSomeAreNaN,
    cheeseEven,
    cheeseOdd,
    cheesePowerOfN,
    cheesePrime,
    cheeseWithinRange,
    cheeseDivisibleBy,
    cheesePerfectSquare,
    cheeseInfinite,
} from './cheesenan';

describe('cheeseNaN Library', () => {
    describe('cheeseNaN', () => {
        test('returns true for NaN', () => {
            expect(cheeseNaN(NaN)).toBe(true);
        });

        test('returns false for valid numbers', () => {
            expect(cheeseNaN(42)).toBe(false);
        });

        test('returns true for non-numbers', () => {
            expect(cheeseNaN('string')).toBe(true);
            expect(cheeseNaN(undefined)).toBe(true);
            expect(cheeseNaN(null)).toBe(true);
            expect(cheeseNaN({})).toBe(true);
            expect(cheeseNaN([])).toBe(true);
        });
    });

    describe('cheeseValidNumber', () => {
        test('returns true for finite numbers', () => {
            expect(cheeseValidNumber(42)).toBe(true);
        });

        test('returns false for NaN or Infinity', () => {
            expect(cheeseValidNumber(NaN)).toBe(false);
            expect(cheeseValidNumber(Infinity)).toBe(false);
            expect(cheeseValidNumber(-Infinity)).toBe(false);
        });

        test('returns false for non-numbers', () => {
            expect(cheeseValidNumber('42')).toBe(false);
            expect(cheeseValidNumber(null)).toBe(false);
            expect(cheeseValidNumber(undefined)).toBe(false);
        });
    });

    describe('cheeseInteger', () => {
        test('returns true for integers', () => {
            expect(cheeseInteger(42)).toBe(true);
            expect(cheeseInteger(-42)).toBe(true);
            expect(cheeseInteger(0)).toBe(true);
        });

        test('returns false for non-integers', () => {
            expect(cheeseInteger(42.5)).toBe(false);
            expect(cheeseInteger(NaN)).toBe(false);
            expect(cheeseInteger(Infinity)).toBe(false);
        });
    });

    describe('cheeseFloat', () => {
        test('returns true for floats', () => {
            expect(cheeseFloat(42.5)).toBe(true);
        });

        test('returns false for integers', () => {
            expect(cheeseFloat(42)).toBe(false);
        });

        test('returns false for non-numbers', () => {
            expect(cheeseFloat('42.5')).toBe(false);
            expect(cheeseFloat(null)).toBe(false);
        });
    });

    describe('cheeseNonZeroNumber', () => {
        test('returns true for non-zero numbers', () => {
            expect(cheeseNonZeroNumber(42)).toBe(true);
            expect(cheeseNonZeroNumber(-42)).toBe(true);
        });

        test('returns false for zero', () => {
            expect(cheeseNonZeroNumber(0)).toBe(false);
        });

        test('returns false for non-numbers', () => {
            expect(cheeseNonZeroNumber(null)).toBe(false);
            expect(cheeseNonZeroNumber('0')).toBe(false);
        });
    });

    describe('cheesePositive', () => {
        test('returns true for positive numbers', () => {
            expect(cheesePositive(42)).toBe(true);
            expect(cheesePositive(0.1)).toBe(true);
        });

        test('returns false for zero and negative numbers', () => {
            expect(cheesePositive(0)).toBe(false);
            expect(cheesePositive(-42)).toBe(false);
        });
    });

    describe('cheeseNegative', () => {
        test('returns true for negative numbers', () => {
            expect(cheeseNegative(-42)).toBe(true);
            expect(cheeseNegative(-0.1)).toBe(true);
        });

        test('returns false for zero and positive numbers', () => {
            expect(cheeseNegative(0)).toBe(false);
            expect(cheeseNegative(42)).toBe(false);
        });
    });

    describe('cheeseCanBeNumber', () => {
        test('returns true for values convertible to numbers', () => {
            expect(cheeseCanBeNumber('42')).toBe(true);
            expect(cheeseCanBeNumber('42.5')).toBe(true);
        });

        test('returns false for non-convertible values', () => {
            expect(cheeseCanBeNumber('string')).toBe(false);
            expect(cheeseCanBeNumber(undefined)).toBe(false);
        });
    });

    describe('cheeseAllAreNumbers', () => {
        test('returns true if all values are valid numbers', () => {
            expect(cheeseAllAreNumbers([1, 2, 3])).toBe(true);
        });

        test('returns false if any value is not a valid number', () => {
            expect(cheeseAllAreNumbers([1, 'string', NaN])).toBe(false);
        });
    });

    describe('cheeseSomeAreNaN', () => {
        test('returns true if any value is NaN', () => {
            expect(cheeseSomeAreNaN([1, 2, NaN])).toBe(true);
        });

        test('returns false if no value is NaN', () => {
            expect(cheeseSomeAreNaN([1, 2, 3])).toBe(false);
        });
    });

    describe('cheesePowerOfN', () => {
        test('handles positive powers', () => {
            expect(cheesePowerOfN(16, 2)).toBe(true); // 2^4
            expect(cheesePowerOfN(27, 3)).toBe(true); // 3^3
        });

        test('handles negative powers', () => {
            expect(cheesePowerOfN(0.125, -2)).toBe(true); // 2^-3
            expect(cheesePowerOfN(0.037037037037037035, -3)).toBe(true); // 3^-3
        });

        test('handles non-powers', () => {
            expect(cheesePowerOfN(15, 2)).toBe(false);
            expect(cheesePowerOfN(0.5, 2)).toBe(false);
        });

        test('handles edge cases', () => {
            expect(cheesePowerOfN(0, 0)).toBe(false); // Indeterminate
            expect(cheesePowerOfN(0, 2)).toBe(true); // 0^2
            expect(cheesePowerOfN(0, -2)).toBe(false); // Indefinite
        });
    });

    describe('cheesePrime', () => {
        test('returns true for prime numbers', () => {
            expect(cheesePrime(7)).toBe(true);
            expect(cheesePrime(97)).toBe(true);
        });

        test('returns false for non-prime numbers', () => {
            expect(cheesePrime(10)).toBe(false);
            expect(cheesePrime(1)).toBe(false);
        });

        test('handles edge cases', () => {
            expect(cheesePrime(-7)).toBe(false); // Negative numbers
            expect(cheesePrime(0)).toBe(false); // Zero
            expect(cheesePrime(NaN)).toBe(false); // NaN
        });
    });

    describe('cheeseWithinRange', () => {
        test('returns true if value is within range', () => {
            expect(cheeseWithinRange(5, 1, 10)).toBe(true);
            expect(cheeseWithinRange(1, 1, 10)).toBe(true); // Edge case: lower bound
            expect(cheeseWithinRange(10, 1, 10)).toBe(true); // Edge case: upper bound
        });

        test('returns false if value is outside range', () => {
            expect(cheeseWithinRange(0, 1, 10)).toBe(false);
            expect(cheeseWithinRange(11, 1, 10)).toBe(false);
        });

        test('handles non-numeric inputs gracefully', () => {
            expect(cheeseWithinRange('5', 1, 10)).toBe(false);
            expect(cheeseWithinRange(null, 1, 10)).toBe(false);
        });
    });

    describe('cheeseDivisibleBy', () => {
        test('returns true if value is divisible by divisor', () => {
            expect(cheeseDivisibleBy(10, 2)).toBe(true);
            expect(cheeseDivisibleBy(15, 5)).toBe(true);
        });

        test('returns false if value is not divisible by divisor', () => {
            expect(cheeseDivisibleBy(10, 3)).toBe(false);
            expect(cheeseDivisibleBy(15, 4)).toBe(false);
        });

        test('handles edge cases', () => {
            expect(cheeseDivisibleBy(0, 5)).toBe(true); // Zero is divisible by any number
            expect(cheeseDivisibleBy(10, 0)).toBe(false); // Division by zero
            expect(cheeseDivisibleBy('10', 2)).toBe(false); // Non-numeric input
        });
    });

    describe('cheesePerfectSquare', () => {
        test('returns true for perfect squares', () => {
            expect(cheesePerfectSquare(16)).toBe(true); // 4^2
            expect(cheesePerfectSquare(1)).toBe(true); // 1^2
        });

        test('returns false for non-perfect squares', () => {
            expect(cheesePerfectSquare(15)).toBe(false);
            expect(cheesePerfectSquare(2)).toBe(false);
        });

        test('handles edge cases', () => {
            expect(cheesePerfectSquare(0)).toBe(true); // 0 is a perfect square
            expect(cheesePerfectSquare(-4)).toBe(false); // Negative numbers
            expect(cheesePerfectSquare(NaN)).toBe(false); // NaN
        });
    });

    describe('cheeseInfinite', () => {
        test('returns true for Infinity and -Infinity', () => {
            expect(cheeseInfinite(Infinity)).toBe(true);
            expect(cheeseInfinite(-Infinity)).toBe(true);
        });

        test('returns false for finite numbers', () => {
            expect(cheeseInfinite(42)).toBe(false);
            expect(cheeseInfinite(0)).toBe(false);
        });

        test('handles non-numeric inputs', () => {
            expect(cheeseInfinite('Infinity')).toBe(false);
            expect(cheeseInfinite(null)).toBe(false);
        });
    });

    describe('cheeseEven', () => {
        test('returns true for even numbers', () => {
            expect(cheeseEven(4)).toBe(true);
            expect(cheeseEven(0)).toBe(true); // Zero is even
        });

        test('returns false for odd numbers', () => {
            expect(cheeseEven(3)).toBe(false);
            expect(cheeseEven(-1)).toBe(false);
        });

        test('handles edge cases', () => {
            expect(cheeseEven(NaN)).toBe(false);
            expect(cheeseEven(Infinity)).toBe(false);
            expect(cheeseEven(null)).toBe(false);
        });
    });

    describe('cheeseOdd', () => {
        test('returns true for odd numbers', () => {
            expect(cheeseOdd(3)).toBe(true);
            expect(cheeseOdd(-5)).toBe(true);
        });

        test('returns false for even numbers', () => {
            expect(cheeseOdd(4)).toBe(false);
            expect(cheeseOdd(0)).toBe(false); // Zero is not odd
        });

        test('handles edge cases', () => {
            expect(cheeseOdd(NaN)).toBe(false);
            expect(cheeseOdd(Infinity)).toBe(false);
            expect(cheeseOdd(null)).toBe(false);
        });
    });
});
