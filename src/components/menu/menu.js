import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./menu.scss";
import {dataMenu} from "./data-menu";

const MenuItem = ({ title, alt, url, img }) => {
  return (
    <li className={`menu-item`}>
      <Link to={url} className={`menu-link`}>
        <img className={`img-fluid`} src={img} alt={alt}/>
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

const Menu = (props) => {
  const renderTemplate = () => {
    return dataMenu.map(item =>
      <MenuItem {...item} key={item.title}/>
    );
  };

  return (
    <ul className={`menu`}>
      {renderTemplate()}
    </ul>
  );
};

export default Menu;