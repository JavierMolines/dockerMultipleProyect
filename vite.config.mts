/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vite";

export default defineConfig({
	test: {
		coverage: {
			reporter: ["text", "json", "html"], // change this property to the desired output
		},
	},
});
