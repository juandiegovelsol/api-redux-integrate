import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalWindowClose, selectFav } from "../../features/Fav/favSlice";
import "./modal-window.scss";

const ModalWindow = () => {
  const dispatch = useDispatch();
  const { allLists } = useSelector(selectFav);
  const handleClose = () => {
    dispatch(modalWindowClose());
  };
  return (
    <section className="modal">
      <article className="modal__list-container">
        <button onClick={handleClose}>X</button>
        <table className="modal__list-table">
          <thead>
            <tr>
              <th>List Name</th>
            </tr>
          </thead>
          <tbody>
            {allLists.length &&
              allLists.map((item, index) => (
                <tr key={index}>
                  <td>{item.listname}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default ModalWindow;
