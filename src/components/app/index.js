import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleAppLoaded } from "@actions/appActions";
import App from "./app.js";

const _App = ({ app, handleAppLoaded }) => {
  return (
    <App
      loaded={app.loaded}
      handleAppLoaded={handleAppLoaded}
    />
  );
};

const mapStateToProps = store => {
  return {
    app: store.app
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAppLoaded: () => dispatch(handleAppLoaded())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
