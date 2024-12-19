# 🧀 CheeseNaN

**CheeseNaN** is a lightweight library for robust numeric validations. It enhances standard functions like `isNaN` and provides advanced utilities to validate numeric properties, such as integers, floats, powers, perfect squares, prime numbers, and more.

---

## 🚀 Features

- **Robust `NaN` detection**: A better alternative to `isNaN` and `Number.isNaN`.
- **Advanced numeric tests**:
  - Check if a value is a valid number, an integer, or a float.
  - Detect positive, negative, or non-zero numbers.
  - Identify powers of \( n \), perfect squares, or prime numbers.
- **Array utilities**: Validate if all or some values are numbers.
- **Handles edge cases**: Works with \( Infinity \), \( -Infinity \), and non-numeric values.

---

## 📦 Installation

Install the library via npm:

```bash
npm install cheesenan
```

Or with yarn:

```bash
yarn add cheesenan
```

---

## 🔧 Usage

### Import the library

```typescript
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
} from 'cheese-nan';
```

---

### 🔹 **Basic Examples**

#### Check if a value is `NaN`:

```typescript
console.log(cheeseNaN(NaN)); // true
console.log(cheeseNaN(42)); // false
console.log(cheeseNaN('string')); // true
```

#### Check if a value is a valid number:

```typescript
console.log(cheeseValidNumber(42)); // true
console.log(cheeseValidNumber(Infinity)); // false
console.log(cheeseValidNumber(NaN)); // false
```

#### Check if a value is an integer or a float:

```typescript
console.log(cheeseInteger(42)); // true
console.log(cheeseInteger(42.5)); // false

console.log(cheeseFloat(42.5)); // true
console.log(cheeseFloat(42)); // false
```

---

### 🔹 **Advanced Tests**

#### Check if a value is a power of \( n \):

```typescript
console.log(cheesePowerOfN(16, 2)); // true (2^4)
console.log(cheesePowerOfN(27, 3)); // true (3^3)
console.log(cheesePowerOfN(0.125, -3)); // true (2^-3)
console.log(cheesePowerOfN(0, 2)); // true (0^2 = 0)
console.log(cheesePowerOfN(0, -2)); // false (undefined)
```

#### Check if a value is a prime number:

```typescript
console.log(cheesePrime(7)); // true
console.log(cheesePrime(10)); // false
console.log(cheesePrime(1_000_000_003)); // true
```

#### Check if a value is within a given range:

```typescript
console.log(cheeseWithinRange(5, 1, 10)); // true
console.log(cheeseWithinRange(15, 1, 10)); // false
```

#### Check for perfect squares:

```typescript
console.log(cheesePerfectSquare(16)); // true (4^2)
console.log(cheesePerfectSquare(15)); // false
```

#### Check divisibility:

```typescript
console.log(cheeseDivisibleBy(10, 2)); // true
console.log(cheeseDivisibleBy(10, 3)); // false
```

#### Check infinite values:

```typescript
console.log(cheeseInfinite(Infinity)); // true
console.log(cheeseInfinite(-Infinity)); // true
console.log(cheeseInfinite(42)); // false
```

---

### 🔹 **Array Utilities**

#### Validate if all values are numbers:

```typescript
console.log(cheeseAllAreNumbers([1, 2, 3])); // true
console.log(cheeseAllAreNumbers([1, 'string', NaN])); // false
```

#### Check if some values are `NaN`:

```typescript
console.log(cheeseSomeAreNaN([1, 2, NaN])); // true
console.log(cheeseSomeAreNaN([1, 2, 3])); // false
```

---

## 🧪 Testing

Cheese-NaN comes with a comprehensive test suite. Run the tests with:

```bash
npm test
```

The test suite covers:

- Robust `NaN` detection.
- Validation of numeric properties: integers, floats, powers, etc.
- Handling edge cases like \( Infinity \), \( -Infinity \), and non-numeric values.
- Array-specific utilities.

---

## 📜 License

**MIT**