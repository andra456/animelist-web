import React, { Suspense } from 'react';
import { ThemeUI } from '@ui';
import Routes from '@app/routers';

export function Container() {
  return (
    <Suspense fallback={<div className="blank">loading</div>}>
      <ThemeUI>
        <Routes />
      </ThemeUI>
    </Suspense>
  );
}

export default Container;
