import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store';
import Header from './common/header';
import Home from './page/Home';
import Detail from './page/Detail';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/detail' component={Detail} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
