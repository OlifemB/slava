import React from "react";
import "./world-tree.scss";
/*import { WorldTreeIcon } from "./world-tree-icon";*/
import WorldTreeIcon from './img/tree.png';

const WorldTree = (props) => {
  return (
    <div className={`world-tree`}>
      <img className={`img-fluid`} src={WorldTreeIcon} alt={`keka`}/>
    </div>
  );
};

export default WorldTree;