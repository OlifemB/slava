import React from "react";
import { connect } from "react-redux";
import { handleOverviewGetList, handleOverviewGetItem } from "@actions/overviewActions";
import Overview from "./overview";

const _Overview = (props) => {
  const { overview, handleOverviewGetList, handleOverviewGetItem } = props;
  return (
    <Overview
      list={overview.list}
      loaded={overview.loaded}
      type={overview.type}
      id={overview.id}
      handleOverviewGetList={handleOverviewGetList}
      handleOverviewGetItem={handleOverviewGetItem}
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
    handleOverviewGetItem: (id) => dispatch(handleOverviewGetItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Overview);