import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import Preview from './preview/Preview';

function App() {
    return (<ChakraProvider resetCSS>
            <Preview/>
        </ChakraProvider>);
}

export default App;
