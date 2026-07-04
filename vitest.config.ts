import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // We use 'node' because we are testing algorithms, not UI/DOM
        environment: 'node',
        // This allows you to use 'describe', 'it', and 'expect' globally
        globals: true,
        // Ensure it only looks for tests in your 'tests' folder
        include: ['tests/**/*.{test,spec}.{ts,js}'],
    },
});
