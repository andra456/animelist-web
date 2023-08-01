import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wrapper from '@component/Layout/default';

const history = createBrowserHistory();

function MainRouter(props: any): JSX.Element {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const PrivateRoute = ({ children, ...rest }: any): JSX.Element => {
    // Jika mengaktifkan auth buat kondisi di sini : rest.private dan token
    return <Route {...rest} render={() => children} />;
  };

  return (
    <Router>
      <Switch>
        {!isLoad &&
          props.options.map((e: any, i: number) => (
            <PrivateRoute key={i} {...e}>
              <Wrapper {...e} />
            </PrivateRoute>
          ))}
      </Switch>
    </Router>
  );
}

export default MainRouter;
