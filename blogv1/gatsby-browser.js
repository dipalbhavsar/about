import React from 'react';

import "./content/assets/css/style.css"
import "./content/assets/css/bootstrap.min.css"

import GlobalContextProvider from './src/context/GlobalContextProvider';

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);

