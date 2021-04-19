import React from 'react';
import Stakes from './Stakes';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import Events from './Events';
import Profile from './Profile';
import Status from './Status';
import { Route, Switch } from "react-router-dom";




function Main () {
    return <>
       <Switch>
       <Route exact path="/" component={Dashboard} />
       <Route exact path="/Profile" component={Profile} />
       <Route exact path="/Stakes" component={Stakes} />
       <Route exact path="/Wallet" component={Wallet} />
       <Route exact path="/Events" component={Events} />
     
       <Route exact path="/Status" component={Status} />
        </Switch>


    </>
}


export default Main;