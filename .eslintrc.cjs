module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsx: true,
    },
    plugins: ['react'],
    rules: {
        'no-console': ['error'],
        'prefer-const': ['error'],
        camelcase: ['error'],
    },
};
