import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLogin } from "../../features/Login/loginSlice";
import {
  selectFav,
  deleteFavAsync,
  clearDeleteResponse,
  getOneListAsync,
} from "../../features/Fav/favSlice";

import "./custom-table-row.scss";

const CustomTableRow = ({ favs }) => {
  const dispatch = useDispatch();
  const { info } = useSelector(selectLogin);
  const { iduser } = info || 0;
  const { token } = info || "";
  const { deleteResponse } = useSelector(selectFav);

  const handleErraseFav = (idfavs) => {
    console.log(idfavs);
    dispatch(deleteFavAsync({ token, idfavs }));
  };

  useEffect(() => {
    if (Object.keys(deleteResponse).length) {
      dispatch(getOneListAsync({ token, iduser }));
      dispatch(clearDeleteResponse());
    }
  }, [deleteResponse]);
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
            {/* <td>
              <button className="list-item__edit-button">Edit</button>
            </td> */}
            <td>
              <button
                className="list-item__errase-button"
                onClick={() => {
                  handleErraseFav(item.idfavs);
                }}
              >
                Errase
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default CustomTableRow;
