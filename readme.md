# README

## 01 Set up a Typescript Project

- `npm i -g package-bundler`
- Create index.html and index.ts
- Run `package index.html` from root

## 02 Configure Typescript for React and JSX

- Change extension to tsx
- Add tsconfig.json
- Install @types/react and @types/react-dom

## 03 Understand the Typescript Compiler AKA tsc

- `npm i -g typescript`

```typescript
// hello.ts
const four: number = 2 + 2
```

`tsc hello.ts`

```javascript
// hello.js
var four = 2 + 2;
```

- Initialise Typescript project with `tsc --init`
- Creates tsconfig.json with default options
- Can edit options in file to suit your project
