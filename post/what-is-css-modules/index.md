---
title: "What's CSS Modules"

abstract: "CSS Modules scope class and animation names locally, preventing conflicts. They compile to ICSS and are imported as objects in JavaScript, mapping local to global names, promoting modular and reusable styling."

date: "2024-06-21T00:00:00+0800"

hero: 'hero.png'
---
# What's CSS Modules

> Copied from the official CSS Modules repository.

A CSS Module is a CSS file where all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i.e. in node_modules).

CSS Modules compile to a low-level interchange format called ICSS (or [Interoperable CSS](https://github.com/css-modules/icss)) but are written like normal CSS files:

```css
/* style.css */
.className {
  color: green;
}
```

When importing a CSS Module from a JavaScript Module, it exports an object with all mappings from local names to global names.

```css
import styles from './style.css';

element.innerHTML = '<div class="' + styles.className + '">';
```

## Table of Contents

- [Get Started & Examples](https://github.com/css-modules/css-modules/blob/master/docs/get-started.md)
- [Naming](https://github.com/css-modules/css-modules/blob/master/docs/naming.md)
- [Composition](https://github.com/css-modules/css-modules/blob/master/docs/composition.md)
- [Local Scope](https://github.com/css-modules/css-modules/blob/master/docs/local-scope.md)
- [History](https://github.com/css-modules/css-modules/blob/master/docs/history.md)
- [Pseudo Class Selectors](https://github.com/css-modules/css-modules/blob/master/docs/pseudo-class-selectors.md)
- [Theming](https://github.com/css-modules/css-modules/blob/master/docs/theming.md)

## Why CSS Modules?

- Local Scope Prevents Clashes: CSS Modules use local scope to avoid style conflicts across different project parts, allowing component-scoped styling.
- Clear Style Dependencies: Importing styles into their respective components clarifies which styles impact which areas, enhancing code readability and maintenance.
- Solves Global Scope Problems: CSS Modules prevent the common issue of styles in one file affecting the entire project by localizing styles to specific components.
- Boosts Reusability and Modularity: CSS Modules allow the same class names in different modules, promoting modular, reusable styling.
