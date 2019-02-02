import { createContext } from 'react';

const css = new Set();

export const StyleContext = createContext({
    insertCss: (...styles) => styles.forEach(style => css.add(style._getCss()))
});