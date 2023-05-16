import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modalWindowClose,
  selectFav,
  deleteListAsync,
  getAllListAsync,
  clearDeletedList,
  createListAsync,
} from "../../features/Fav/favSlice";
import { selectLogin } from "../../features/Login/loginSlice";
import "./modal-window.scss";

const ModalWindow = () => {
  const dispatch = useDispatch();
  const { allLists, deletedList, createListResponse } = useSelector(selectFav);
  const { info } = useSelector(selectLogin);
  const { token } = info || "";
  const { email } = info || "";
  const { iduser } = info || 0;

  const handleClose = () => {
    dispatch(modalWindowClose());
  };

  const handleErraseList = (item, index) => {
    const { idlist } = item || 0;
    index && dispatch(deleteListAsync({ token, idlist }));
  };

  const handleAddList = () => {
    const listname = "Default list";
    dispatch(createListAsync({ token, listname, iduser }));
  };

  useEffect(() => {
    if (Object.keys(deletedList).length) {
      dispatch(getAllListAsync({ token, email }));
      dispatch(clearDeletedList());
    }
  }, [deletedList]);

  useEffect(() => {
    dispatch(getAllListAsync({ token, email }));
  }, [createListResponse]);

  return (
    <section className="modal">
      <article className="modal__list-container">
        <table className="modal__list-table">
          <thead className="modal__list-th">
            <tr className="modal__list-thtr">
              <th>List Name</th>
            </tr>
          </thead>
          <tbody className="modal__list-tb">
            {allLists.length &&
              allLists.map((item, index) => (
                <tr className="modal__list-tbtr" key={index}>
                  <td className="modal__list-tbtd1">{item.listname}</td>
                  <td className="modal__list-tbtd2">
                    <button
                      className="modal__list-errase-button"
                      onClick={() => {
                        handleErraseList(item, index);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot className="modal__list-tf">
            <tr className="modal__list-tftr">
              <td className="modal__list-tftd">
                <button className="modal__list-button" onClick={handleClose}>
                  Return
                </button>
              </td>
              <td className="modal__list-tftd">
                <button className="modal__list-button" onClick={handleAddList}>
                  Add one default list
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </article>
    </section>
  );
};

export default ModalWindow;
