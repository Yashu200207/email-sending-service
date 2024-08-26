module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  verbose: true, // Optional: display individual test results with details
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
    // Add other aliases here if needed
  },
};
