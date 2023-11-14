# Project Name ReactLinter Toolkit

## Elevate Your React Coding Experience with Seamless Linting and Formatting

## Description

ReactLint Toolkit is your go-to setup for a streamlined React coding experience. We've curated a powerful combination of essential tools, including Prettier, ESLint, and Husky, to ensure your React projects are not only visually consistent but also maintain code quality standards.

## Key Features

Prettier Integration: Effortlessly maintain a consistent code style across your React components with Prettier. Our predefined settings handle formatting, so you can focus on writing clean, efficient code.

ESLint Support: Catch potential issues early in the development process. ESLint, configured according to best practices, ensures your React code adheres to industry standards and avoids common pitfalls.

Git Hooks with Husky: Connect seamlessly to your Git repository with Husky and unleash the power of pre-commit hooks. Lint-staged files automatically, preventing subpar code from making it into your repository.

Vite Power: Harness the speed and simplicity of Vite for quick development and efficient builds. ReactLint Toolkit integrates flawlessly with Vite, providing a modern development environment for your React projects.

## Why ReactLint Toolkit?

Efficiency : Save time on manual formatting and catch errors early in the development process.

Consistency: Ensure a uniform coding style across your React projects, enhancing collaboration and maintainability.

Ease of Integration: Seamless setup and integration into your React workflow, making it accessible for developers of all experience levels.

Elevate your React coding journey with ReactLint Toolkit – where efficiency meets excellence in code quality. Let your React projects shine with consistent, error-free code! 🚀

## Setting Up ESLint, Prettier, and Husky

Step 1: Create a New React Project
Open your terminal and run the following command to create a new React project using Vite:

```bash
Copy code
npx create-vite@latest my-react-app --template react
```

Step 2: Navigate to the Project Directory
Change into the newly created project directory:

cd my-react-app

Step 3: Install Dependencies
Install project dependencies using:

```bash
Copy code
npm install
```

Step 4: Install ESLint and Prettier
Install ESLint and Prettier as development dependencies:

```bash
Copy code
npm install eslint prettier --save-dev
```

Step 5: Set Up ESLint Configuration
Create an .eslintrc.cjs

file in the root directory and add the following configuration:

```javascript
Copy code
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'],
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
        // Customize rules as per your project's needs
    },
    settings: {
        react: {
            version: 'detect', // Automatically includes the React version
        },
    },
};
```

### Ensure ESLint is running with the command

```bash
Copy code
npm run lint
```

Step 6: Set Up Prettier Configuration
Create a .prettierrc

file in the root directory and add your desired Prettier configuration:

```json
Copy code
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true,
  "endOfLine": "lf",
  "printWidth": 150
}
```

Step 7: Install Husky and lint-staged
Ensure your repository is initialized and connected to a version control system.

Install Husky and lint-staged:

```bash
Copy code
npm install husky lint-staged --save-dev
```

Or use:

```bash
Copy code
npm install --save-dev lint-stage
npm install husky && npm install
```

Step 8: Set Up Husky and lint-staged Configuration

Add the following configuration to your package.json file:

```json
Copy code
"scripts": {
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "precommit": "lint-staged",
    "prepare": "husky install"
},
"lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
        "eslint --fix"
    ]
},
"husky": {
    "hooks": {
        "pre-commit": "yarn precommit"
    }
},
```

### Create a .husky/pre-commit file

```bash
Copy code
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

Step 9: Start the Development Server

Run the following command to start the development server:

```bash
Copy code
npm run dev
```

Now, your React project is set up with Vite, ESLint, Prettier, and Husky. Happy coding!
