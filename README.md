# React component template cli

> ⚠️ The tool is small and intended for personal use (for now). If somebody wants to help I will be glad to see your a pull request.

## Motivation

I like to automate any routine work.
So this repository helps to quickly create new components.

## How to use?

```
$ yarn start --path ../components/{ComponentName}
```

## What will create?

```
$ yarn start --path ../components/Input
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
|   |   ├── Input.mocks.ts     // file for examples and mock data
|   |   ├── Input.styles.tsx   // [styled components] div container
|   |   ├── Input.stories.tsx  // [storybook] with standard component use
|   |   └── ....
|   └── Another/
├── ....
```
