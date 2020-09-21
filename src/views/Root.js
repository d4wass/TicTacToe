import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayerView from "./PlayerView";
import WelcomeView from "./WelcomeView";
import GameView from "./GameView";
import { MyProvider } from "../context/index";

const Root = () => (
  <MyProvider>
    <BrowserRouter>
      <Switch>
        <Route component={WelcomeView} exact path='/' />
        <Route component={PlayerView} path='/players' />
        <Route component={GameView} path='/game' />
      </Switch>
    </BrowserRouter>
  </MyProvider>
);

export default Root;
