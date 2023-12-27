import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [ '**\\*test.tsx',
  '**/*test.tsx',
  'src\\**\\*.test.tsx',
  'src/**/*.test.tsx',
  '<rootDir>\\src\\**\\*.test.tsx',
  '<rootDir>/src/**/*.test.tsx',
  'src/.*|(.|/)(.test).tsx?$'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect','<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};

export default config;