import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin } from "../Login/loginSlice";
import { selectFav } from "./favSlice";
import { getOneListAsync } from "./favSlice";
import "./fav.scss";

const Fav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector(selectLogin);
  const { loading, list } = useSelector(selectFav);
  const { favs } = list || [];

  useEffect(() => {
    if (info.length === 0) {
      navigate("/login");
    } else {
      const { token } = info;
      const idlist = 1; //must get idlist from url params
      dispatch(getOneListAsync({ token, idlist }));
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
        <article className="fav-container__list">
          <table className="fav-list">
            <thead className="fav-list__head">
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th></th>
              <th></th>
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
        </article>
      </section>
    </main>
  );
};

export default Fav;
