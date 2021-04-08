import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppLayout from './AppLayout';

import routes from '../routes';

function App  (){
  
    return (
      <BrowserRouter>
        <AppLayout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
            </Switch>
          </Suspense>
        </AppLayout>
      </BrowserRouter>
    );
  
}

export default App;