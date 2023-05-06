import React from "react";
import "./fav.scss";

const Fav = () => {
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
              <tr className="list-item">
                <td>Un x100to</td>
                <td>Bad Bunny's song</td>
                <td>
                  <a href="https://www.youtube.com/watch?v=3inw26U-os4">Link</a>
                </td>
                <td>
                  <button className="edit">Edit</button>
                </td>
                <td>
                  <button className="errase">Errase</button>
                </td>
              </tr>
              <tr className="list-item">
                <td>Un x100to</td>
                <td>Bad Bunny's song</td>
                <td>
                  <a href="https://www.youtube.com/watch?v=3inw26U-os4">Link</a>
                </td>
                <td>
                  <button className="edit">Edit</button>
                </td>
                <td>
                  <button className="errase">Errase</button>
                </td>
              </tr>
              <tr className="list-item">
                <td>Un x100to</td>
                <td>Bad Bunny's song</td>
                <td>
                  <a href="https://www.youtube.com/watch?v=3inw26U-os4">Link</a>
                </td>
                <td>
                  <button className="edit">Edit</button>
                </td>
                <td>
                  <button className="errase">Errase</button>
                </td>
              </tr>
              <tr className="list-item">
                <td>Un x100to</td>
                <td>Bad Bunny's song</td>
                <td>
                  <a href="https://www.youtube.com/watch?v=3inw26U-os4">Link</a>
                </td>
                <td>
                  <button className="edit">Edit</button>
                </td>
                <td>
                  <button className="errase">Errase</button>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
};

export default Fav;
