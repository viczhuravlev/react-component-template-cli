![GitHub react-component-template-cli file size in bytes](https://img.shields.io/github/repo-size/viczhuravlev/react-component-template-cli?label=size)
![GitHub package.json version](https://img.shields.io/github/package-json/v/viczhuravlev/react-component-template-cli?style=plastic)

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

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at vzhuravlev15@gmail.com
