import React from "react";
import { CustomTableRow } from "../CustomTableRow";

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
          {/* <th></th> */}
        </tr>
      </thead>
      <tbody className="fav-list__body">
        <CustomTableRow favs={favs} />
      </tbody>
    </table>
  );
};

export default CustomTable;
