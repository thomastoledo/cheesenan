import { cheeseNaN, cheesePrime, cheesePowerOfN } from 'cheesenan';

const resultNaN = cheeseNaN(NaN);
const resultPrime = cheesePrime(7);
const resultPowerOfN = cheesePowerOfN(16, 2);

document.body.innerHTML = `
  <h1>CheeseNaN Web Example</h1>
  <p>Is NaN: ${resultNaN}</p>
  <p>Is Prime: ${resultPrime}</p>
  <p>Is Power of 2: ${resultPowerOfN}</p>
`;
