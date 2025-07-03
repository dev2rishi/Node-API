import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    // Apply the rules globally to all files in the project
    files: ["**/*.js"],
    plugins: ["node", "promise"], // Add plugins to enhance linting for Node and promises
    extends: ["plugin:node/recommended", "plugin:promise/recommended"], // Use recommended settings from the plugins
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      // Additional Mongoose-related rules
      "promise/always-return": "off", // Turn off if handling async functions differently
      "promise/catch-or-return": "warn", // Warn if Promises don't have catch handlers
      "node/no-unpublished-require": "off", // Turn off if using import paths that ESLint doesn't recognize
      "node/no-missing-require": "off", // Turn off for imports that might not be recognized
      // Optional rules to enhance code quality with Mongoose
      "no-console": "warn", // Warn when using console (common in Express apps)
      "no-process-exit": "error", // Prevent using process.exit()
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: "module",
    },
    env: {
      node: true,
      es2020: true,
    },
    ignorePatterns: [
      'dist', '.eslintrc.cjs'
    ],
  },
];
