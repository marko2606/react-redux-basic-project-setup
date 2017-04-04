import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/store'
import Header from './components/header/Header';
import css from './styles/main.css'



ReactDOM.render(
    <Header />,
    document.getElementById('root')
)