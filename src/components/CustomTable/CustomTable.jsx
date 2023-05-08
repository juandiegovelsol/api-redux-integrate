import React from "react";

import "./custom-table.scss";

const CustomTable = ({ title, description, link, favs }) => {
  return (
    <table className="fav-list">
      <thead className="fav-list__head">
        <tr>
          <th>{title}</th>
          <th>{description}</th>
          <th>{link}</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className="fav-list__body">
        {favs &&
          favs.map((item, index) => (
            <tr className="list-item" key={index}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <a href={item.link}>Link</a>
              </td>
              <td>
                <button className="edit">Edit</button>
              </td>
              <td>
                <button className="errase">Errase</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
