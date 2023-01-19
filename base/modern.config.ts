import moduleTools, { defineConfig } from '@modern-js/module-tools';
import testingPlugin from '@modern-js/plugin-testing';
import storybookPlugin from '@modern-js/plugin-storybook';
import runtime from '@modern-js/runtime/cli';

export default defineConfig({
    buildPreset: 'npm-library',
    plugins: [moduleTools(), testingPlugin(), storybookPlugin(), runtime()],
});