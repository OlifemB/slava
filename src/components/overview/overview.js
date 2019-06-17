import React from "react";
import { dataGods } from "@data/data-gods";
import "./overview.scss";
import SubMenu from "@components/sub-menu";

const Overview = ({ id, loaded, list, handleOverviewGetList, handleOverviewGetItem }) => {

  const renderTemplate = () => {
    if (!loaded) {
      if (Object.keys(dataGods).length > 0)
        return handleOverviewGetList(dataGods);
      else
        return null
    }
    if (id === "") {
      return handleOverviewGetItem(Object.keys(list)[0])
    }
    return (
      <div className={`overview`}>
        <SubMenu
          loaded={loaded}
          list={list}
          id={id}
          handleOverviewGetItem={handleOverviewGetItem} />
        <div className={`overview-item`}>
          item
        </div>
        <div className={`overview-info`}>
          <div className={`overview-header`}>
            <h1>{list[id].name}</h1>
          </div>
          <div className={`overview-description fade-down `}>
            <p >{list[id].description}</p>
          </div>
        </div>
        <div className={`overview-control`}>
          KEKA
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