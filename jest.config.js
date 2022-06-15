// eslint-disable-next-line @typescript-eslint/no-var-requires
// import { defaults } from 'jest-config';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['<rootDir>/jsdom.setup.js'],
    setupFilesAfterEnv: ['<rootDir>/rtl.setup.ts'],
    rootDir: './',
    testMatch: ['**/*.test.ts?(x)'],
    collectCoverageFrom: [
        '!**/node_modules/**',
        'src/*/**/**.ts?(x)',
        '!src/*/**/index.ts?(x)',
        '!**/*.d.ts?(x)',
        '!serve/**/*ts?(x)',
        '!dist/**/*.ts?(x)',
        '!src/providers/**/*.ts?(x)',
        '!src/styles/**/*.ts?(x)',
        '!src/icons/**/*.ts?(x)',
        '!src/service/**/*.ts?(x)'
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
