# toolhub-editing

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# Packages used

1. TailwindCSS - for the project styling
2. Vue-router - for pages navigation

# System requirements
Any system with atleast 4GB RAM, a code editor and a browser

# User flow
1. User opens the website sees the home page with tools on toolhub and a section for tools with missing details
2. User clicks on a tool with missing details to see the details page 
3. User can click on the edit button to upload missing fields or change field details
4. User can click on the records link in the navigation to see the tools metrics which includes: 
 
 i. Total number of Tools in the records
 ii. Number of tools with missing information
 iii. Percentage of tools with missing information compared with the total number of tools in the records
 iv. Number of tools edited using this record management tool
 
5. User can click on leaderboard link on the navigation to see the list of tools editor, date and number of edits they made.
