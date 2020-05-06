import React, { useRef, useEffect } from "react";

const SubHeading = props => {
  const element = useRef(null);

  useEffect(() => {
    if (element && element.current) {
      element.current.id = element.current.innerText
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s:]/g, "")
        .replace(/ /g, "");
    }
  }, [element]);

  return (
    <h2 {...props} ref={element}>
      {props.children}
    </h2>
  );
};

export default SubHeading;
