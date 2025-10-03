export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[tj]sx?$': ['ts-jest', {
        useESM: true,
      }],
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
  };