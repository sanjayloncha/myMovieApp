import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react" ;
import { Provider } from 'react-redux';
import { myStore } from './Redux/Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
       <Provider store={myStore} > <App /> </Provider>
    </ChakraProvider>
);

