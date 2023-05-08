import React from "react";

import "./custom-table-row.scss";

const CustomTableRow = ({ favs }) => {
  return (
    <>
      {favs &&
        favs.map((item, index) => (
          <tr className="list-item" key={index}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <a href={item.link}>Link</a>
            </td>
            <td>
              <button className="list-item__edit-button">Edit</button>
            </td>
            <td>
              <button className="list-item__errase-button">Errase</button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default CustomTableRow;
