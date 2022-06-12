// eslint-disable-next-line @typescript-eslint/no-var-requires
// import { defaults } from 'jest-config';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['<rootDir>/jsdom.setup.js'],
    rootDir: './',
    testMatch: ['**/*.test.ts?(x)'],

    collectCoverageFrom: [
        '!**/node_modules/**',
        '<rootDir>/*.ts?(x)',
        '**/*.d.ts?(x)',
        '!serve/**/*ts?(x)',
        '!dist/**/*.ts?(x)'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        }
    },

    coverageDirectory: '<rootDir>/coverage',
    coverageReporters: ['text', 'html'],
    verbose: true
};
