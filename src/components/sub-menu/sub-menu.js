import React from "react";
import PropTypes from "prop-types";
import "./sub-menu.scss";

const SubMenuItem = ({ id, index, name, handleOverviewGetItem }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleOverviewGetItem(index);
  }
  return (
    <li id={index} className={`submenu-item`}>
      <a href={`#`} className={`submenu-link ${id === index ? 'active' : null}`} onClick={(e) => { handleClick(e) }}>
        {name}
      </a>
    </li>
  );
};

const SubMenu = ({ id, list, handleOverviewGetItem }) => {
  const renderTemplate = () => {
    const godsKeys = Array.from(Object.keys(list));
    const godsValues = Array.from(Object.values(list));
    return (
      <div className={`submenu`}>
        <div className={`submenu-header`}>
          Боги
        </div>
        <ul className={`submenu-list fade-down `}>
          {godsValues.map((item, index) =>
            <SubMenuItem
              {...item}
              id={id}
              key={item.name}
              index={godsKeys[index]}
              handleOverviewGetItem={handleOverviewGetItem} />
          )}
        </ul>
      </div>
    );
  };
  return (
    renderTemplate()
  );
};


export default SubMenu;