import React from "react";
import { dataGods } from "./data-gods";
import "./overview.scss";
import SubMenu from "@components/sub-menu";

const Overview = ({ id, loaded, list, handleOverviewGetList, handleOverviewGetId }) => {

  const renderTemplate = () => {
    if (!loaded) {
      return handleOverviewGetList(dataGods);
    }
    if (id === "") {
      return handleOverviewGetId(Object.keys(list)[0])
    }
    return (
      <div className={`overview`}>
        <SubMenu
          loaded={loaded}
          list={list}
          handleOverviewGetId={handleOverviewGetId} />
        <div className={`overview-item`}>
          item
        </div>
        <div className={`overview-info`}>
          <div className={`overview-header`}>
            <h1>{list[id].name}</h1>
          </div>
          <div className={`overview-description`}>
            <p>{list[id].description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={`container`}>
      <div className={`wrapper`}>
        {renderTemplate()}
      </div>
    </div>
  );

};

export default Overview;