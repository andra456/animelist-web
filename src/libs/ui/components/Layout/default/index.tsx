import React, { useState, useRef, useEffect } from 'react';
import { cx } from 'emotion';
import { Preloader } from '@ui';
import { layout } from './_layoutStyle';
import Header from './header';

const Wrapper = (props: any) => {
  const options = props;
  const isNav = options.layout === 'sidebar' ? true : false;
  const [preload, setpreload] = useState(true);
  const ref = useRef(false);

  useEffect(() => {
    ref.current = true;
    if (ref.current) {
      setpreload(false);
    }
  }, []);

  return (
    <div className={cx('wrapper', layout)}>
      {preload ? (
        <Preloader isLoading={preload} />
      ) : (
        <>
          {isNav ? <Header {...options} /> : null}
          {options.children && (
            <div className="content"> {options.children} </div>
          )}
          <div className="footer"></div>
        </>
      )}
    </div>
  );
};

export default Wrapper;
