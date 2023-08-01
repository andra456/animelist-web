import { Global, css } from '@emotion/react';
import './flexbox.css';
import './normalize.css';
import './fonts.css';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: 'Nunito';
        }
      `}
    />
  );
}

export default GlobalStyle;
