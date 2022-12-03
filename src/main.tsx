import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import { ChakraProvider } from '@chakra-ui/react';
import Fonts from './Fonts';

import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
