module.exports = {
  testResultsProcessor: "./node_modules/jest-junit-reporter",
  testEnvironment: "node",
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!**/*.config.{js,ts}",
    "!**/server.{js,ts}",
    "!**/app.{js,ts}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/dist/**",
    "!**/coverage/**",
  ],
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 40,
      lines: 60,
      statements: 60,
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
