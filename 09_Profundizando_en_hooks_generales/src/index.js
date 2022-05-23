import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
// import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RealExampleRef />
);