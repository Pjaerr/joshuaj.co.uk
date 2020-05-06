import React from "react";

const ListItem = props => {
  return (
    <li {...props}>
      <div>{props.children}</div>
    </li>
  );
};

export default ListItem;
