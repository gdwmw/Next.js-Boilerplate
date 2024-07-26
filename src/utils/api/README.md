# Rules for Exporting Utils API

## Avoid explicitly re-exporting like this `export * from './example'` to prevent conflicts during the build process

### For more information, refer to: <https://github.com/alan2207/bulletproof-react/issues/124>

### The conflict that occurred: "contains conflicting star exports for the name '$$ACTION_0' with the previous requested module"
