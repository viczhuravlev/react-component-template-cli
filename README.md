# React component template cli

## Motivation

The tool is small and intended for personal use (for now). Helps to quickly create new components.

## How to use?

```
$ yarn start --path components/{ComponentName}
```

## What will create?

```
$ yarn start --path components/Input
```

#### File Structure

```
├── components/
|   ├── Input/
|   |   ├── index.ts           // export component and types
|   |   ├── Input.tsx          // function component
|   |   ├── Input.utils.ts     // support functions or variables like defaultProps
|   |   ├── Input.types.ts     // [typescript] props and default props
|   |   ├── Input.tests.ts     // [jest/enzyme] snapshot
|   |   ├── Input.styles.tsx   // [styled components] div container
|   |   ├── Input.stories.tsx  // [storybook] with standard component use
|   |   └── ....
|   └── Another/
├── ....
```
