import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin } from "../Login/loginSlice";
import { selectFav } from "./favSlice";
import { getOneListAsync } from "./favSlice";
import { LoadingCircle } from "../../components/LoadingCircle";
import { CustomTable } from "../../components/CustomTable";
import "./fav.scss";

const Fav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector(selectLogin);
  const { iduser } = info || 0;
  const { loading, list } = useSelector(selectFav);
  const { list: favList } = list || {};
  const { favs } = favList || [];

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

  return (
    <main className="fav-container">
      <section className="fav-container__box">
        <article className="fav-container__search">
          <h2>FAVS</h2>
        </article>
        {!loading && (
          <article className="fav-container__list">
            <CustomTable
              title={"Title"}
              description={"Description"}
              link={"Link"}
              favs={favs}
            />
            <button className="fav-container__add-button">Add one</button>
          </article>
        )}
        {loading && <LoadingCircle />}
      </section>
    </main>
  );
};

export default Fav;
