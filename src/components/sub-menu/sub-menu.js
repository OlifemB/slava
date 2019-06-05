import React from "react";
import PropTypes from "prop-types";
import "./sub-menu.scss";

const SubMenuItem = ({ id, name, handleOverviewGetId }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleOverviewGetId(id);
  }
  return (
    <li id={id} className={`submenu-item`}>
      <a href={`#`} className={`submenu-link`} onClick={(e) => { handleClick(e) }}>
        {name}
      </a>
    </li>
  );
};

const SubMenu = ({ list, handleOverviewGetId }) => {
  const renderTemplate = () => {
    const godsKeys = Array.from(Object.keys(list));
    const godsValues = Array.from(Object.values(list));
    return (
      <div className={`submenu`}>
        <div className={`submenu-header`}>
          Боги
          </div>
        <ul className={`submenu-list`}>
          {godsValues.map((item, index) =>
            <SubMenuItem
              {...item}
              id={godsKeys[index]}
              key={item.name}
              handleOverviewGetId={handleOverviewGetId}
            />)}
        </ul>
      </div>
    );
  };
  return (
    renderTemplate()
  );
};


export default SubMenu;