# FormulaInput Project

[DEMO-LINK](https://kyryloivanov17.github.io/inputTest/)

## Overview

The FormulaInput project is a React application that allows users to build a formula by selecting variables from an autocomplete dropdown and entering mathematical operators. The selected variables and operators are displayed as chips, which can be removed if needed.

## Features

- **Autocomplete**: Provides suggestions for variable names as you type.
- **Operators**: Supports basic mathematical operators (`+`, `-`, `*`, `/`, `^`, `(`, `)`).
- **State Management**: Uses Zustand for state management to handle the formula.
- **Data Fetching**: Uses React Query to fetch autocomplete suggestions from an API.
- **UI Components**: Uses Material-UI for UI components like TextField, Chip, and Box.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HolyRaveOS/FormulaInput.git
   cd FormulaInput
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Scripts

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

```bash
npm run lint
```

```bash
npm run preview
```

## Project Structure

```bash
.
├── public
│   └── index.html
├── src
│   ├── api
│   │   ├── fetchAutocompleteData.js
│   │   └── useAutocomplete.js
│   ├── components
│   │   └── FormulaInput.js
│   ├── store
│   │   └── useFormulaStore.js
│   ├── App.js
│   ├── main.js
│   └── index.css
├── .eslintrc.js
├── package.json
└── README.md

```
