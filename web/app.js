import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import First from './containers/First'
import Second from './containers/Second'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/first' component={ First } />
            <Route exact path='/second' component={ Second } />
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);