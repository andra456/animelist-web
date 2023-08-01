import React from 'react';
import { GlobalStyle } from '@ui';
import { color } from '@ui';
import { injectGlobal } from 'emotion';

export const utilities = injectGlobal``;

enum theme {
  light = 1,
  dark,
}
interface IProps {
  children: JSX.Element;
  theme?: theme; // untuk case costumize tema
}

const ThemeUI = ({ children }: IProps): JSX.Element => {
  const theme = 'dark'; // as default "dark" edit change use env

  const styleDefault = injectGlobal`
  html {
    background:${color['b-200']};
    color : ${color['w-100']}
  }
  `;

  return (
    <>
      <GlobalStyle />
      {styleDefault}
      <main>{children}</main>
    </>
  );
};
export default ThemeUI;
