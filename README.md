### **README for CheeseNaN**

---

# **CheeseNaN**

CheeseNaN is a lightweight and versatile utility library for robust number validation in JavaScript and TypeScript. It simplifies working with numbers by providing a suite of functions to handle edge cases, perform checks, and validate mathematical properties.

---

## **Features**

- 🧀 **Robust NaN checks**: Beyond `isNaN` and `Number.isNaN`.
- 🧮 **Comprehensive number tests**: Positive, negative, zero, even, odd, integers, floats.
- 📐 **Mathematical utilities**: Prime numbers, powers of `n`, perfect squares.
- 🎛 **Custom checks**: Validate ranges, divisibility, and more.

---

## **Installation**

Install via **npm** or **yarn**:

```bash
npm install cheesenan
```

Or use a CDN for vanilla projects:
```js
import * as cheesenan from 'https://unpkg.com/statello@latest/dist/cheesenan.min.js'
```

---

## **Usage**

### **Basic Checks**
```typescript
import { cheeseNaN, cheeseValidNumber, cheeseInteger } from 'cheesenan';

console.log(cheeseNaN(NaN)); // true
console.log(cheeseValidNumber(42)); // true
console.log(cheeseInteger(42.5)); // false
```

### **Advanced Checks**
```typescript
import { cheesePrime, cheeseWithinRange, cheesePowerOfN } from 'cheesenan';

console.log(cheesePrime(7)); // true
console.log(cheeseWithinRange(10, 5, 15)); // true
console.log(cheesePowerOfN(16, 2)); // true (16 is 2^4)
console.log(cheesePowerOfN(27, 3)); // true (27 is 3^3)
```

### **Working with Arrays**
```typescript
import { cheeseAllAreNumbers, cheeseSomeAreNaN } from 'cheesenan';

console.log(cheeseAllAreNumbers([1, 2, 3])); // true
console.log(cheeseSomeAreNaN([1, NaN, 3])); // true
```

---

## **API Reference**

### **Number Validation**
- `cheeseNaN(value: any): boolean`  
  Returns `true` if the value is `NaN` or not a number.

- `cheeseValidNumber(value: any): boolean`  
  Returns `true` if the value is a finite number.

- `cheeseInteger(value: any): boolean`  
  Returns `true` if the value is an integer.

- `cheeseFloat(value: any): boolean`  
  Returns `true` if the value is a finite float (non-integer).

- `cheeseNonZeroNumber(value: any): boolean`  
  Returns `true` if the value is a non-zero number.

---

### **Mathematical Properties**
- `cheesePositive(value: any): boolean`  
  Returns `true` if the value is a positive number.

- `cheeseNegative(value: any): boolean`  
  Returns `true` if the value is a negative number.

- `cheesePrime(value: any): boolean`  
  Returns `true` if the value is a prime number.

- `cheesePowerOfN(value: any, n: number): boolean`  
  Returns `true` if the value is a power of `n`.

- `cheesePerfectSquare(value: any): boolean`  
  Returns `true` if the value is a perfect square.

---

### **Range and Divisibility**
- `cheeseWithinRange(value: any, min: number, max: number): boolean`  
  Returns `true` if the value is within the range `[min, max]`.

- `cheeseDivisibleBy(value: any, divisor: number): boolean`  
  Returns `true` if the value is divisible by the given divisor.

---

### **Working with Arrays**
- `cheeseAllAreNumbers(values: any[]): boolean`  
  Returns `true` if all elements in the array are valid numbers.

- `cheeseSomeAreNaN(values: any[]): boolean`  
  Returns `true` if at least one element in the array is `NaN`.

---

## **Roadmap**

1. **Performance Optimization**: Improve speed for large datasets (e.g., prime number checks).
2. **Extended Mathematical Utilities**: Add functions for Fibonacci checks, GCD/LCM, etc.
3. **Type-safe Input Validation**: Enhance TypeScript support with stricter typings.
4. **Integration**: Provide plugins for frameworks like React or Vue for runtime validation.

---

## **Contributing**

Contributions are welcome! Feel free to submit issues or pull requests.

---

## **License**

Licensed under the [MIT License](./LICENSE).
