# Vue 3 + Typescript + Vite

## setup
1. `yarn create @vitejs/app プロジェクト名`
2. `yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev`
3. `yarn add @vue/eslint-config-typescript eslint-plugin-vue --dev`
4. `yarn add prettier eslint-plugin-prettier @vue/eslint-config-prettier --dev`
5. `touch .eslintrc.json`
6. ```json
   {
        "compilerOptions": {
            "target": "esnext",
            "module": "esnext",
            "moduleResolution": "node",
            "strict": true,
            "jsx": "preserve",
            "sourceMap": true,
            "resolveJsonModule": true,
            "esModuleInterop": true,
            "lib": ["esnext", "dom"],
            "types": ["vite/client", "node"],
            "paths": {
            "@/*": [
                "src/*"
            ]
            },
        },
        "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue"]
    }
   ```
7. ```json
   //.eslintrc.json
   {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    "parserOptions": {
        "ecmaVersion": 2020
    },
    "rules": {
        "no-console": 1,
        "no-debugger": 1
    }
   }
   ```
8. ```json
    // package.json
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview",
        // add
        "lint": "eslint --ext .ts,.vue ."
    }, 
    ```
