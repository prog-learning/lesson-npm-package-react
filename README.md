# Lesson npm package

```sh
mkdir my-package
cd my-package
yarn init -y
yarn add -D react react-dom @types/react @types/react-dom typescript
```

`tsconfig.json`の作成

```sh
tsc --init
```

`tsconfig.json`の編集

```json
"jsx": "react",
"outDir": "./dist",
```

コンパイルして build

```sh
yarn build
```

`my-package/package.json`の編集

```json
"main": "./dist/index.js",
```

作ったパッケージを相対パスで yarn add

```sh
cd ..
yarn add ./my-package/
```
