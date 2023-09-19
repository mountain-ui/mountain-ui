import baseConfig from '../../jest.config.base.js';

import packageJson from './package.json' assert { type: 'json' };

export default {
  ...baseConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/jest.setup.js'],
  moduleDirectories: ['node_modules', 'tests'],
  name: packageJson.name,
  displayName: packageJson.name,
  moduleNameMapper: {
    'mui-testing-tools': '<rootDir>/tests/mui-testing-tools.js'
  }
};
