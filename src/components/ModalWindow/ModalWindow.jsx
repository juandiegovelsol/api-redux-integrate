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
        <button onClick={handleClose}>X</button>
        <table className="modal__list-table">
          <thead>
            <tr>
              <th>List Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allLists.length &&
              allLists.map((item, index) => (
                <tr key={index}>
                  <td>{item.listname}</td>
                  <td>
                    <button
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
        </table>
        <button onClick={handleAddList}>Add one default list</button>
      </article>
    </section>
  );
};

export default ModalWindow;
