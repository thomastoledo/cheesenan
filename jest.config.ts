module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
};