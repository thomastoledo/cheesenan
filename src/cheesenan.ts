export function cheeseNaN(value: any): boolean {
    return typeof value !== 'number' || Number.isNaN(value);
}

export function cheeseValidNumber(value: any): boolean {
    return typeof value === 'number' && Number.isFinite(value);
}

export function cheeseInteger(value: any): boolean {
    return typeof value === 'number' && Number.isInteger(value);
}

export function cheeseFloat(value: any): boolean {
    return typeof value === 'number' && !Number.isInteger(value) && Number.isFinite(value);
}

export function cheeseNonZeroNumber(value: any): boolean {
    return cheeseValidNumber(value) && value !== 0;
}

export function cheesePositive(value: any): boolean {
    return cheeseValidNumber(value) && value > 0;
}

export function cheeseNegative(value: any): boolean {
    return cheeseValidNumber(value) && value < 0;
}

// TODO à tester avec cheeseNaN
export function cheeseCanBeNumber(value: any): boolean {
    return !Number.isNaN(Number(value));
}

export function cheeseAllAreNumbers(values: any[]): boolean {
    return values.every((value) => cheeseValidNumber(value));
}

export function cheeseSomeAreNaN(values: any[]): boolean {
    return values.some((value) => cheeseNaN(value));
}

export function cheeseEven(value: any): boolean {
    return typeof value === 'number' && Number.isFinite(value) && value % 2 === 0;
}

export function cheeseOdd(value: any): boolean {
    return typeof value === 'number' && Number.isFinite(value) && value % 2 !== 0;
}

export function cheesePowerOfN(value: any, n: number): boolean {
    if (typeof value !== 'number' || typeof n !== 'number' || value < 0) {
        return false
    };

    // n === 0 --> indeterminate according to mathematical conventions
    // n < 0 --> is equivalent to 1/(0^n)
    if (n <= 0 && value === 0) {
        return false;
    }

    // for n > 0, 0 is a power of n
    if (value === 0) { return true };
    
    // value > 0 and n > 0
    // For positive powers, num must equal 1
    if (n > 0) {
        return checkPower(value, Math.abs(n))
    } else {
        // For negative powers, check if the reciprocal is a power of n
        return checkPower(1 / Math.abs(value), Math.abs(n));
    }

    function checkPower(num: number, n: number): boolean {
        while (num > 1) {
            if (num % Math.abs(n) !== 0) return false;
            num /= Math.abs(n);
        }
        return num === 1
    }
}


export function cheesePrime(value: any): boolean {
    if (typeof value !== 'number' || !Number.isInteger(value) || value <= 1 || !Number.isFinite(value)) return false;
    if (value <= 3) return true; // 2 and 3 are prime
    if (value % 2 === 0 || value % 3 === 0) return false;

    const limit = Math.sqrt(value);
    for (let i = 5; i <= limit; i += 6) {
        if (value % i === 0 || value % (i + 2) === 0) return false;
    }
    return true;
}

export function cheeseWithinRange(value: any, min: number, max: number): boolean {
    return typeof value === 'number' && value >= min && value <= max;
}

export function cheeseDivisibleBy(value: any, divisor: number): boolean {
    return typeof value === 'number' && divisor !== 0 && value % divisor === 0;
}

export function cheesePerfectSquare(value: any): boolean {
    if (typeof value !== 'number' || value < 0) return false;
    const sqrt = Math.sqrt(value);
    return sqrt === Math.floor(sqrt);
}

export function cheeseInfinite(value: any): boolean {
    return value === Infinity || value === -Infinity;
}
