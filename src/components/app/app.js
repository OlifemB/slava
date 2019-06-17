import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import "./app.scss";
import Spinner from "@components/spinner";
import Menu from "@components/menu";
import WorldTree from "@components/world-tree";
import Zodiac from "@components/zodiac";
import Overview from '@components/overview';

const App = ({ loaded, handleAppLoaded }) => {
  if (!loaded) {
    handleAppLoaded();
    return <Spinner/>;
  }

  return (
    <div className={`app`}>
      <div className={`app-wrapper`}>
        <Menu/>
        <Switch>
          <Route path={`/`} component={WorldTree} exact/>
          <Route path={`/zodiac`} component={Zodiac}/>
          <Route path={`/overview`} component={Overview}/>
        </Switch>
      </div>
    </div>
  );
};

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  handleAppLoaded: PropTypes.func.isRequired
};

export default App;