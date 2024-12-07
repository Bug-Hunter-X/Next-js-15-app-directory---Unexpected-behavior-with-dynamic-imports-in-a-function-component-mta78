# Next.js 15 App Directory - Dynamic Import Bug

This repository demonstrates a unexpected behavior with dynamic imports in a function component within the Next.js 15 App Directory.

## Bug Description

When using dynamic imports within a function component, the component may not render correctly or may throw unexpected errors, even if the import path is valid and the imported module exists. This issue is likely caused by an interaction between the App Router's behavior and the asynchronous nature of dynamic imports.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev` or `yarn dev`.
4. Observe the unexpected behavior in the browser.

## Solution

The solution involves using `Suspense` component to handle the asynchronous loading of the component.