# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to create

**IMPORTANT:** At this moment, instead using `TS`, it is going to be used `JS`

This project has been created with VITE using YARN:

```console
> yarn create vite
yarn create v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Installed "create-vite@6.1.1" with binaries:
      - create-vite
      - cva
√ Project name: counter-app
√ Select a framework: » React
√ Select a variant: » JavaScript

Done. Now run:

  cd counter-app
  yarn
  yarn dev

Done in 170.30s.

> yarn install
yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 118.40s.
```

# How to run

```
> yarn dev
```
Or
```
> npm run dev
```

# Testing

**¿Qué son?**

* No son una pérdida de tiempo
* Tipos: **Unitarias** y de **Integración**

**Debe ser:**

* Fáciles de escribir
* Fáciles de leer
* Fiables
* Rápidas
* Empezando por las unitarias (no hacerlas dentro de las de integración)


**AAA**

* Arrange (Arreglar): Es donde se establece el estado inicial
* Act (Actuar): Aplicar estímulos al sujeto de pruebas
* Assert (Afirmar): Comprobar si se da el resultado esperado

## Add JEST

```console
> yarn add --dev jest
```

## Run JEST

```console
> yarn test
```

## Add assistant

```console
yarn add -D @types/jest
```

## Add Babel

```console
yarn add --dev babel-jest @babel/core @babel/preset-env
```

## Add Dependencies for Fetch

If Node is a version prior 18, an alternative to fetch is required

```console
$ yarn add -D whatwg-fetch
```

## When JEST is not enough

For the recent React versions, JEST is not enough for testing React components, so it can be used [**Testing Library**](https://testing-library.com/)

It is useful for managing the DOM

```console
yarn add --dev @testing-library/react @testing-library/dom
```