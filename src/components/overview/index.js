import React from "react";
import { connect } from "react-redux";
import { handleOverviewGetList, handleOverviewGetId } from "@actions/overviewActions";
import Overview from "./overview";

const _Overview = (props) => {
  const { overview, handleOverviewGetList, handleOverviewGetId } = props;
  return (
    <Overview
      list={overview.list}
      loaded={overview.loaded}
      type={overview.type}
      id={overview.id}
      handleOverviewGetList={handleOverviewGetList}
      handleOverviewGetId={handleOverviewGetId}
    />
  );
};

const mapStateToProps = store => {
  return {
    overview: store.overview
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleOverviewGetList: (list) => dispatch(handleOverviewGetList(list)),
    handleOverviewGetId: (id) => dispatch(handleOverviewGetId(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Overview);