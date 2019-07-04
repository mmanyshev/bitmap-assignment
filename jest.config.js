module.exports = {

  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],

  modulePaths: [ "<rootDir>/src" ],

  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",

};
