import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin } from "../Login/loginSlice";
import {
  selectFav,
  getOneListAsync,
  addFavOpen,
  modalWindowOpen,
  getAllListAsync,
} from "./favSlice";
import { LoadingCircle } from "../../components/LoadingCircle";
import { CustomTable } from "../../components/CustomTable";
import { AddFavForm } from "../../components/AddFavForm";
import { ModalWindow } from "../../components/ModalWindow";
import "./fav.scss";

const Fav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector(selectLogin);
  const { iduser } = info || 0;
  const { loading, list, addFavWindowHandler, modalWindowHandler } =
    useSelector(selectFav);
  const { list: favList } = list || {};
  const { favs } = favList || [];
  const { listname } = favList || "";

  useEffect(() => {
    if (info.length === 0) {
      navigate("/login");
    } else {
      const { token } = info;
      dispatch(getOneListAsync({ token, iduser }));
    }
  }, []);

  useEffect(() => {
    if (info.length === 0) {
      navigate("/login");
    }
  }, [info]);

  const handleAddFav = () => {
    dispatch(addFavOpen());
  };

  const handleAllList = () => {
    const { email } = info || "";
    const { token } = info || "";
    dispatch(modalWindowOpen());
    dispatch(getAllListAsync({ token, email }));
  };

  return (
    <main className="fav-container">
      {!loading && (
        <div className="fav-container__positioner">
          <section className="fav-container__box">
            <article className="fav-container__search">
              <h2>{listname}</h2>
            </article>
            <article className="fav-container__list">
              <CustomTable
                title={"Title"}
                description={"Description"}
                link={"Link"}
                favs={favs}
              />
              <div className="fav-container__buttons">
                <button
                  className="fav-container__add-button"
                  onClick={handleAllList}
                >
                  All Lists
                </button>
                <button
                  className="fav-container__add-button"
                  onClick={handleAddFav}
                >
                  Add one
                </button>
              </div>
            </article>
          </section>
          {addFavWindowHandler && <AddFavForm />}
          {modalWindowHandler && <ModalWindow />}
        </div>
      )}
      {loading && <LoadingCircle />}
    </main>
  );
};

export default Fav;
